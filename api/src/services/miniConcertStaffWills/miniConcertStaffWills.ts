import type {
  QueryResolvers,
  MutationResolvers,
  MiniConcertStaffWillRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const miniConcertStaffWills: QueryResolvers['miniConcertStaffWills'] =
  () => {
    return db.miniConcertStaffWill.findMany()
  }

export const miniConcertStaffWill: QueryResolvers['miniConcertStaffWill'] =
  () => {
    return db.miniConcertStaffWill.findUnique({
      where: { id: context?.currentUser?.member?.id },
    })
  }

export const createMiniConcertStaffWill: MutationResolvers['createMiniConcertStaffWill'] =
  ({ input }) => {
    const id = context?.currentUser?.member?.id
    if (!id) {
      throw new Error('Not logged in')
    }
    return db.miniConcertStaffWill.create({
      data: {
        memberId: id,
        StaffWantToDo: input.StaffWantToDo,
      },
    })
  }

export const updateMiniConcertStaffWill: MutationResolvers['updateMiniConcertStaffWill'] =
  ({ id, input }) => {
    return db.miniConcertStaffWill.update({
      data: input,
      where: { id },
    })
  }

export const deleteMiniConcertStaffWill: MutationResolvers['deleteMiniConcertStaffWill'] =
  ({ id }) => {
    return db.miniConcertStaffWill.delete({
      where: { id },
    })
  }

export const MiniConcertStaffWill: MiniConcertStaffWillRelationResolvers = {
  member: (_obj, { root }) => {
    return db.miniConcertStaffWill
      .findUnique({ where: { id: root?.id } })
      .member()
  },
}
