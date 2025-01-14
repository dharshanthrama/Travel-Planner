import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";

const BudgetPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [estimated, setEstimated] = useState("");
  const [actual, setActual] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const categories = [
    "Flights",
    "Accommodations",
    "Meals",
    "Activities",
    "Transportation",
    "Miscellaneous",
  ];

  const addExpense = () => {
    if (category && estimated && actual && description && date && paymentMethod) {
      setExpenses([
        ...expenses,
        {
          category,
          estimated: parseFloat(estimated),
          actual: parseFloat(actual),
          description,
          date,
          paymentMethod,
        },
      ]);
      setCategory("");
      setEstimated("");
      setActual("");
      setDescription("");
      setDate("");
      setPaymentMethod("");
    }
  };

  const calculateTotal = (type) => {
    return expenses.reduce((total, item) => total + item[type], 0).toFixed(2);
  };

  const calculateRemaining = () => {
    return (calculateTotal("estimated") - calculateTotal("actual")).toFixed(2);
  };

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Estimated",
        data: categories.map(
          (cat) =>
            expenses.filter((exp) => exp.category === cat).reduce((sum, exp) => sum + exp.estimated, 0)
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Actual",
        data: categories.map(
          (cat) =>
            expenses.filter((exp) => exp.category === cat).reduce((sum, exp) => sum + exp.actual, 0)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">Travel Budget Planner</h1>
      <p className="text-center text-gray-600 mb-8">
        Plan and manage your travel expenses effectively
      </p>
      <hr className="my-6" />

      {/* Input Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-medium">Category</label>
            <select
              className="w-full p-2 border rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <input
            className="w-full p-2 border rounded-lg"
            type="number"
            placeholder="Estimated Cost"
            value={estimated}
            onChange={(e) => setEstimated(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded-lg"
            type="number"
            placeholder="Actual Cost"
            value={actual}
            onChange={(e) => setActual(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded-lg"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w-full p-2 border rounded-lg"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            className="w-full p-2 border rounded-lg"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="" disabled>
              Payment Method
            </option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Digital Wallet">Digital Wallet</option>
          </select>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          onClick={addExpense}
        >
          Add Expense
        </button>
      </div>

      {/* Table and Chart */}
      {expenses.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-8 mb-4">Expense Summary</h2>
          <table className="table-auto w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-right">Estimated Cost</th>
                <th className="px-4 py-2 text-right">Actual Cost</th>
                <th className="px-4 py-2 text-left">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{expense.category}</td>
                  <td className="px-4 py-2">{expense.description}</td>
                  <td className="px-4 py-2">{expense.date}</td>
                  <td className="px-4 py-2 text-right">₹{expense.estimated.toFixed(2)}</td>
                  <td className="px-4 py-2 text-right">₹{expense.actual.toFixed(2)}</td>
                  <td className="px-4 py-2">{expense.paymentMethod}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div>
              <Pie
                data={{
                  labels: ["Estimated", "Actual"],
                  datasets: [
                    {
                      data: [calculateTotal("estimated"), calculateTotal("actual")],
                      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
                    },
                  ],
                }}
              />
            </div>
            <div>
              <Bar data={chartData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetPage;
