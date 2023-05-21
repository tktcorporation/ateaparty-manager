export const schema = gql`
  type TeaParty {
    id: Int!
    date: DateTime!
    host: Member!
    hostId: Int!
    cohost: Member
    cohostId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    teaParties: [TeaParty!]! @requireAuth
    # まだ開催されていないお茶会を取得する
    teaPartiesNotYetHeld: [TeaParty!]! @requireAuth
    teaParty(id: Int!): TeaParty @requireAuth
  }

  input CreateTeaPartyInput {
    date: DateTime!
    hostId: Int!
    cohostId: Int
  }

  input UpdateTeaPartyInput {
    date: DateTime
    hostId: Int
    cohostId: Int
  }

  type Mutation {
    createTeaParty(input: CreateTeaPartyInput!): TeaParty! @requireAuth
    updateTeaParty(id: Int!, input: UpdateTeaPartyInput!): TeaParty!
      @requireAuth
    deleteTeaParty(id: Int!): TeaParty! @requireAuth
  }
`
