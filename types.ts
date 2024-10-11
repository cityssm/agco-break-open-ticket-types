export type TicketTypePrefix = 'AG' | 'BN' | 'PG' | 'SP'

export type TicketType<T extends TicketTypePrefix> = `${T}${number}`

export interface TicketTypeRecord<TicketType> {
  ticketType: TicketType
  ticketPrice: number
  ticketCount: number
  prizesPerDeal: number
}

export type TicketTypesLookupObject<T extends TicketTypePrefix> = Record<
  TicketType<T>,
  TicketTypeRecord<TicketType<T>>
>
