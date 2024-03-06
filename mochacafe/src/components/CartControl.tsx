import { useState } from "react";
import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ShoppingCartIcon } from "./ShoppingCart";

const Container = styled.div`
  position: relative;
`;

const CartCount = styled.span`
  position: absolute;
  bottom: -3px;
  right: -10px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items", []);
  const itemCount = value.length === 0 ? 0 : value.length;

  return (
    <Container>
      <ShoppingCartIcon />
      <CartCount>{itemCount}</CartCount>
    </Container>
  );
}
