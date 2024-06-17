// src/components/Expanse.js
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddExpenseModal from "./AddExpenseModal";
import "./Expanse.css";

const Expanse = ({ expenses, setExpenses, balance, setBalance }) => {
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);

  const openExpenseModal = () => setExpenseModalOpen(true);
  const closeExpenseModal = () => setExpenseModalOpen(false);

  return (
    <div>
      <div className="wallet-balance">
        <h2>
          Expanse Balance:
          <span style={{ color: "#9DFF5B" }}>₹{expenses}</span>
        </h2>
        <button className="add-expense-button" onClick={openExpenseModal}>
          <FiPlusCircle /> Add Expense
        </button>
      </div>
      <AddExpenseModal
        isOpen={isExpenseModalOpen}
        onRequestClose={closeExpenseModal}
        setExpenses={setExpenses}
        setBalance={setBalance}
        balance={balance}
      />
    </div>
  );
};

export default Expanse;
