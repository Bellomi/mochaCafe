"use client";
import { styled } from "styled-components";
import { FilterByProductType } from "./FilterByProductType";
import { FilterByOrder } from "./FilterByOrder";

export interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByProductType />
      <FilterByOrder />
    </FilterContainer>
  );
}
