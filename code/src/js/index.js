import { invoices } from '../data/invoices.js';
import { plays } from '../data/plays.js';
import { createStatementData } from './createStatementData.js';
console.log(statement(invoices, plays));
function statement(invoice, plays) {
  return renderPlanText(createStatementData(invoice, plays));
}

function renderPlanText(data) {
  let result = `Statement for ${data.customer}\n`;

  for (let pref of data.performances) {
    result += `${pref.play.name}: ${usd(pref.amount)} (${
      pref.audience
    } seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAcount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;
}

function htmlStatement(invoices, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>`;
  result += '<Table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>';
  for (let pref of data.preformance) {
    result += `<tr><td>${pref.play.name}</td><td>${pref.audience}</td>`;
    result += `<td>${usd(pref.amount)}</td></tr>/n`;
  }
  result += '</table>/n';
  result += `<p>Amount owend is <em>${usd(data.totolAmount)}</em></p>/n`;
  result += `<p>You earned <em>${usd(data.totolVolumeCredits)}</em></p>/n`;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}
