import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const SummaryChart = ({ expenses }) => {
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

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SummaryChart;
