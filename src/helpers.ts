export interface InputFieldsTypes {
  item: string
  unitPrice: number
  qty: number
  subTotal: number
}

export function returnSubtotal (indexValue: number, inputFields: InputFieldsTypes[]) {
  const inputIndex = inputFields.findIndex((_, index) => index === indexValue)
  inputFields[inputIndex].subTotal = inputFields[inputIndex].unitPrice * inputFields[inputIndex].qty
  return inputFields[inputIndex].subTotal
}

export function returnTotal (inputFields: InputFieldsTypes[]) {
  return inputFields.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.subTotal
  }, 0)
}