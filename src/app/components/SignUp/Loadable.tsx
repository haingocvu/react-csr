import { lazyLoad } from 'utils/loadable';

export const SignupForm = lazyLoad(
  () => import('./index'),
  module => module.SignupForm,
);
