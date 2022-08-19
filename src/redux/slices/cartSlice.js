import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrise: 0,
  items: [],
};

const cartSlise = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrise = state.items.reduce((sum, obj) => {
        return obj.price * obj.count - sum;
      });
    },

    clearItem(state) {
      state.items = [];
      state.totalPrise = 0;
    },
  },
});

export const { addItem, removeItem, clearItem, minusItem } = cartSlise.actions;

export default cartSlise.reducer;
