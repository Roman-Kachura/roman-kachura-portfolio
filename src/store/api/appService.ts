import {createApi} from '@reduxjs/toolkit/query/react';
import {ImageDTO} from '../../types/ImageDTO';
import {SkillsDTO} from '../../types/SkillsDTO';
import {ProjectDTO} from '../../types/ProjectDTO';
import {AuthorDTO} from '../../types/AuthorDTO';
import {ContactDTO} from '../../types/ContactDTO';
import {SendMessageRequest} from '../../types/SendMessageRequest';
import {setIsShowModal} from '../slices/appReducer';
import {baseQueryWithReauth} from './baseApiParams';

export const appService = createApi({
  reducerPath: 'appApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getCV: build.query<any, void>({
      query: () => ({
        url: 'files/pdf/cv'
      }),
    }),
    getHeaderImage: build.query<ImageDTO, void>({
      query: () => ({
        url: '/files/image/header'
      })
    }),
    getAuthorPhoto: build.query<ImageDTO, void>({
      query: () => ({
        url: '/files/image/photo'
      })
    }),
    getSkills: build.query<SkillsDTO[], void>({
      query: () => ({
        url: '/skills'
      })
    }),
    getProjects: build.query<ProjectDTO[], void>({
      query: () => ({
        url: '/projects'
      })
    }),
    getAuthor: build.query<AuthorDTO, void>({
      query: () => ({
        url: '/author'
      })
    }),
    getContacts: build.query<ContactDTO[], void>({
      query: () => ({
        url: '/contacts'
      })
    }),
    sendMessage: build.mutation<void, SendMessageRequest>({
      query: (data) => ({
        url: '/email',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, {dispatch}) {
        dispatch(setIsShowModal({isShowModal: true}));
      },
    })
  })
});

export const {
  useGetHeaderImageQuery,
  useGetAuthorPhotoQuery,
  useGetSkillsQuery,
  useGetProjectsQuery,
  useGetAuthorQuery,
  useGetContactsQuery,
  useSendMessageMutation,
  useGetCVQuery
} = appService;