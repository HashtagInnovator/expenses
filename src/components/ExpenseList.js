import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import EditExpenseModal from "./EditExpenseModal";

const ExpenseList = ({ expenses, setExpenses, setBalance }) => {
  const [editExpense, setEditExpense] = useState(null);

  const deleteExpense = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    const deletedExpense = expenses.find((expense) => expense.id === id);
    setBalance((prev) => prev + deletedExpense.amount);
    setExpenses(newExpenses);
  };

  return (
    <div className="expense-list">
      <h3>Recent Transactions</h3>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <span>{expense.title}</span>
          <span>₹{expense.amount}</span>
          <span>{expense.date}</span>
          <span>{expense.category}</span>
          <button onClick={() => setEditExpense(expense)}>
            <FiEdit />
          </button>
          <button onClick={() => deleteExpense(expense.id)}>
            <FiTrash />
          </button>
        </div>
      ))}
      {editExpense && (
        <EditExpenseModal
          expense={editExpense}
          setExpense={setEditExpense}
          setExpenses={setExpenses}
          setBalance={setBalance}
        />
      )}
    </div>
  );
};

export default ExpenseList;
