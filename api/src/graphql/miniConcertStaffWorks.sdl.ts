export const schema = gql`
  type MiniConcertStaffWork {
    id: Int!
    management: MiniConcertStaffWorkEnergy!
    mc: MiniConcertStaffWorkEnergy!
    visitorGuide: MiniConcertStaffWorkEnergy!
    photography: MiniConcertStaffWorkEnergy!
    member: Member!
    memberId: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  enum MiniConcertStaffWorkEnergy {
    CanDo
    TeachMe
    NotNow
  }

  type Query {
    miniConcertStaffWorks: [MiniConcertStaffWork!]! @requireAuth
    miniConcertStaffWork(id: Int!): MiniConcertStaffWork @requireAuth
  }

  input CreateMiniConcertStaffWorkInput {
    management: MiniConcertStaffWorkEnergy!
    mc: MiniConcertStaffWorkEnergy!
    visitorGuide: MiniConcertStaffWorkEnergy!
    photography: MiniConcertStaffWorkEnergy!
    memberId: Int!
  }

  input UpdateMiniConcertStaffWorkInput {
    management: MiniConcertStaffWorkEnergy
    mc: MiniConcertStaffWorkEnergy
    visitorGuide: MiniConcertStaffWorkEnergy
    photography: MiniConcertStaffWorkEnergy
    memberId: Int
  }

  type Mutation {
    createMiniConcertStaffWork(
      input: CreateMiniConcertStaffWorkInput!
    ): MiniConcertStaffWork! @requireAuth
    updateMiniConcertStaffWork(
      id: Int!
      input: UpdateMiniConcertStaffWorkInput!
    ): MiniConcertStaffWork! @requireAuth
    deleteMiniConcertStaffWork(id: Int!): MiniConcertStaffWork! @requireAuth
  }
`
