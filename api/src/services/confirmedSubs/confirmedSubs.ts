import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const confirmedSubs: QueryResolvers['confirmedSubs'] = () => {
  return db.confirmedSub.findMany()
}

export const confirmedSub: QueryResolvers['confirmedSub'] = ({ id }) => {
  return db.confirmedSub.findUnique({
    where: { id },
  })
}

export const createConfirmedSub: MutationResolvers['createConfirmedSub'] = ({
  input,
}) => {
  return db.confirmedSub.create({
    data: input,
  })
}

export const updateConfirmedSub: MutationResolvers['updateConfirmedSub'] = ({
  id,
  input,
}) => {
  return db.confirmedSub.update({
    data: input,
    where: { id },
  })
}

export const deleteConfirmedSub: MutationResolvers['deleteConfirmedSub'] = ({
  id,
}) => {
  return db.confirmedSub.delete({
    where: { id },
  })
}
