import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { ValidationError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { isGuildMember } from 'src/lib/discord/discord'

export const members: QueryResolvers['members'] = () => {
  return db.member.findMany()
}

export const member: QueryResolvers['member'] = ({ id }) => {
  return db.member.findUnique({
    where: { id },
  })
}

export const memberBySub: QueryResolvers['memberBySub'] = ({ sub }) => {
  return db.member.findUnique({
    where: { sub },
  })
}

export const createMember: MutationResolvers['createMember'] = async () => {
  const userId = context.currentUser.sub.split('|')[2]
  const isMember = await isGuildMember(userId)
  if (!isMember) {
    throw new ValidationError(
      'メンバー登録を行うには「あ茶会」のメンバーである必要があります'
    )
  }
  const isAlreadyRegistered = await db.member.findUnique({
    where: { sub: context.currentUser.sub },
  })
  if (isAlreadyRegistered) {
    throw new ValidationError('すでにメンバー登録されています')
  }
  const member = await db.member.create({
    data: {
      sub: context.currentUser.sub,
      name: context.currentUser.name,
      avatar: context.currentUser.pictureUrl,
    },
  })
  await db.miniConcertStaffWork.create({
    data: {
      member: {
        connect: {
          id: member.id,
        },
      },
    },
  })
  return member
}

export const updateMember: MutationResolvers['updateMember'] = ({
  id,
  input,
}) => {
  return db.member.update({
    data: input,
    where: { id },
  })
}
