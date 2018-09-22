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

    it('should return `Hamlet`', () => {
      const play1 = helpers.statement(invoice[0], plays).slice(23, 29);
      expect(play1).toEqual('Hamlet');
    });

    it('should return `As You Like It`', () => {
      const play2 = helpers.statement(invoice[0], plays).slice(53, 67);
      expect(play2).toEqual('As You Like It');
    });

    it('should return `Othello`', () => {
      const play3 = helpers.statement(invoice[0], plays).slice(91, 98);
      expect(play3).toEqual('Othello');
    });
  });

  describe('check calculations output', () => {
    it('should return `$650.00`', () => {
      const hamletBill = helpers.statement(invoice[0], plays).slice(31, 38);
      expect(hamletBill).toEqual('$650.00');
    });

    it('should return `55 seats`', () => {
      const hamletSeats = helpers.statement(invoice[0], plays).slice(40, 48);
      expect(hamletSeats).toEqual('55 seats');
    });

    it('should return `$580.00`', () => {
      const ayliBill = helpers.statement(invoice[0], plays).slice(69, 76);
      expect(ayliBill).toEqual('$580.00');
    });

    it('should return `35 seats`', () => {
      const ayliSeats = helpers.statement(invoice[0], plays).slice(78, 86);
      expect(ayliSeats).toEqual('35 seats');
    });

    it('should return `$500.00`', () => {
      const othelloBill = helpers.statement(invoice[0], plays).slice(100, 107);
      expect(othelloBill).toEqual('$500.00');
    });

    it('should return `40 seats`', () => {
      const othelloSeats = helpers.statement(invoice[0], plays).slice(109, 117);
      expect(othelloSeats).toEqual('40 seats');
    });

    it('should return `Amount owed is $1,730.00`', () => {
      const ayliBill = helpers.statement(invoice[0], plays).slice(119, 143);
      expect(ayliBill).toEqual('Amount owed is $1,730.00');
    });

    it('should return `You earned 47 credits`', () => {
      const ayliSeats = helpers.statement(invoice[0], plays).slice(144, 165);
      expect(ayliSeats).toEqual('You earned 47 credits');
    });
  });
});
