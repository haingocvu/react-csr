import { lazyLoad } from 'utils/loadable';

export const Contact = lazyLoad(
  () => import('./index'),
  module => module.Contact,
);
