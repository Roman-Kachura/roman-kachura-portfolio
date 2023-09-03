import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/dist/query/react';
import {setStatus} from '../slices/appReducer';
import env from 'react-dotenv';

export const baseUrl = env.SERVER_URL;
export const cvBaseUrl = baseUrl + '/files/pdf/cv';
export const baseQuery = fetchBaseQuery({baseUrl});
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (arg, api, extraOptions) => {
  const {dispatch} = api;
  dispatch(setStatus({status:'loading'}));
  const result = await baseQuery(arg, api, extraOptions);
  if(result.error){
    dispatch(setStatus({status:'failed'}));
  } else{
    dispatch(setStatus({status:'succeeded'}));
  }
  return result;
};