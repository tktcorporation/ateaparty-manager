import { Role } from 'src/lib/auth'

export const schema = gql`
  type TeaParty {
    id: Int!
    scheduledAt: DateTime!
    teaPartyStaff: TeaPartyStaff
  }

  type Query {
    teaParties: [TeaParty!]! @requireAuth(roles: "${Role.member}")
    teaParty(id: Int!): TeaParty @requireAuth(roles: "${Role.member}")
  }

  input CreateTeaPartyInput {
    scheduledAt: DateTime!
  }

  input UpdateTeaPartyInput {
    scheduledAt: DateTime
  }

  input UpdateTeaPartyWithStaffInput {
    scheduledAt: DateTime
    mcStaffId: Int
    mcSubStaffId: Int
  }

  type Mutation {
    createTeaParty(input: CreateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.member}")
    updateTeaParty(id: Int!, input: UpdateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.member}")
    updateTeaPartyWithStaff(id: Int!, input: UpdateTeaPartyWithStaffInput!): TeaParty! @requireAuth(roles: "${Role.member}")
    deleteTeaParty(id: Int!): TeaParty! @requireAuth(roles: "${Role.confirmed}")
  }
`
