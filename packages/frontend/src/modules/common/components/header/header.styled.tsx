import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

export const MenuUl = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 24px;
  background-color: ${COLORS.WHITE};
  width: 100%;
  margin: 0 auto;
  margin-top: ${SPACES.m};
  margin-bottom: ${SPACES.m};
  padding: 0 ${SPACES.s};
  list-style: none;
  /* border: 1px solid green; */

  @media screen and (min-width: 768px) {
    padding-left: ${SPACES.l};
    padding-right: ${SPACES.l};
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${SPACES.l};
    padding-right: ${SPACES.l};
  }
`;

export const StyleNavLink = styled(NavLink)`
  justify-self: start;
  width: ${SPACES.xxl};
  height: ${SPACES.l};
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

  &:visited {
    color: ${COLORS.WHITE};
  }

  &:hover {
    transform: scale(1.03);
  }

  &:last-child {
    justify-self: end;
  }
`;
