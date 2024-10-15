import agTicketTypes from './ticketTypes/ag.js'
import bnTicketTypes from './ticketTypes/bn.js'
import pgTicketTypes from './ticketTypes/pg.js'
import spTicketTypes from './ticketTypes/sp.js'
import type {
  ParsedTicketType,
  TicketType,
  TicketTypePrefix
} from './types.js'

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

export { default as agTicketTypes } from './ticketTypes/ag.js'
export { default as bnTicketTypes } from './ticketTypes/bn.js'
export { default as pgTicketTypes } from './ticketTypes/pg.js'
export { default as spTicketTypes } from './ticketTypes/sp.js'

export type { TicketTypePrefix, TicketType, TicketTypeRecord } from './types.js'
