import styled from 'styled-components';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 29, 29, 0.6);
  z-index: 20;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 380px;
  height: 340px;

  background-color: ${COLORS.WHITE};
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  padding: ${SPACES.m};
  background-color: #f8f8f7;
`;

export const CloseModalBtn = styled.div`
  position: absolute;
  top: ${SPACES.m};
  right: ${SPACES.m};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
