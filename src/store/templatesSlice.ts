import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from '../interface/ITemplify';

const initialState: Category[] | undefined = [];

const templatesSlice = createSlice({
  initialState,
  name: 'template',
  reducers: {
    setCategory: (state, action: PayloadAction<Category[] | undefined>) => {
      return action.payload;
    },
  },
});

export const { setCategory } = templatesSlice.actions;
export default templatesSlice.reducer;
