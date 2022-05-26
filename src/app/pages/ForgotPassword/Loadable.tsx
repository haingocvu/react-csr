import { lazyLoad } from 'utils/loadable';

export const ForgotPasswordPage = lazyLoad(
  () => import('./index'),
  module => module.ForgotPasswordPage,
);
