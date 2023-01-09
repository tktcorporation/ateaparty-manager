import axios from 'axios'
import { Member } from 'types/graphql'

import type { Decoded } from '@redwoodjs/api'
import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'

import { isGuildMember } from 'src/lib/discord/discord'
import { logger } from 'src/lib/logger'
import { confirmedSubBySub } from 'src/services/confirmedSubs/confirmedSubs'
import { memberBySub } from 'src/services/members/members'

export enum Role {
  admin = 'admin',
  confirmed = 'confirmed',
  member = 'member',
}
export type RoleType = keyof typeof Role

/**
 * Represents the user attributes returned by the decoding the
 * Authentication provider's JWT together with an optional list of roles.
 */
type RedwoodUser = Record<string, unknown> & {
  roles?: string[]
  member?: Member
  sub: string
  name: string
  pictureUrl: string
}

/**
 * getCurrentUser returns the user information together with
 * an optional collection of roles used by requireAuth() to check
 * if the user is authenticated or has role-based access
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the return object only once you've decided they are safe to be seen
 * if someone were to open the Web Inspector in their browser.
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 *
 * @param decoded - The decoded access token containing user info and JWT
 *   claims like `sub`. Note, this could be null.
 * @param { token, SupportedAuthTypes type } - The access token itself as well
 *   as the auth provider type
 * @param { APIGatewayEvent event, Context context } - An optional object which
 *   contains information from the invoker such as headers and cookies, and the
 *   context information about the invocation such as IP Address
 * @returns RedwoodUser
 */
export const getCurrentUser = async (
  decoded: Decoded,
  { token }: { token: string }
): Promise<RedwoodUser | null> => {
  if (!decoded) {
    return null
  }

  const decodedRoles = decoded[process.env.AUTH0_AUDIENCE + '/roles']
  const roles: AllowedRoles =
    decodedRoles && Array.isArray(decodedRoles) ? decodedRoles : []

  const { sub, name, pictureUrl } = await getUserInfoFromAuth0(token)

  const confirmedSub = await confirmedSubBySub({ sub })
  confirmedSub && roles.push(Role.confirmed)

  const { member, role } = await getMemberAndRoleBySub(sub)
  role && roles.push(role)

  logger.debug(`${__filename}: roles ${roles}`)

  if (roles) {
    return { ...decoded, member, roles, name, pictureUrl, sub }
  }

  return { ...decoded, name, pictureUrl, sub }
}

const getMemberAndRoleBySub = async (
  sub: string
): Promise<{
  member: Member | undefined
  role: RoleType | undefined
}> => {
  const userId = sub.split('|')[2]
  const isMember = await isGuildMember(userId)
  const member = isMember
    ? ((await memberBySub({
        sub,
      })) as Member)
    : undefined
  const role = member ? Role.member : undefined
  return { member, role }
}

const getUserInfoFromAuth0 = async (accessToken: string) => {
  const {
    data,
  }: {
    data: {
      [key: string]: unknown
    }
  } = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (!data) {
    throw new Error('Unable to get user info from Auth0')
  }

  const { sub, picture, name } = data
  if (
    typeof sub !== 'string' ||
    typeof picture !== 'string' ||
    typeof name !== 'string'
  ) {
    throw new Error('Unable to get data params from Auth0')
  }
  return {
    sub,
    pictureUrl: picture,
    name,
  }
}

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!context.currentUser
}

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */
type AllowedRoles = string[] | undefined

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = (roles: AllowedRoles): boolean => {
  if (!isAuthenticated()) {
    return false
  }

  const currentUserRoles = context.currentUser?.roles

  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles
    } else if (Array.isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some((allowedRole) => roles === allowedRole)
    }
  }

  if (Array.isArray(roles)) {
    if (Array.isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some((allowedRole) =>
        roles.includes(allowedRole)
      )
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return roles.some((allowedRole) => currentUserRoles === allowedRole)
    }
  }

  // roles not found
  return false
}

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles?: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} - If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({ roles }: { roles?: AllowedRoles } = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
