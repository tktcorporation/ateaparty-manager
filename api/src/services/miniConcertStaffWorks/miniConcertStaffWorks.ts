import type {
  QueryResolvers,
  MutationResolvers,
  MiniConcertStaffWorkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const miniConcertStaffWorks: QueryResolvers['miniConcertStaffWorks'] =
  () => {
    return db.miniConcertStaffWork.findMany()
  }

export const miniConcertStaffWork: QueryResolvers['miniConcertStaffWork'] = ({
  id,
}) => {
  return db.miniConcertStaffWork.findUnique({
    where: { id },
  })
}

export const createMiniConcertStaffWork: MutationResolvers['createMiniConcertStaffWork'] =
  ({ input }) => {
    return db.miniConcertStaffWork.create({
      data: input,
    })
  }

export const updateMiniConcertStaffWork: MutationResolvers['updateMiniConcertStaffWork'] =
  ({ id, input }) => {
    return db.miniConcertStaffWork.update({
      data: input,
      where: { id },
    })
  }

export const deleteMiniConcertStaffWork: MutationResolvers['deleteMiniConcertStaffWork'] =
  ({ id }) => {
    return db.miniConcertStaffWork.delete({
      where: { id },
    })
  }

export const MiniConcertStaffWork: MiniConcertStaffWorkRelationResolvers = {
  member: (_obj, { root }) => {
    return db.miniConcertStaffWork
      .findUnique({ where: { id: root?.id } })
      .member()
  },
}
