import styled from 'styled-components';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const Container = styled('div')`
  /* border: 1px solid blue; */
`;

export const Button = styled('button')`
  display: block;
  margin: 0 auto;
  margin-bottom: ${SPACES.m};
  width: 90px;
  height: 90px;
  background-color: #a3a2a2;
  color: ${COLORS.WHITE};
  font-size: ${FONTS.FONT_SIZES.l};
  font-weight: ${FONTS.WEIGHTS.normal};
  border-radius: 50%;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  cursor: pointer;
  border: none;
  transition: transform 500ms;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
    font-size: ${FONTS.FONT_SIZES.l};
  }
`;
