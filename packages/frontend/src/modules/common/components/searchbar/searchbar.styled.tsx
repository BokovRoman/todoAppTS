import styled from 'styled-components';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const Container = styled('div')`
  padding: 0 ${SPACES.s};
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
  }
`;

export const InputWrapper = styled('div')`
  /* border: 1px solid red; */

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled('label')`
  margin-left: ${SPACES.xs};
  margin-top: ${SPACES.xxs};
  margin-bottom: ${SPACES.xxs};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.bold};
`;

export const Input = styled('input')`
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.GRAY};
  border-radius: 4px;
  font-size: ${FONTS.FONT_SIZES.m};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  width: 160px;
  height: 30px;
  padding: ${SPACES.xxs} ${SPACES.xs};

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid ${COLORS.ACCENT};
    outline: none;
  }
`;

export const BtnList = styled('ul')`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    /* border: 1px solid red; */
  }
`;

export const Button = styled('button')`
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${COLORS.ACCENT};
  color: ${COLORS.WHITE};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  padding: ${SPACES.xxs} ${SPACES.xs};
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;
  border: none;
  margin-top: ${SPACES.m};

  &:hover {
    transform: scale(1.03);
  }

  &:not(:last-child) {
    border-right: 2px solid ${COLORS.WHITE};
  }
`;
