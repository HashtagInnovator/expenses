// src/App.js
import React, { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import AddExpenseModal from "./components/AddExpenseModal";
import AddIncomeModal from "./components/AddIncomeModal";
import SummaryChart from "./components/SummaryChart";
import TrendsChart from "./components/TrendsChart";
import Expanse from "./components/Expanse";
import "./App.css";

const App = () => {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    const savedExpenses = localStorage.getItem("expenses");
    if (savedBalance) setBalance(parseFloat(savedBalance));
    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
  }, []);

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const openExpenseModal = () => setExpenseModalOpen(true);
  const closeExpenseModal = () => setExpenseModalOpen(false);

  const openIncomeModal = () => setIncomeModalOpen(true);
  const closeIncomeModal = () => setIncomeModalOpen(false);

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app">
        <Header />
        <div className="balance-container">
          <Balance balance={balance} setBalance={setBalance} />
          <Expanse
            expenses={expenses}
            setExpenses={setExpenses}
            balance={balance}
            setBalance={setBalance}
          />

          {/* <button className="add-income-button" onClick={openIncomeModal}>
            + Add Income
          </button>
          <button className="add-expense-button" onClick={openExpenseModal}>
            + Add Expense
          </button> */}
        </div>
        <AddExpenseModal
          isOpen={isExpenseModalOpen}
          onRequestClose={closeExpenseModal}
          setExpenses={setExpenses}
          setBalance={setBalance}
          balance={balance}
        />
        <AddIncomeModal
          isOpen={isIncomeModalOpen}
          onRequestClose={closeIncomeModal}
          setBalance={setBalance}
        />
        <ExpenseList
          expenses={expenses}
          setExpenses={setExpenses}
          setBalance={setBalance}
        />
        <div className="charts-container">
          <SummaryChart expenses={expenses} />
          <TrendsChart expenses={expenses} />
        </div>
      </div>
    </SnackbarProvider>
  );
};

export default App;
