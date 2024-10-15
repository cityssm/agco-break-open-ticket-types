import type { TicketTypesLookupObject } from '../types'

/**
 * Ticket types starting with "PG"
 */
export default {
  PG1: {
    ticketType: 'PG1',
    ticketPrice: 1,
    ticketCount: 440,
    prizesPerDeal: 286
  },
  PG2: {
    ticketType: 'PG2',
    ticketPrice: 1,
    ticketCount: 600,
    prizesPerDeal: 392
  },
  PG3: {
    ticketType: 'PG3',
    ticketPrice: 0.5,
    ticketCount: 3360,
    prizesPerDeal: 1115
  },
  PG4: {
    ticketType: 'PG4',
    ticketPrice: 1,
    ticketCount: 320,
    prizesPerDeal: 208
  }
} satisfies TicketTypesLookupObject<'PG'>
