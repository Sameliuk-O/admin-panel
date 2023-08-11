import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITemplate } from '../interface/ITemplate';

const initialState: ITemplate | undefined = {
  id: 0,
  title: '',
  videoURL: '',
};

const searchSlice = createSlice({
  initialState,
  name: 'search',
  reducers: {
    setSearchTemplate: (state, action: PayloadAction<ITemplate>) => {
      state.id = action.payload.id;
      state.videoURL = action.payload.videoURL;
      state.title = action.payload.title;
    },
  },
});

export const { setSearchTemplate } = searchSlice.actions;
export default searchSlice.reducer;
