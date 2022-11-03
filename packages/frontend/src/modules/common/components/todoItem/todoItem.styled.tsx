import styled from 'styled-components';
import { Field } from 'formik';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const TodoTitle = styled('h2')`
  font-size: ${FONTS.FONT_SIZES.l};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.BLACK};
  margin-bottom: ${SPACES.xl};
  margin-top: ${SPACES.m};
`;

export const Title = styled('h3')`
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  color: ${COLORS.BLACK};
`;

export const Describtion = styled('p')`
  display: block;
  word-wrap: break-word;
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.BLACK};
  margin-top: ${SPACES.xs};
  margin-bottom: ${SPACES.xl};
`;

export const StateWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  margin-bottom: ${SPACES.xs};
`;

export const TrueWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #34a56f;
`;

export const Toggle = styled('div')`
  width: 25px;
  height: 25px;
  background-color: ${COLORS.WHITE};
  border-radius: 50%;
`;

export const FalseWrapper = styled('div')`
  display: flex;
  justify-content: flex-start;
  width: 50px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #a3a2a2;
`;

export const BtnEdit = styled('button')`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #a3a2a2;
  color: ${COLORS.WHITE};
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  padding: ${SPACES.xxs} ${SPACES.xs};
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);
  text-decoration: none;
  transition: transform 500ms;
  border: none;
  margin-bottom: ${SPACES.xxxl};

  &:hover {
    transform: scale(1.03);
  }
`;

export const BtnBack = styled(BtnEdit)`
  width: 100px;
  background-color: ${COLORS.ACCENT};
`;

export const EditWrapper = styled('div')`
  position: relative;
`;

export const FormContainer = styled('div')`
  position: absolute;
  top: 30px;
  left: 0;

  background-color: ${COLORS.WHITE};
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  padding: ${SPACES.m};
`;

export const Textarea = styled(Field)`
  height: 100px;
  padding: 0;
`;
