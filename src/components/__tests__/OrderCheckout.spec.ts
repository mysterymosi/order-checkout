import { returnSubtotal, returnTotal } from '@/helpers'
import { describe, it, expect } from 'vitest'

const index = 0;
const inputFields = [
  {
    item: 'Beans',
    unitPrice: 20,
    qty: 10,
    subTotal: 200
  },
  {
    item: 'Fish',
    unitPrice: 10,
    qty: 10,
    subTotal: 100
  },
]

describe("calculates subtotal", () => {
  it("calculates and returns subtotal", () => {
    expect(returnSubtotal(index, inputFields)).toBe(200)
  });
  it("calculates and returns total", () => {
    expect(returnTotal(inputFields)).toBe(300)
  })
})