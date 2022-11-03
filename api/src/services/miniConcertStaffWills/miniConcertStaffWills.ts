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

export const upsertMiniConcertStaffWill: MutationResolvers['upsertMiniConcertStaffWill'] =
  ({ input }) => {
    const id = context?.currentUser?.member?.id
    if (!id) {
      throw new Error('Not logged in')
    }
    const query = {
      create: {
        memberId: id,
        staffWill: input.staffWill,
        staffWantToDo: input.staffWantToDo || '',
      },
      update: {
        ...(input.staffWill !== undefined && { staffWill: input.staffWill }),
        ...(input.staffWantToDo !== undefined && {
          staffWantToDo: input.staffWantToDo,
        }),
      },
      where: { memberId: id },
    }
    return db.miniConcertStaffWill.upsert(query)
  }

export const MiniConcertStaffWill: MiniConcertStaffWillRelationResolvers = {
  member: (_obj, { root }) => {
    return db.miniConcertStaffWill
      .findUnique({ where: { id: root?.id } })
      .member()
  },
}
