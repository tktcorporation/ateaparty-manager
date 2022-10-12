import { Role } from 'src/lib/auth'

export const schema = gql`
  type TeaParty {
    id: Int!
    scheduledAt: DateTime!
  }

  type Query {
    teaParties: [TeaParty!]! @requireAuth(roles: "${Role.confirmed}")
    teaParty(id: Int!): TeaParty @requireAuth(roles: "${Role.confirmed}")
  }

  input CreateTeaPartyInput {
    scheduledAt: DateTime!
  }

  input UpdateTeaPartyInput {
    scheduledAt: DateTime
  }

  type Mutation {
    createTeaParty(input: CreateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.confirmed}")
    updateTeaParty(id: Int!, input: UpdateTeaPartyInput!): TeaParty! @requireAuth(roles: "${Role.confirmed}")
    deleteTeaParty(id: Int!): TeaParty! @requireAuth(roles: "${Role.confirmed}")
  }
`
