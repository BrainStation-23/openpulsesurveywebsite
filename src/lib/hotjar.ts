
import { init } from '@hotjar/browser';

const siteId = 6394150;
const hotjarVersion = 6;

export const initHotjar = (): void => {
  if (typeof window !== 'undefined') {
    init(siteId, hotjarVersion);
  }
};

export default {
  initHotjar
};
