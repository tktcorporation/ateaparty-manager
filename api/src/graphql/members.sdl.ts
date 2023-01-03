import { Role } from 'src/lib/auth'

export const schema = gql`
  type Member {
    id: Int!

    sub: String!
    name: String!
    pictureUrl: String!

    MiniConcertStaffWork: MiniConcertStaffWork

    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    members: [Member!]! @requireAuth(roles: "${Role.admin}")
    member(id: Int!): Member @requireAuth(roles: "${Role.admin}")
  }

  input CreateMemberInput {
    sub: String!
    name: String!
    pictureUrl: String!
  }

  input UpdateMemberInput {
    sub: String
    name: String
    pictureUrl: String
  }

  type Mutation {
    createMember(input: CreateMemberInput!): Member! @requireAuth(roles: "${Role.admin}")
    updateMember(id: Int!, input: UpdateMemberInput!): Member! @requireAuth(roles: "${Role.admin}")
    # deleteMember(id: Int!): Member! @requireAuth(roles: "${Role.admin}")
    upsertMember(input: CreateMemberInput!): Member! @requireAuth(roles: "${Role.admin}")
  }
`
