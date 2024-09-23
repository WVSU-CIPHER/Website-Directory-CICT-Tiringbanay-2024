import React from "react";

const tableData = [
  { criteria: "Presentation", percentage: "30%" },
  { criteria: "Creativity", percentage: "40%" },
  { criteria: "Acting", percentage: "20%" },
  { criteria: "Audience Impact", percentage: "10%" },
];

export default function MEMEicryTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-transparent border border-black">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-black text-left">
              Criteria
            </th>
            <th className="py-2 px-4 border-b border-black text-left">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-black">
                {row.criteria}
              </td>
              <td className="py-2 px-4 border-b border-black">
                {row.percentage}
              </td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="py-2 px-4 border-b border-black">Total</td>
            <td className="py-2 px-4 border-b border-black">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
