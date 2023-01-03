import { Role } from 'src/lib/auth'

export const schema = gql`
  type TeaParty {
    id: Int!
    scheduledAt: DateTime!
    mcStaff: Member
    mcSubStaff: Member
  }

  type Query {
    teaParties: [TeaParty!]! @requireAuth(roles: "${Role.member}")
    teaParty(id: Int!): TeaParty @requireAuth(roles: "${Role.confirmed}")
  }

  input CreateTeaPartyInput {
    scheduledAt: DateTime!
  }

  input UpdateTeaPartyInput {
    scheduledAt: DateTime
  }

  type Mutation {
    createTeaParty(input: CreateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.member}")
    updateTeaParty(id: Int!, input: UpdateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.member}")
    deleteTeaParty(id: Int!): TeaParty! @requireAuth(roles: "${Role.confirmed}")
  }
`
