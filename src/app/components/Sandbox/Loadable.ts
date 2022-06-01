import { lazyLoad } from 'utils/loadable';

export const Sandbox = lazyLoad(
  () => import('./index'),
  module => module.Sandbox,
);
