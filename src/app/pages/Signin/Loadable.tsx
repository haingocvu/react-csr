import { lazyLoad } from 'utils/loadable';

export const SigninPage = lazyLoad(
  () => import('./index'),
  module => module.SigninPage,
);
