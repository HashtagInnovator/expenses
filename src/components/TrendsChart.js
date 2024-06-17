import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const TrendsChart = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const category = expense.category;
    const existing = acc.find((item) => item.name === category);
    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({ name: category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="value" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default TrendsChart;
