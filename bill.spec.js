const helpers = require('./bill');
const invoices = helpers.invoice;
const plays = helpers.plays;

describe('Make sure when refactoring bill.js, no errors introduced', () => {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('check text output', () => {
    it('should return `Statement for BigCo`', () => {
      const company = helpers.statement(invoice[0], plays).slice(0, 19);
      expect(company).toEqual('Statement for BigCo');
    });
  });
});
