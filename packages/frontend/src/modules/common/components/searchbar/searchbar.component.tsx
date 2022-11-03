/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import * as Styled from './searchbar.styled';

interface IProps {
  handleChangeFilter: (text: string) => void;
  handleFilterPrivate: (privateStatus: boolean) => void;
  handleFilterCompleted: () => void;
  handleAllFilter: () => void;
}

const Searchbar = ({
  handleChangeFilter,
  handleFilterPrivate,
  handleFilterCompleted,
  handleAllFilter
}: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filter, setFilter] = useState('');

  const onChangeFilter = (e: any) => {
    setFilter(e.currentTarget.value);
    handleChangeFilter(e.currentTarget.value);
  };

  const onFilterPrivate = (privateStatus: boolean) => {
    handleFilterPrivate(privateStatus);
  };

  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Label htmlFor="filter">Search Todo</Styled.Label>
        <Styled.Input
          id="filter"
          type="text"
          value={filter}
          name="Search Todo"
          onChange={onChangeFilter}
          placeholder="Search todo name..."
        />
      </Styled.InputWrapper>
      <Styled.BtnList>
        <Styled.Button type="button" onClick={handleAllFilter}>
          All
        </Styled.Button>
        <Styled.Button type="button" onClick={() => onFilterPrivate(false)}>
          Public
        </Styled.Button>
        <Styled.Button type="button" onClick={() => onFilterPrivate(true)}>
          Private
        </Styled.Button>
        <Styled.Button type="button" onClick={handleFilterCompleted}>
          Completed
        </Styled.Button>
      </Styled.BtnList>
    </Styled.Container>
  );
};

export default Searchbar;
