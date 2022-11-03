import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const members: QueryResolvers['members'] = () => {
  return db.member.findMany()
}

export const member: QueryResolvers['member'] = ({ id }) => {
  return db.member.findUnique({
    where: { id },
  })
}

// find or create
export const upsertMember: MutationResolvers['upsertMember'] = async ({
  sub,
}) => {
  const member = await db.member.findUnique({
    where: { sub },
  })

  if (member) {
    return member
  }

  return createMember({ input: { sub } })
}

export const createMember: MutationResolvers['createMember'] = async ({
  input,
}) => {
  const member = await db.member.create({
    data: input,
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
