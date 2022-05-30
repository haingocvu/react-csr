import { lazyLoad } from 'utils/loadable';

export const BarLoading = lazyLoad(
  () => import('./index'),
  module => module.BarLoading,
);
