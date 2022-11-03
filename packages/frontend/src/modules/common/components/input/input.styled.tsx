import styled from 'styled-components';
import { Field } from 'formik';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Label = styled('label')`
  margin-left: ${SPACES.xs};
  margin-top: ${SPACES.xxs};
  margin-bottom: ${SPACES.xxs};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: 700;
`;

export const StyleField = styled(Field)`
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY};
  color: ${COLORS.GRAY};
  border-radius: 4px;
  font-size: ${FONTS.FONT_SIZES.m};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  width: 100%;
  padding: ${SPACES.xxs} ${SPACES.xs};

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid ${COLORS.ACCENT};
    outline: none;
  }
`;

export const Textarea = styled(StyleField)`
  /* resize: none; */
  height: ${SPACES.xxl};
`;
