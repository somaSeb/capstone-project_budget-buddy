import PayPalCheckout from "../PayPalCheckout/PayPalCheckout";
import { useState } from "react";
import styled from "styled-components";
import { StyledHeading, Main, ActionButton } from "@/styles";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 2rem;
  background-color: var(--primary-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 4px solid transparent;
  border-image: linear-gradient(
      to right,
      var(--secondary-color),
      var(--icon-color)
    )
    1;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(
    to right,
    var(--secondary-color),
    var(--icon-color)
  );
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 1;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid var(--secondary-color);
`;

const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--lightgreen-color);
  margin-bottom: 2rem;
`;

const CheckoutButton = styled(ActionButton)`
  margin: 15px 0;
`;

export default function BudgetBuddy() {
  const [checkout, setCheckout] = useState(false);

  return (
    <Main>
      {checkout ? (
        <PayPalCheckout />
      ) : (
        <>
          <ProductContainer>
            <ProductTitle>BudgetBuddy free</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <CheckoutButton onClick={() => setCheckout(true)}>
              Free
            </CheckoutButton>
          </ProductContainer>

          <ProductContainer>
            <ProductTitle>BudgetBuddy+</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <ProductPrice>0.50 Sandbox Dollars</ProductPrice>
            <CheckoutButton onClick={() => setCheckout(true)}>
              Checkout
            </CheckoutButton>
          </ProductContainer>

          <ProductContainer>
            <ProductTitle>BudgetBuddy+ Pro</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <ProductPrice>1 Sandbox Dollar</ProductPrice>
            <CheckoutButton onClick={() => setCheckout(true)}>
              Checkout
            </CheckoutButton>
          </ProductContainer>
        </>
      )}
    </Main>
  );
}
