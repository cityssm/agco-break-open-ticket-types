import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  isTicketType,
  parseTicketType,
  ticketTypeRecordSortFunction,
  ticketTypeSortFunction,
  ticketTypes
} from '../index.js'
import type { ParsedTicketType, TicketTypePrefix } from '../types.js'

import {
  groupedTicketTypes,
  invalidTicketTypes,
  sortedTicketTypeRecords,
  sortedTicketTypes,
  validTicketTypes
} from './_constants.js'

function shuffleArray(array: unknown[]): void {
  for (let index = array.length - 1; index >= 0; index--) {
    // eslint-disable-next-line sonarjs/pseudo-random
    const index_ = Math.floor(Math.random() * (index + 1))
    const temp = array[index]
    array[index] = array[index_]
    array[index_] = temp
  }
}

await describe('agco-break-open-ticket-types', async () => {
  await describe('validate records', async () => {
    await it('contains valid records in ticketTypes', () => {
      for (const [lookupKey, lookupValue] of Object.entries(ticketTypes)) {
        assert.strictEqual(lookupKey, lookupValue.ticketType)

        assert.ok(
          lookupValue.ticketPrice > 0,
          `ticketPrice must be greater than 0: ${lookupKey}`
        )

        assert.ok(
          lookupValue.ticketCount > 0,
          `ticketCount must be greater than 0: ${lookupKey}`
        )

        assert.ok(
          lookupValue.prizesPerDeal > 0,
          `prizesPerDeal must be greater than 0: ${lookupKey}`
        )
      }
    })

    for (const [ticketTypePrefix, ticketTypesByPrefix] of Object.entries(
      groupedTicketTypes
    )) {
      await it(`contains sorted "${ticketTypePrefix}" records in ${ticketTypePrefix.toLowerCase()}TicketTypes`, () => {
        // eslint-disable-next-line @typescript-eslint/init-declarations
        let previousParsedTicketType:
          | ParsedTicketType<TicketTypePrefix>
          | undefined

        for (const ticketType of Object.keys(ticketTypesByPrefix)) {
          const parsedTicketType = parseTicketType(ticketType)

          assert.ok(parsedTicketType !== undefined)

          assert.strictEqual(
            parsedTicketType.ticketTypePrefix,
            ticketTypePrefix
          )

          if (previousParsedTicketType !== undefined) {
            assert.ok(
              previousParsedTicketType.ticketTypeNumber <
                parsedTicketType.ticketTypeNumber,

              `Ticket types incorrectly ordered: ${previousParsedTicketType.ticketTypeNumber}, ${parsedTicketType.ticketTypeNumber}`
            )
          }

          previousParsedTicketType = parsedTicketType
        }
      })
    }
  })

  await describe('isTicketType', async () => {
    await it('returns `true` for valid ticket types', () => {
      for (const validTicketType of validTicketTypes) {
        assert.ok(isTicketType(validTicketType))
      }
    })

    await it('returns `false` for invalid ticket types', () => {
      for (const invalidTicketType of invalidTicketTypes) {
        assert.ok(!isTicketType(invalidTicketType))
      }
    })
  })

  await describe('parseTicketType', async () => {
    await it('returns a parsed ticket type for valid ticket types', () => {
      for (const validTicketType of validTicketTypes) {
        assert.notStrictEqual(parseTicketType(validTicketType), undefined)
      }
    })

    await it('returns `undefined` for invalid ticket types', () => {
      for (const invalidTicketType of invalidTicketTypes) {
        assert.strictEqual(parseTicketType(invalidTicketType), undefined)
      }
    })
  })

  await describe('ticketTypeSortFunction', async () => {
    await it(`sorts ticket types`, () => {
      for (let iteration = 0; iteration < 10; iteration += 1) {
        const ticketTypesList = [...sortedTicketTypes]

        shuffleArray(ticketTypesList)

        console.log(
          `Iteration ${iteration} before: [${ticketTypesList.join(', ')}]`
        )

        ticketTypesList.sort(ticketTypeSortFunction)

        console.log(
          `Iteration ${iteration} after:  [${ticketTypesList.join(', ')}]\n`
        )

        for (const [index, element] of ticketTypesList.entries()) {
          assert.strictEqual(element, sortedTicketTypes[index])
        }
      }
    })
  })

  await describe('ticketTypeRecordSortFunction', async () => {
    await it(`sorts ticket types`, () => {
      for (let iteration = 0; iteration < 10; iteration += 1) {
        const ticketTypeRecordsList = [...sortedTicketTypeRecords]

        shuffleArray(ticketTypeRecordsList)

        ticketTypeRecordsList.sort(ticketTypeRecordSortFunction)

        for (const [index, element] of ticketTypeRecordsList.entries()) {
          assert.strictEqual(element, sortedTicketTypeRecords[index])
        }
      }
    })
  })
})
