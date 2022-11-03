import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FONTS } from '../../../theme';
import { SPACES } from '../../../theme/spaces.const';
import { COLORS } from '../../../theme/colors.const';

/* Mobile List */
export const List = styled('ul')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 769px) {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const Item = styled('li')`
  @media screen and (min-width: 769px) {
    min-height: 40px;
    /* height: 300px; */
    padding: ${SPACES.xs};
    border: 2px solid #a3a2a2;
    border-radius: 5px;

    &:not(:last-child) {
      border-bottom: none;
    }
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    min-height: 40px;

    &:first-child {
      margin-top: ${SPACES.m};
    }
  }
`;

export const Title = styled('h2')`
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.BLACK};
  margin-bottom: ${SPACES.xxs};
  margin-top: ${SPACES.m};

  @media screen and (min-width: 769px) {
    margin-bottom: ${SPACES.xs};
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
    width: 200px;
  }
`;

export const Describtion = styled('p')`
  font-size: ${FONTS.FONT_SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  color: ${COLORS.BLACK};
  margin-bottom: ${SPACES.xxs};
  word-wrap: break-word;

  @media screen and (min-width: 769px) {
    margin-bottom: ${SPACES.xs};
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    padding-left: ${SPACES.xs};
    width: 500px;
    border-right: 2px solid #a3a2a2;
    border-left: 2px solid #a3a2a2;
  }
`;

export const BtnWrapper = styled('div')`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1280px) {
    margin: 0;
    width: 300px;
    margin-left: ${SPACES.m};
  }
`;

export const Button = styled('button')`
  width: 100px;
  height: 25px;
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

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 769px) {
    width: 55px;
  }

  @media screen and (min-width: 1280px) {
    width: 100px;
  }
`;

export const StyleLink = styled(Link)`
  width: 100px;
  height: 25px;
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

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 769px) {
    width: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 100px;
  }
`;

export const PrivateWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 50px;
  height: 25px;
  border: 1px solid #a3a2a2;
  border-radius: 25px;
  background-color: #34a56f;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const PublicWrapper = styled(PrivateWrapper)`
  justify-content: flex-start;
  background-color: #a3a2a2;
`;

export const PrivateToggle = styled('div')`
  width: 25px;
  height: 25px;
  background-color: ${COLORS.WHITE};
  border-radius: 50%;
`;

/* Tablet List */

export const TabletWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    /* background: rgb(66, 67, 92); */
    padding: ${SPACES.xl} 0;
    text-align: center;
    height: 100vh;
    .colavo-carousel-dots {
      display: inline-block;
      vertical-align: middle;
      padding: 0;
      margin: auto;
      text-align: center;
      & li {
        list-style: none;
        display: inline-block;
        margin: ${SPACES.m} ${SPACES.xxs};
        & button {
          border: none;
          background: rgb(170, 170, 170);
          color: transparent;
          cursor: pointer;
          display: block;
          height: 10px;
          width: 10px;
          border-radius: 5px;
          transition: all 0.5s;
        }
      }
      .slick-active button {
        width: 30px;
        transition: all 0.5s;
      }
    }
    .slick-center {
      -webkit-transform: scale(1.08);
      -moz-transform: scale(1.08);
      transform: scale(1) !important;
      opacity: 1 !important;
      transition: ease-in-out 0.5s;
      /* item */
    }
    .slick-slide {
      transform: scale(0.95);
      opacity: 0.7;
    }

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`;
