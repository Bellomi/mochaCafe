"use client";
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import { styled } from "styled-components";

export interface FilterByProductTypeProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterByProductTypeProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : ""};
`;

export function FilterByProductType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        All Products
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Tees
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUGS}
        onClick={() => handleChangeType(FilterType.MUGS)}
      >
        Mugs
      </FilterItem>
    </FilterList>
  );
}
