import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  agTicketTypes,
  bnTicketTypes,
  isTicketType,
  pgTicketTypes,
  spTicketTypes,
  ticketTypes
} from '../index.js'

function parseTicketTypeNumber(ticketType: string): number {
  return Number.parseInt(ticketType.slice(2))
}

await describe('agco-break-open-ticket-types', async () => {
  await describe('validate records', async () => {
    await it('contains valid records in ticketTypes', () => {
      for (const [lookupKey, lookupValue] of Object.entries(ticketTypes)) {
        assert.strictEqual(lookupKey, lookupValue.ticketType)
      }
    })

    const groupedTicketTypes = {
      AG: agTicketTypes,
      BN: bnTicketTypes,
      PG: pgTicketTypes,
      SP: spTicketTypes
    }

    for (const [ticketTypePrefix, ticketTypesByPrefix] of Object.entries(
      groupedTicketTypes
    )) {
      await it(`contains sorted "${ticketTypePrefix}" records in ${ticketTypePrefix.toLowerCase()}TicketTypes`, () => {
        let previousTicketType = ''

        for (const [index, ticketType] of Object.keys(
          ticketTypesByPrefix
        ).entries()) {
          assert.ok(ticketType.startsWith(ticketTypePrefix))

          if (index !== 0) {
            assert.ok(
              parseTicketTypeNumber(previousTicketType) <
                parseTicketTypeNumber(ticketType)
            )
          }

          previousTicketType = ticketType
        }
      })
    }
  })

  await describe('isTicketType', async () => {
    await it('Returns `true` for valid ticket types', () => {
      assert.ok(isTicketType('AG1'))
      assert.ok(isTicketType('BN1'))
      assert.ok(isTicketType('PG1'))
      assert.ok(isTicketType('SP1'))
    })

    await it('Returns `false` for invalid ticket types', () => {
      assert.ok(!isTicketType('AG'))
      assert.ok(!isTicketType('BN 1'))
      assert.ok(!isTicketType('PG0'))
      assert.ok(!isTicketType('SP1000'))
    })
  })
})
