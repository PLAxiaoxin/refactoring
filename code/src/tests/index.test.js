import { describe, it, expect } from 'vitest';
import { invoices } from '../data/invoices.js';
import { plays } from '../data/plays.js';
import { textStatement, htmlStatement, usd } from '../js/index.js';

describe('happy path', () => {
  it('output text', () => {
    expect(textStatement(invoices, plays)).toMatchSnapshot();
  });

  it('output html', () => {
    expect(htmlStatement(invoices, plays)).toMatchSnapshot();
  });

  it('test util', () => {
    const text = usd(1000);
    expect(text).toBe('$10.00');
  });
});
