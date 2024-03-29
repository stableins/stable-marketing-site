import { useEffect, useState } from 'react';
import useScript from 'react-script-hook';

import { ArgyleCreateOptions, ArgyleInstance } from '../argyle';

const DEFAULT_ARGYLE_LINK_URL = 'https://plugin.argyle.io/argyle.web.v3.js';

export const useArgyleLink = (config: ArgyleCreateOptions) => {
  const [loading, error] = useScript({
    src: DEFAULT_ARGYLE_LINK_URL,
    checkForExisting: true,
  });
  const [argyle, setArgyle] = useState<ArgyleInstance | null>(null);
  const emptyCallback = () => {};

  useEffect(() => {
    if (loading || !window.Argyle || error) {
      if (error) {
        console.error(error);
      }
      return;
    }

    if (argyle) {
      argyle.close();
    }

    const instance = window.Argyle.create({
      ...config,
    });

    setArgyle(instance);

    return () => instance.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, config?.pluginKey]);

  return {
    error,
    ready: argyle !== null && !loading,
    open: argyle ? argyle.open : emptyCallback,
    close: argyle ? argyle.close : emptyCallback,
  };
};
