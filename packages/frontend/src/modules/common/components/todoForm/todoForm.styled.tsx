import styled from 'styled-components';
import { Field } from 'formik';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const Container = styled('div')`
  display: block;
  width: 100%;
`;

export const FormTitle = styled('h1')`
  text-align: center;
  font-size: ${FONTS.FONT_SIZES.l};
  font-weight: ${FONTS.WEIGHTS.bold};
`;

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Label = styled('label')`
  margin-left: ${SPACES.xs};
  margin-top: ${SPACES.xxs};
  margin-bottom: ${SPACES.xxs};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.bold};
`;

export const InputCheckbox = styled(InputWrapper)`
  display: flex;
  flex-direction: row;
`;

export const FieldCheckbox = styled(Field)`
  margin-left: ${SPACES.m};
`;

export const Button = styled('button')`
  border: none;
  cursor: pointer;
  background-color: #acacac;
  color: ${COLORS.ACCENT};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.bold};
  padding: ${SPACES.xxs} ${SPACES.xs};
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    background-color: ${COLORS.ACCENT};
    color: ${COLORS.WHITE};
  }
`;

export const BtnWrap = styled('div')`
  display: flex;
  justify-content: center;
`;
