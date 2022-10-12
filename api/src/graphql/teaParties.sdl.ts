export const schema = gql`
  type TeaParty {
    id: Int!
    scheduledAt: DateTime!
  }

  type Query {
    teaParties: [TeaParty!]! @requireAuth
    teaParty(id: Int!): TeaParty @requireAuth
  }

  input CreateTeaPartyInput {
    scheduledAt: DateTime!
  }

  input UpdateTeaPartyInput {
    scheduledAt: DateTime
  }

  type Mutation {
    createTeaParty(input: CreateTeaPartyInput!): TeaParty! @requireAuth
    updateTeaParty(id: Int!, input: UpdateTeaPartyInput!): TeaParty!
      @requireAuth
    deleteTeaParty(id: Int!): TeaParty! @requireAuth
  }
`
