import { TransactionForm, FormItems, StyledHint } from "@/styles";
import styled from "styled-components";
import { useState } from "react";

const SavingsTransactionButton = styled.button`
  position: absolute;
  right: 50px;
  top: 50px;
  background-color: yellow;
  color: black;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function SavingsForm({ onAddTransaction }) {
  const [isSavingModalOpen, setisSavingModalOpen] = useState(false);

  {
    function handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split("T")[0];

      onAddTransaction({
        ...data,
        amount: parseInt(data.savings_amount),
        savings_amount: parseInt(data.savings_amount),
        date: formattedDate,
        category: "Savings transfer",
        type: "Expense",
      });
      setisSavingModalOpen(false);
    }

    function handleCancel() {
      if (
        window.confirm("Are you sure you want to cancel editing this goal?")
      ) {
        setisSavingModalOpen(false);
      }
    }

    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <SavingsTransactionButton onClick={() => setisSavingModalOpen(true)}>
          Add Saving
        </SavingsTransactionButton>
        {isSavingModalOpen && (
          <ModalBackround>
            <ModalContainer>
              <form onSubmit={handleSubmit}>
                <li>
                  <legend> Add a new Saving</legend>

                  <label htmlFor="s_amount__id">*Amount in EUR: </label>
                  <input
                    id="s_amount__id"
                    type="number"
                    name="savings_amount"
                    min="1"
                    max="10000000"
                    step="1"
                    pattern="[0-9]+"
                    required
                  />

                  <StyledHint>All fields with * are required!</StyledHint>
                  <button type="submit">Add Saving</button>
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                </li>
              </form>
            </ModalContainer>
          </ModalBackround>
        )}
      </>
    );
  }
}
