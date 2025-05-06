
import Hotjar from '@hotjar/browser';

const siteId = 6394150;
const hotjarVersion = 6;

export const initHotjar = (): void => {
  if (typeof window !== 'undefined') {
    Hotjar.init(siteId, hotjarVersion);
  }
};

export default {
  initHotjar
};
