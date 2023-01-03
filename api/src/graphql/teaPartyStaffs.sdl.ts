import { Role } from 'src/lib/auth'

export const schema = gql`
  type TeaPartyStaff {
    id: Int!
    teaPartyId: Int!
    teaParty: TeaParty!
    mcStaffId: Int!
    mcStaff: Member!
    mcSubStaffId: Int
    mcSubStaff: Member
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teaPartyStaffs: [TeaPartyStaff!]! @requireAuth(roles: "${Role.member}")
    teaPartyStaff(id: Int!): TeaPartyStaff @requireAuth(roles: "${Role.member}")
  }

  input CreateTeaPartyStaffInput {
    teaPartyId: Int!
    mcStaffId: Int!
    mcSubStaffId: Int
  }

  input UpdateTeaPartyStaffInput {
    teaPartyId: Int
    mcStaffId: Int
    mcSubStaffId: Int
  }

  type Mutation {
    createTeaPartyStaff(input: CreateTeaPartyStaffInput!): TeaPartyStaff!
      @requireAuth
    updateTeaPartyStaff(
      id: Int!
      input: UpdateTeaPartyStaffInput!
    ): TeaPartyStaff! @requireAuth
    deleteTeaPartyStaff(id: Int!): TeaPartyStaff! @requireAuth
  }
`
