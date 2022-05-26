import { lazyLoad } from 'utils/loadable';

export const ColorModeToggle = lazyLoad(
  () => import('./index'),
  module => module.ColorModeToggle,
);
