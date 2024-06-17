import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSnackbar } from "notistack";

const EditExpenseModal = ({ expense, setExpense, setExpenses, setBalance }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTitle(expense.title);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
  }, [expense]);

  const handleEditExpense = () => {
    const newAmount = parseFloat(amount);
    if (!title || isNaN(newAmount) || !category || !date) {
      enqueueSnackbar("Please fill all fields correctly", { variant: "error" });
      return;
    }

    const updatedExpense = {
      ...expense,
      title,
      amount: newAmount,
      category,
      date,
    };

    setExpenses((prev) =>
      prev.map((exp) => (exp.id === expense.id ? updatedExpense : exp))
    );
    setExpense(null);
    onRequestClose();
  };

  const onRequestClose = () => setExpense(null);

  return (
    <Modal isOpen={Boolean(expense)} onRequestClose={onRequestClose}>
      <h2>Edit Expense</h2>
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
      <button onClick={handleEditExpense}>Edit Expense</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default EditExpenseModal;
