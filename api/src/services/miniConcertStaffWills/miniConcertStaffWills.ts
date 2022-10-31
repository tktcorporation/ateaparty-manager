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

export const miniConcertStaffWill: QueryResolvers['miniConcertStaffWill'] = ({
  id,
}) => {
  return db.miniConcertStaffWill.findUnique({
    where: { id },
  })
}

export const createMiniConcertStaffWill: MutationResolvers['createMiniConcertStaffWill'] =
  ({ input }) => {
    return db.miniConcertStaffWill.create({
      data: input,
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
