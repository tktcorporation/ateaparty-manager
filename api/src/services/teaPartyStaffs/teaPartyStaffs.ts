import type {
  QueryResolvers,
  MutationResolvers,
  TeaPartyStaffRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const teaPartyStaffs: QueryResolvers['teaPartyStaffs'] = () => {
  return db.teaPartyStaff.findMany()
}

export const teaPartyStaff: QueryResolvers['teaPartyStaff'] = ({ id }) => {
  return db.teaPartyStaff.findUnique({
    where: { id },
  })
}

export const createTeaPartyStaff: MutationResolvers['createTeaPartyStaff'] = ({
  input,
}) => {
  return db.teaPartyStaff.create({
    data: input,
  })
}

export const updateTeaPartyStaff: MutationResolvers['updateTeaPartyStaff'] = ({
  id,
  input,
}) => {
  return db.teaPartyStaff.update({
    data: input,
    where: { id },
  })
}

export const deleteTeaPartyStaff: MutationResolvers['deleteTeaPartyStaff'] = ({
  id,
}) => {
  return db.teaPartyStaff.delete({
    where: { id },
  })
}

export const deleteTeaPartyStaffsByTeaPartyId: MutationResolvers['deleteTeaPartyStaffsByTeaPartyId'] =
  ({ teaPartyId }) => {
    return db.teaPartyStaff.deleteMany({
      where: { teaPartyId },
    })
  }

export const TeaPartyStaff: TeaPartyStaffRelationResolvers = {
  teaParty: (_obj, { root }) => {
    return db.teaPartyStaff.findUnique({ where: { id: root?.id } }).teaParty()
  },
  mcStaff: (_obj, { root }) => {
    return db.teaPartyStaff.findUnique({ where: { id: root?.id } }).mcStaff()
  },
  mcSubStaff: (_obj, { root }) => {
    return db.teaPartyStaff.findUnique({ where: { id: root?.id } }).mcSubStaff()
  },
}
