import { Role } from 'src/lib/auth'

export const schema = gql`
  type Member {
    id: Int!
    sub: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    members: [Member!]! @requireAuth(roles: "${Role.admin}")
    member(id: Int!): Member @requireAuth(roles: "${Role.admin}")
  }

  input CreateMemberInput {
    sub: String!
  }

  input UpdateMemberInput {
    sub: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth(roles: "${Role.admin}")
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth(roles: "${Role.admin}")
    # deleteMember(id: Int!): Member! @requireAuth(roles: "${Role.admin}")
    upsertMember(sub: String!): Member! @requireAuth(roles: "${Role.admin}")
  }
`
