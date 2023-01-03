import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const teaParties: QueryResolvers['teaParties'] = () => {
  return db.teaParty.findMany()
}

export const teaParty: QueryResolvers['teaParty'] = ({ id }) => {
  return db.teaParty.findUnique({
    where: { id },
    include: { teaPartyStaff: true },
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

export const updateTeaPartyWithStaff: MutationResolvers['updateTeaPartyWithStaff'] =
  ({ id, input }) => {
    const teaPartyStaffInput = {
      mcStaff: undefined,
      mcSubStaff: undefined,
    }
    if (input.mcStaffId !== undefined) {
      teaPartyStaffInput.mcStaff =
        input.mcStaffId === null ? null : { connect: { id: input.mcStaffId } }
    }
    if (input.mcSubStaffId !== undefined) {
      teaPartyStaffInput.mcSubStaff =
        input.mcSubStaffId === null
          ? null
          : { connect: { id: input.mcSubStaffId } }
    }
    return db.teaParty.update({
      data: {
        scheduledAt: input.scheduledAt,
        teaPartyStaff: {
          upsert: {
            create: teaPartyStaffInput,
            update: teaPartyStaffInput,
          },
        },
      },
      where: { id },
    })
  }

export const deleteTeaParty: MutationResolvers['deleteTeaParty'] = ({ id }) => {
  return db.teaParty.delete({
    where: { id },
  })
}
