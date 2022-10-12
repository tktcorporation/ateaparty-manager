export const schema = gql`
  type ConfirmedSub {
    id: Int!
    sub: String!
  }

  type Query {
    confirmedSubs: [ConfirmedSub!]! @requireAuth
    confirmedSub(id: Int!): ConfirmedSub @requireAuth
  }

  input CreateConfirmedSubInput {
    sub: String!
  }

  input UpdateConfirmedSubInput {
    sub: String
  }

  type Mutation {
    createConfirmedSub(input: CreateConfirmedSubInput!): ConfirmedSub!
      @requireAuth
    updateConfirmedSub(
      id: Int!
      input: UpdateConfirmedSubInput!
    ): ConfirmedSub! @requireAuth
    deleteConfirmedSub(id: Int!): ConfirmedSub! @requireAuth
  }
`
