# AGCO Break Open Ticket Types

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/agco-break-open-ticket-types)](https://www.npmjs.com/package/@cityssm/agco-break-open-ticket-types)
[![Maintainability](https://api.codeclimate.com/v1/badges/b6538a4b810f5968ee30/maintainability)](https://codeclimate.com/github/cityssm/agco-break-open-ticket-types/maintainability)
[![codecov](https://codecov.io/gh/cityssm/agco-break-open-ticket-types/graph/badge.svg?token=L66FE97G6B)](https://codecov.io/gh/cityssm/agco-break-open-ticket-types)
[![DeepSource](https://app.deepsource.com/gh/cityssm/agco-break-open-ticket-types.svg/?label=active+issues&show_trend=true&token=ljmY2sbIaajAR8yQRWt4R4yM)](https://app.deepsource.com/gh/cityssm/agco-break-open-ticket-types/)
[![Coverage Testing](https://github.com/cityssm/agco-break-open-ticket-types/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/agco-break-open-ticket-types/actions/workflows/coverage.yml)

Break Open Ticket Types approved by the Alcohol and Gaming Commission of Ontario (AGCO) in a Node-friendly format.

[Schedule of Approved Break Open Ticket Types and Associated Expense Maximums](https://www.agco.ca/en/lottery-and-gaming/schedule-approved-break-open-ticket-types-and-associated-expense-maximums)

## Installation

```sh
npm install @cityssm/agco-break-open-ticket-types
```

## Usage

```javascript
import {
  isTicketType,
  ticketTypes
} from '@cityssm/agco-break-open-ticket-types'

console.log(isTicketType('BN1'))
// => true

console.log(isTicketType('AG1000'))
// => false

console.log(ticketTypes.SP1)
/*
  {
    ticketType: "SP1",
    ticketPrice: 0.5,
    ticketCount: 2730,
    prizesPerDeal: 930
  }
 */
```

## Related Projects

[Lottery Licence Manager](https://github.com/cityssm/lottery-licence-manager)<br />
A web application for managing AGCO's municipal lottery licensing requirements in Ontario.
