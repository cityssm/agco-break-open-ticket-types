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

export const sortedTicketTypes = [
  'AG5',
  'AG10',
  'BN4',
  'BN4',
  'BN6',
  'AAA',
  'AAA',
  'XXX',
  'YYY'
]

export const sortedTicketTypeRecords = [
  agTicketTypes.AG5,
  agTicketTypes.AG10,
  bnTicketTypes.BN4,
  bnTicketTypes.BN4,
  bnTicketTypes.BN6
]
