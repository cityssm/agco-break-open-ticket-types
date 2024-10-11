import type { TicketTypePrefix, TicketTypesLookupObject } from './types.js';
export declare const ticketTypes: TicketTypesLookupObject<TicketTypePrefix>;
/**
 * Checks if a record exists for a given ticket type.
 * @param possibleTicketType - A possible ticket type
 * @returns `true` if there is a record for the ticket type.
 */
export declare function isTicketType(possibleTicketType: string): boolean;
export { default as agTicketTypes } from './ticketTypes/ag.js';
export { default as bnTicketTypes } from './ticketTypes/bn.js';
export { default as pgTicketTypes } from './ticketTypes/pg.js';
export { default as spTicketTypes } from './ticketTypes/sp.js';
export type { TicketTypePrefix, TicketType, TicketTypeRecord } from './types.js';
