import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import AddIncomeModal from "./AddIncomeModal";

const Balance = ({ balance, setBalance }) => {
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);

  const openIncomeModal = () => setIncomeModalOpen(true);
  const closeIncomeModal = () => setIncomeModalOpen(false);

  return (
    <div>
      <div className="wallet-balance">
        <h2>
          Wallet Balance:
          <span style={{ color: "#9DFF5B" }}>₹{balance}</span>
        </h2>
        <button className="balance-button" onClick={openIncomeModal}>
          <FiPlusCircle /> Add Income
        </button>
      </div>
      <AddIncomeModal
        isOpen={isIncomeModalOpen}
        onRequestClose={closeIncomeModal}
        setBalance={setBalance}
      />
    </div>
  );
};

export default Balance;
