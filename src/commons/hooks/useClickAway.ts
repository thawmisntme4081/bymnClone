import { useEffect, useRef, useState } from 'react';

const useClickAway = (initialState: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const handleClickAway = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickAway(event);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [ref]);

  return { ref, isOpen, setIsOpen };
};

export default useClickAway
