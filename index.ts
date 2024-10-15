import agTicketTypes from './ticketTypes/ag.js'
import bnTicketTypes from './ticketTypes/bn.js'
import pgTicketTypes from './ticketTypes/pg.js'
import spTicketTypes from './ticketTypes/sp.js'
import type {
  ParsedTicketType,
  TicketType,
  TicketTypePrefix,
  TicketTypeRecord
} from './types.js'

/**
 * All available ticket types
 */
export const ticketTypes = {
  ...bnTicketTypes,
  ...spTicketTypes,
  ...agTicketTypes,
  ...pgTicketTypes
}

/**
 * Checks if a record exists for a given ticket type.
 * @param possibleTicketType - A possible ticket type
 * @returns `true` if there is a record for the ticket type.
 */
export function isTicketType(
  possibleTicketType: string
): possibleTicketType is TicketType<TicketTypePrefix> {
  return Object.hasOwn(ticketTypes, possibleTicketType)
}

/**
 * Parses a valid ticket type into its two-letter prefix and numeric suffix.
 * @param possibleTicketType - A possible ticket type
 * @returns an object parsing the ticket type into its two-letter prefix and numeric suffix.
 */
export function parseTicketType(
  possibleTicketType: string
): ParsedTicketType<TicketTypePrefix> | undefined {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return isTicketType(possibleTicketType)
    ? {
        ticketTypePrefix: possibleTicketType.slice(0, 2) as TicketTypePrefix,
        ticketTypeNumber: Number.parseInt(possibleTicketType.slice(2))
      }
    : undefined
}

/**
 * Compare function to sort ticket types alphabetically, with invalid ticket types at the end of the list.
 * @param ticketTypeA - Ticket type A
 * @param ticketTypeB - Ticket type B
 * @returns the sort value
 */
export function ticketTypeSortFunction(
  ticketTypeA: string,
  ticketTypeB: string
): number {
  /*
   * Handle equal ticket types
   */

  if (ticketTypeA === ticketTypeB) {
    return 0
  }

  const parsedTicketTypeA = parseTicketType(ticketTypeA)
  const parsedTicketTypeB = parseTicketType(ticketTypeB)

  /*
   * Handle invalid ticket types
   */

  if (parsedTicketTypeA === undefined && parsedTicketTypeB === undefined) {
    return ticketTypeA > ticketTypeB ? 1 : -1
  } else if (parsedTicketTypeA === undefined) {
    return 1
  } else if (parsedTicketTypeB === undefined) {
    return -1
  }

  /*
   * Handle parsed ticket numbers
   */

  if (
    parsedTicketTypeA.ticketTypePrefix !== parsedTicketTypeB.ticketTypePrefix
  ) {
    return parsedTicketTypeA.ticketTypePrefix >
      parsedTicketTypeB.ticketTypePrefix
      ? 1
      : -1
  }

  return parsedTicketTypeA.ticketTypeNumber - parsedTicketTypeB.ticketTypeNumber
}

/**
 * Compare function to sort ticket type records alphabetically by ticket type, with invalid ticket types at the end of the list.
 * @param ticketTypeRecordA - Ticket type record A
 * @param ticketTypeRecordB - Ticket type record B
 * @returns the sort value
 */
export function ticketTypeRecordSortFunction(
  ticketTypeRecordA: TicketTypeRecord<TicketType<TicketTypePrefix>>,
  ticketTypeRecordB: TicketTypeRecord<TicketType<TicketTypePrefix>>
): number {
  return ticketTypeSortFunction(
    ticketTypeRecordA.ticketType,
    ticketTypeRecordB.ticketType
  )
}

export { default as agTicketTypes } from './ticketTypes/ag.js'
export { default as bnTicketTypes } from './ticketTypes/bn.js'
export { default as pgTicketTypes } from './ticketTypes/pg.js'
export { default as spTicketTypes } from './ticketTypes/sp.js'

export type { TicketTypePrefix, TicketType, TicketTypeRecord } from './types.js'
