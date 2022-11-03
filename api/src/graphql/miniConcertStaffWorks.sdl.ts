import { Role } from 'src/lib/auth'

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
    miniConcertStaffWork: MiniConcertStaffWork @requireAuth(roles: "${Role.member}")
  }

  input CreateMiniConcertStaffWorkInput {
    management: MiniConcertStaffWorkEnergy
    mc: MiniConcertStaffWorkEnergy
    visitorGuide: MiniConcertStaffWorkEnergy
    photography: MiniConcertStaffWorkEnergy
  }

  input UpdateMiniConcertStaffWorkInput {
    management: MiniConcertStaffWorkEnergy
    mc: MiniConcertStaffWorkEnergy
    visitorGuide: MiniConcertStaffWorkEnergy
    photography: MiniConcertStaffWorkEnergy
  }

  type Mutation {
    createMiniConcertStaffWork(
      input: CreateMiniConcertStaffWorkInput!
    ): MiniConcertStaffWork! @requireAuth(roles: "${Role.member}")
    updateMiniConcertStaffWork(
      input: UpdateMiniConcertStaffWorkInput!
    ): MiniConcertStaffWork! @requireAuth(roles: "${Role.member}")
  }
`
