import { useState } from 'react';

export function useDialog(id?: string) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return {
    id,
    isOpen,
    setIsOpen,
    handleOpenDialog,
    handleCloseDialog,
  };
}
