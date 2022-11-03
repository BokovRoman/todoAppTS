import React, { useEffect } from 'react';
// import CloseModal from '../../../../assets/image/close.svg';
import { TodoForm } from '../todoForm';
import * as Styled from './modal.styled';

interface IProps {
  onClick: () => void;
}

const Modal = ({ onClick }: IProps) => {
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e: any) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };
  return (
    <Styled.Backdrop onClick={handleBackdropClick}>
      <Styled.Modal>
        <TodoForm onClick={onClick} />
      </Styled.Modal>
    </Styled.Backdrop>
  );
};

export default Modal;
