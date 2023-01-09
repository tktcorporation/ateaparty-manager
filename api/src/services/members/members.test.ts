import type { Member } from '@prisma/client'

import * as discord from 'src/lib/discord'

import { members, member, createMember, updateMember } from './members'
import type { StandardScenario } from './members.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('members', () => {
  scenario('returns all members', async (scenario: StandardScenario) => {
    const result = await members()

    expect(result.length).toEqual(Object.keys(scenario.member).length)
  })

  scenario('returns a single member', async (scenario: StandardScenario) => {
    const result = await member({ id: scenario.member.one.id })

    expect(result).toEqual(scenario.member.one)
  })

  scenario('creates a member', async () => {
    const isGuildMemberSpy = jest
      .spyOn(discord, 'isGuildMember')
      .mockReturnValueOnce(new Promise((resolve) => resolve(true)))
    mockCurrentUser({
      sub: 'oauth|discord|123412341234123412',
      name: 'Test User',
      pictureUrl: 'https://example.com/image.jpg',
    })
    const result = await createMember()

    expect(result.sub).toEqual('oauth|discord|123412341234123412')
    expect(isGuildMemberSpy).toHaveBeenCalledWith('123412341234123412')
  })

  scenario('updates a member', async (scenario: StandardScenario) => {
    const original = (await member({ id: scenario.member.one.id })) as Member
    const result = await updateMember({
      id: original.id,
      input: { sub: 'oauth|discord|123412341234123412' },
    })

    expect(result.sub).toEqual('oauth|discord|123412341234123412')
  })
})
