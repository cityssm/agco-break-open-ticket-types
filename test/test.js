import assert from 'node:assert';
import { describe, it } from 'node:test';
import { isTicketType, ticketTypes } from '../index.js';
await describe('agco-break-open-ticket-types', async () => {
    await it('contains valid records', () => {
        for (const [lookupKey, lookupValue] of Object.entries(ticketTypes)) {
            assert.strictEqual(lookupKey, lookupValue.ticketType);
        }
    });
    await describe('isTicketType', async () => {
        await it('Returns `true` for valid ticket types', () => {
            assert.ok(isTicketType('AG1'));
            assert.ok(isTicketType('BN1'));
            assert.ok(isTicketType('PG1'));
            assert.ok(isTicketType('SP1'));
        });
        await it('Returns `false` for invalid ticket types', () => {
            assert.ok(!isTicketType('AG'));
            assert.ok(!isTicketType('BN 1'));
            assert.ok(!isTicketType('PG0'));
            assert.ok(!isTicketType('SP1000'));
        });
    });
});
