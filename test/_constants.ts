import {
  agTicketTypes,
  bnTicketTypes,
  pgTicketTypes,
  spTicketTypes,
  ticketTypes
} from '../index.js'

export const groupedTicketTypes = {
  AG: agTicketTypes,
  BN: bnTicketTypes,
  PG: pgTicketTypes,
  SP: spTicketTypes
}

export const validTicketTypes = Object.keys(ticketTypes)
export const invalidTicketTypes = ['AG', 'BN 1', 'PG0', 'SP1000']
