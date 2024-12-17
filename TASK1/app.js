const { useState } = React;

function TaskTable() {
  const tasks = [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Anchor Text / URL Mapping",
    "Google Data Studio Report - Local Reporting Suite",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placements",
    "Review Management",
    "Index Links",
    "Video Recap",
  ];

  const [tableData, setTableData] = useState(
    tasks.map((task) => ({
      task,
      column1: "",
      column2: "",
      column3: "",
      column4: "",
      column5: "",
      column6: "",
    }))
  );

  const handleChange = (index, column, value) => {
    const updatedData = [...tableData];
    updatedData[index][column] = value;
    setTableData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Data ready to post:", tableData);
    alert("Data is ready for API submission. Check console for details.");

    setTableData(
      tasks.map((task) => ({
        task,
        column1: "",
        column2: "",
        column3: "",
        column4: "",
        column5: "",
        column6: "",
      }))
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Month 1 - Editable Task Table</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2 text-left">Tasks</th>
            <th className="border border-gray-300 p-2 text-left">Field 1</th>
            <th className="border border-gray-300 p-2 text-left">Field 2</th>
            <th className="border border-gray-300 p-2 text-left">Field 3</th>
            <th className="border border-gray-300 p-2 text-left">Field 4</th>
            <th className="border border-gray-300 p-2 text-left">Field 5</th>
            <th className="border border-gray-300 p-2 text-left">Field 6</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="border border-gray-300 p-2">{row.task}</td>
              {[1, 2, 3, 4, 5, 6].map((col) => (
                <td className="border border-gray-300 p-2" key={col}>
                  <input
                    type="text"
                    value={row[`column${col}`]}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                    onChange={(e) =>
                      handleChange(index, `column${col}`, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit Data
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TaskTable />);
