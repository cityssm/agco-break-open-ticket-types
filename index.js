import agTicketTypes from './ticketTypes/ag.js';
import bnTicketTypes from './ticketTypes/bn.js';
import pgTicketTypes from './ticketTypes/pg.js';
import spTicketTypes from './ticketTypes/sp.js';
export const ticketTypes = {
    ...bnTicketTypes,
    ...spTicketTypes,
    ...agTicketTypes,
    ...pgTicketTypes
};
/**
 * Checks if a record exists for a given ticket type.
 * @param possibleTicketType - A possible ticket type
 * @returns `true` if there is a record for the ticket type.
 */
export function isTicketType(possibleTicketType) {
    return Object.hasOwn(ticketTypes, possibleTicketType);
}
export { default as agTicketTypes } from './ticketTypes/ag.js';
export { default as bnTicketTypes } from './ticketTypes/bn.js';
export { default as pgTicketTypes } from './ticketTypes/pg.js';
export { default as spTicketTypes } from './ticketTypes/sp.js';
