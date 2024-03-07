import { styled } from "styled-components";
import { ArrowDown } from "./ArrowDown";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priorityTypes";

export interface FilterByOrderProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 16px;
    }
  }
`;

const OptionBox = styled.ul`
  position: absolute;
  width: 240px;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;

  list-style: none;

  top: 100%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByOrder(props: FilterByOrderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdateOrder = (value: PriorityTypes) => setPriority(value);

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowDown />
      </button>
      {isOpen && (
        <OptionBox>
          <li onClick={() => handleUpdateOrder(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdateOrder(PriorityTypes.BIGGEST_PRICE)}>
            Preço: maior - menor
          </li>
          <li onClick={() => handleUpdateOrder(PriorityTypes.MINOR_PRICE)}>
            Preço: menor - maior
          </li>
          <li onClick={() => handleUpdateOrder(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </OptionBox>
      )}
    </FilterContainer>
  );
}
