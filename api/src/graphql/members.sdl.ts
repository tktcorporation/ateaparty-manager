export const schema = gql`
  type Member {
    id: Int!
    sub: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    miniConcertStaffWill: MiniConcertStaffWill
  }

  type Query {
    members: [Member!]! @requireAuth
    member(id: Int!): Member @requireAuth
  }

  input CreateMemberInput {
    sub: String!
  }

  input UpdateMemberInput {
    sub: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth
    # deleteMember(id: Int!): Member! @requireAuth
    upsertMember(sub: String!): Member! @requireAuth
  }
`
