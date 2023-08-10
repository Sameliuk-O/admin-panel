import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITemplify } from '../interface/ITemplify';

export const allTemplatesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://templify-data-stage.s3.eu-west-1.amazonaws.com',
  }),
  endpoints: (build) => ({
    getAllTemplates: build.query<ITemplify, void>({
      query: () => ({
        url: '/feed/v1/feed.json',
      }),
    }),
  }),
  reducerPath: 'allTemplatesApi',
});

export const { useGetAllTemplatesQuery } = allTemplatesApi;
