import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const teaParties: QueryResolvers['teaParties'] = () => {
  return db.teaParty.findMany()
}

export const teaParty: QueryResolvers['teaParty'] = ({ id }) => {
  return db.teaParty.findUnique({
    where: { id },
  })
}

export const createTeaParty: MutationResolvers['createTeaParty'] = ({
  input,
}) => {
  return db.teaParty.create({
    data: input,
  })
}

export const updateTeaParty: MutationResolvers['updateTeaParty'] = ({
  id,
  input,
}) => {
  return db.teaParty.update({
    data: input,
    where: { id },
  })
}

export const deleteTeaParty: MutationResolvers['deleteTeaParty'] = ({ id }) => {
  return db.teaParty.delete({
    where: { id },
  })
}
