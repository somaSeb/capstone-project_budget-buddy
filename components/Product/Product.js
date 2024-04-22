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
  position: relative; // Add this line to position the offer sign
`;

const OfferSign = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
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

const FeaturesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid var(--secondary-color);
  }

  th {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  td {
    font-size: 1.1rem;
    text-align: center;
  }

  .checkmark {
    font-size: 1.5rem;
    color: var(--lightgreen-color);
  }
`;

export default function BudgetBuddy() {
  const [checkout, setCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCheckout = (product) => {
    setSelectedProduct(product);
    setCheckout(true);
  };

  console.log(selectedProduct);
  console.log("PayPalCheckout component:", PayPalCheckout);
  return (
    <Main>
      {checkout ? (
        <PayPalCheckout selectedProduct={selectedProduct} />
      ) : (
        <>
          <ProductContainer>
            <ProductTitle>BudgetBuddy free</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <FeaturesTable>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>BudgetBuddy free</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Budgeting</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Expense Tracking</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
              </tbody>
            </FeaturesTable>
            <CheckoutButton>Free</CheckoutButton>
          </ProductContainer>

          <ProductContainer>
            <OfferSign>Best offer</OfferSign>
            <ProductTitle>BudgetBuddy+</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <FeaturesTable>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>BudgetBuddy+</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Budgeting</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Expense Tracking</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Savings Goal Tracking</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
              </tbody>
            </FeaturesTable>
            <ProductPrice>0.50 Sandbox Dollars</ProductPrice>
            <CheckoutButton
              onClick={() =>
                handleCheckout({ name: "BudgetBuddy+", price: "0.50" })
              }
            >
              Checkout
            </CheckoutButton>
          </ProductContainer>

          <ProductContainer>
            <ProductTitle>BudgetBuddy+ Pro</ProductTitle>
            <ProductDescription>
              Manage your finances with ease using our powerful budgeting tool.
            </ProductDescription>
            <FeaturesTable>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>BudgetBuddy+ Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic Budgeting</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Expense Tracking</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Savings Goal Tracking</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
                <tr>
                  <td>Advanced Analytics</td>
                  <td>
                    <span className="checkmark">&#10003;</span>
                  </td>
                </tr>
              </tbody>
            </FeaturesTable>
            <ProductPrice>1 Sandbox Dollar</ProductPrice>
            <CheckoutButton
              onClick={() =>
                handleCheckout({ name: "BudgetBuddy+ Pro", price: "1.00" })
              }
            >
              Checkout
            </CheckoutButton>
          </ProductContainer>
        </>
      )}
    </Main>
  );
}
