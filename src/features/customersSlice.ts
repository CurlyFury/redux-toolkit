import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customers {
  value: Customer[];
}

interface Customer {
  id: number;
  name: string;
  foods: string[];
}

interface AddFood {
  food: string;
  id: number;
}

const initialState: Customers = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFood>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id)
          customer.foods.push(action.payload.food);
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
