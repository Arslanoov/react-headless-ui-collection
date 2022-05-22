import { useState, useEffect } from 'react';

import { debounce } from '../../helpers/debounce';

export default function useBackTop(): [() => void, boolean] {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = debounce(() => {
      setIsVisible(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);
    }, 200);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [setIsVisible]);

  return [
    () =>
      window?.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    isVisible,
  ];
}
