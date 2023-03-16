<script setup lang="ts">
import { returnSubtotal, returnTotal, type InputFieldsTypes } from '@/helpers'
import { reactive } from 'vue'

const inputFields = reactive<InputFieldsTypes[]>([
  {
    item: '',
    unitPrice: 0,
    qty: 0,
    subTotal: 0
  }
])
const addInputField = () => {
  inputFields.push({
    item: '',
    unitPrice: 0,
    qty: 0,
    subTotal: 0
  })
}
const removeInputField = (index: number) => {
  inputFields.splice(index, 1)
}
</script>

<template>
  <main>
    <div v-for="(field, index) in inputFields" :key="index" class="checkout">
      <div class="checkout-row-col">
        <label :for="`item-${index}`">Item</label>
        <input v-model="field.item" :id="`item-${index}`" type="text" />
      </div>
      <div class="checkout-row-col">
        <label :for="`unitPrice-${index}`">Unit price</label>
        <input v-model="field.unitPrice" :id="`unitPrice-${index}`" type="number" />
      </div>
      <div class="checkout-row-col">
        <label :for="`qty-${index}`">Qty</label>
        <input v-model="field.qty" :id="`qty-${index}`" type="number" />
      </div>
      <div class="checkout-row-col">
        <label :for="`qty-${index}`">Subtotal</label>
        <input
          disabled
          :value="returnSubtotal(index, inputFields)"
          :id="`subtotal-${index}`"
          type="text"
        />
      </div>
      <div @click="removeInputField(index)" class="checkout-row-remove">
        <span>-</span>
      </div>
    </div>
    <div class="checkout-bottom">
      <div @click="addInputField" class="checkout-row-add">
        <span>+ Add new item</span>
      </div>
      <div class="checkout-row-col">
        <label for="total">Total</label>
        <input :value="returnTotal(inputFields)" type="text" disabled />
      </div>
    </div>
    <button class="checkout-button" type="button">Submit</button>
  </main>
</template>

<style scoped>
.checkout {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.checkout-row-col label {
  font-size: 13px;
  font-weight: 500;
  color: white;
}

.checkout-row-col {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
}

.checkout-row-col input:disabled {
  background-color: #fff;
}
.checkout-row-col:nth-child(1) input {
  width: 250px;
}

.checkout-row-col:nth-child(2) input {
  width: 150px;
}
.checkout-row-col:nth-child(3) input {
  width: 100px;
}
.checkout-row-col:nth-child(4) input {
  width: 150px;
}
.checkout-row-col input {
  padding: 8px;
  border-radius: 5px;
}
.checkout-row-remove {
  padding: 4.5px 12px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.checkout-row-remove span,
.checkout-row-add span {
  color: #000;
  font-weight: 700;
}

.checkout-row-add {
  border-radius: 5px;
  background-color: transparent;
}

.checkout-row-add span {
  font-weight: 500;
  color: #fff;
  cursor: pointer;
}
.checkout-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
}

.checkout-bottom .checkout-row-col {
  margin-right: 0;
}
.checkout-bottom .checkout-row-col label {
  margin-right: 10px;
}
.checkout-button {
  width: 100%;
  border-radius: 5px;
  padding: 8px 15px;
  float: right;
  margin-top: 30px;
  background-color: #0d6efd;
  color: #fff;
  font-weight: 700;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  border-color: #0d6efd;
}
</style>
