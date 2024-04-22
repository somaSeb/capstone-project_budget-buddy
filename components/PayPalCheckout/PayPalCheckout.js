import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { HeadingWrapper, StyledHeading, Main, ProductInfo } from "@/styles";
import styles from "@/styles";
import styled from "styled-components";
import { useRouter } from "next/router";

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
`;

const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
console.log(PAYPAL_CLIENT_ID);

const initialOptions = {
  "client-id": PAYPAL_CLIENT_ID,
  currency: "EUR",
  intent: "capture",
  components: "buttons",
  /* "disable-funding":
    "credit,card,sepa,bancontact,eps,giropay,ideal,mybank,p24,sofort,venmo", */
};

export default function PayPalCheckout({ selectedProduct }) {
  const router = useRouter();

  console.log(selectedProduct);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: selectedProduct?.price.toString(),
          },
        },
      ],
      application_context: {
        return_url: `${window.location.origin}/paymentConfirmation?status=success`,
        cancel_url: `${window.location.origin}/paymentConfirmation?status=failed`,
      },
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      //success
      console.log("Payment successful:", details);
      //redirect
      router.push("/paymentConfirmation?status=success");
    });
  };

  const onError = (error) => {
    // error
    console.error("Payment error:", error);
    // redirect
    router.push("/paymentConfirmation?status=failed");
  };

  return (
    <>
      <HeadingWrapper>
        <StyledHeading>Checkout</StyledHeading>
      </HeadingWrapper>
      <Main style={{ marginTop: "5rem" }}>
        {selectedProduct && (
          <ProductInfoContainer>
            <ProductName>{selectedProduct.name}</ProductName>
            <ProductPrice>
              Price: {selectedProduct.price} Sandbox Dollars
            </ProductPrice>
          </ProductInfoContainer>
        )}
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
      </Main>
    </>
  );
}
