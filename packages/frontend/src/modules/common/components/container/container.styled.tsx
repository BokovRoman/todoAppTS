import styled from 'styled-components';
import { SPACES } from '../../../theme/spaces.const';

export const Div = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: 65px 1fr;
  justify-content: center;
  padding-left: ${SPACES.m};
  padding-right: ${SPACES.m};
  margin: 0 auto;
  height: 100vh;

  @media screen and (min-width: 768px) {
    grid-template-columns: 768px;
    grid-template-rows: 90px 1fr;
    padding-left: ${SPACES.xl};
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1280px;
    grid-template-rows: 90px 1fr;
    padding-left: ${SPACES.xxl};
    padding-right: ${SPACES.xxl};
  }
`;
