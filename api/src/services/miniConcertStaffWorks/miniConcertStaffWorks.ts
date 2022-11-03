import type {
  QueryResolvers,
  MutationResolvers,
  MiniConcertStaffWorkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const miniConcertStaffWork: QueryResolvers['miniConcertStaffWork'] =
  () => {
    const member = context.currentUser.member
    return db.miniConcertStaffWork.findUnique({
      where: { memberId: member.id },
    })
  }

export const updateMiniConcertStaffWork: MutationResolvers['updateMiniConcertStaffWork'] =
  ({ input }) => {
    return db.miniConcertStaffWork.update({
      data: input,
      where: { memberId: context.currentUser.member.id },
    })
  }

export const MiniConcertStaffWork: MiniConcertStaffWorkRelationResolvers = {
  member: (_obj, { root }) => {
    return db.miniConcertStaffWork
      .findUnique({ where: { id: root?.id } })
      .member()
  },
}
