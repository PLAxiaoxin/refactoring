export function createStatementData(invoice, plays) {
  class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
      this.performance = aPerformance;
      this.play = aPlay;
    }

    get amount() {
      throw new Error('subclass responseibility');
    }

    get volumeCredits() {
      return Math.max(this.performance.audience - 30, 0);
    }
  }

  class TragedyCalculator extends PerformanceCalculator {
    get amount() {
      let result = 40000;
      if (this.performance.audience > 30) {
        result += 1000 * (this.performance.audience - 30);
      }
      return result;
    }
  }

  class ComdyCalcuator extends PerformanceCalculator {
    get amount() {
      let result = 30000;
      if (this.performance.audience > 20) {
        result += 10000 + 500 * (this.performance.audience - 20);
      }
      result += 300 * this.performance.audience;
      return result;
    }

    get volumeCredits() {
      return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
  }

  const result = {};
  result.customer = invoice.customer;
  // 通过数组的 map 方法，为invoice.performances 中的每一项，获取匹配的 play
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAcount = totalAcount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    const calculator = ceratePerformanceCalculator(
      aPerformance,
      playFor(aPerformance),
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalAcount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  // 以多态取代条件表达式
  function ceratePerformanceCalculator(aPerformance, aPlay) {
    switch (aPlay.type) {
      case 'tragedy':
        return new TragedyCalculator(aPerformance, aPlay);
      case 'comedy':
        return new ComdyCalcuator(aPerformance, aPlay);
      default:
        throw new Error(`unkown type: ${aPlay.type}`);
    }
  }
}
