// src/components/AddExpenseModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import { useSnackbar } from "notistack";
import "./AddExpenseModal.css";

const AddExpenseModal = ({
  isOpen,
  onRequestClose,
  setExpenses,
  setBalance,
  balance,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleAddExpense = () => {
    const expenseAmount = parseFloat(amount);
    if (!title || isNaN(expenseAmount) || !category || !date) {
      enqueueSnackbar("Please fill all fields correctly", { variant: "error" });
      return;
    }

    if (expenseAmount > balance) {
      enqueueSnackbar("Insufficient wallet balance", { variant: "error" });
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: expenseAmount,
      category,
      date,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setBalance((prev) => prev - expenseAmount);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <h2>Add Expense</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />
      <div className="modal-buttons">
        <button onClick={handleAddExpense}>Add Expense</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default AddExpenseModal;
