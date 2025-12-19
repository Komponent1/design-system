import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  root?: HTMLElement;
  children: React.ReactNode;
};
const Portal: React.FC<Props> = ({ children, root }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined' || !mounted) return null;

  return mounted ? createPortal(children, root || document.body) : null;
};
export default Portal;
