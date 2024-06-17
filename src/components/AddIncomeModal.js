import React, { useState } from "react";
import Modal from "react-modal";
import { useSnackbar } from "notistack";

const AddIncomeModal = ({ isOpen, onRequestClose, setBalance }) => {
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleAddIncome = () => {
    const income = parseFloat(amount);
    if (isNaN(income) || income <= 0) {
      enqueueSnackbar("Please enter a valid amount", { variant: "error" });
      return;
    }
    setBalance((prev) => prev + income);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Income</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={handleAddIncome}>Add Balance</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default AddIncomeModal;
