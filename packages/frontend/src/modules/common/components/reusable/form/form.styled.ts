import styled, { css } from 'styled-components';
import { Field } from 'formik';
import { APP_KEYS } from '../../../consts';
import FilteredPropsInputField from './FilteredPropsInputField';

export const Container = styled('div')`
  display: block;
  width: 100%;
`;

export const FormTitle = styled('h1')`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

export const InputWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Label = styled('label')`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 700;
`;

export const StyleField = styled(FilteredPropsInputField)`
  background-color: ${APP_KEYS.COLORS_KEYS.WHITE};
  border: 1px solid ${APP_KEYS.COLORS_KEYS.GRAY};
  color: ${APP_KEYS.COLORS_KEYS.GRAY};
  border-radius: 4px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  padding: 5px 10px;

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px, rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid ${APP_KEYS.COLORS_KEYS.ACCENT};
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid green;

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px, rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid red;
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px, rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

export const InlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Textarea = styled(StyleField)`
  /* resize: none; */
  height: 100px;
`;

export const InputCheckbox = styled(InputWrapper)`
  display: flex;
  flex-direction: row;
`;

export const FieldCheckbox = styled(Field)`
  margin-left: 20px;
`;

export const Button = styled('button')`
  border: none;
  cursor: pointer;
  background-color: #acacac;
  color: ${APP_KEYS.COLORS_KEYS.ACCENT};
  font-size: 15px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 1px 3px 5px rgba(82, 85, 95, 0.15);

  &:hover {
    background-color: ${APP_KEYS.COLORS_KEYS.ACCENT};
    color: #fff;
  }
`;

export const Submit = styled(Button)`
  /* width: 100%;
  margin-top: 1.5rem;

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  padding: 0.5rem 1rem; */

  &:active,
  &:focus,
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;

export const BtnWrap = styled('div')`
  display: flex;
  justify-content: center;
`;
