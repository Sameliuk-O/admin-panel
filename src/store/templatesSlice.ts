import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category, ITemplify, Preview } from '../interface/ITemplify';

const initialState: ITemplify = {
  categories: [],
  onboardingPreviewIDs: [],
  pages: [],
  previews: {},
};

const templatesSlice = createSlice({
  initialState,
  name: 'template',
  reducers: {
    setCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setPreviews: (state, action: PayloadAction<{ [key: string]: Preview }>) => {
      state.previews = action.payload;
    },
  },
});

export const { setCategory, setPreviews } = templatesSlice.actions;
export default templatesSlice.reducer;
