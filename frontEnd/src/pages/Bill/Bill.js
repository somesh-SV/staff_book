import React from "react";
function Bill({ TABLE_ROWS, grandTotal }) {
  return (
    <div className="bg-gray-50 p-4 h-screen">
      <div className="flex flex-col gap-3 border-2 border-gray-800 p-3 pt-0">
        <p className="text-lg font-bold">SR Fancy Mart</p>
        <address className="w-[200px]">
          14B, Northern Street Greater South Avenue New York New York 10001
          U.S.A
        </address>
      </div>
      <div className="grid grid-cols-3 border-t-0 border-2 border-gray-800">
        <span className="flex flex-col text-left text-sm p-3 pt-0">
          <p>Invoice </p>
          <p>Invoice Date</p>
          <p>Terms </p>
        </span>
        <span className="flex flex-col font-semibold text-left text-sm border-r-2 border-gray-800">
          <p>: INV-0200303</p>
          <p>: 11.03.2024</p>
          <p>: Due on Receipt</p>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm font-semibold border-2 border-gray-800 border-t-0 bg-gray-200">
        <div className="border-r-2 border-gray-800 p-3 pt-0">
          <p>Bill To</p>
        </div>
        <div>
          <p>Ship To</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm border-2 border-gray-800 border-t-0">
        <div className="border-r-2 border-gray-800  p-3 pt-0">
          <p className="text-lg font-semibold">Mr Ram</p>
          <address className="w-[200px]">
            14B, An den Irlen 8, Patriceberg, HH 91783 Avenue New York New York
            10001 U.S.A
          </address>
        </div>
        <div>
          <p className="text-lg font-semibold">SR Fancy Mart</p>
          <address className="w-[200px]">
            14B, Northern Street Greater South Avenue New York New York 10001
            U.S.A
          </address>
        </div>
      </div>
      <table className="w-full text-center mb-4 border-2 border-t-0 border-gray-800">
        <thead>
          <tr className="border border-t-0 border-gray-800 text-white bg-indigo-300 text-sm">
            <th className="border border-t-0 border-gray-800  p-3 pt-0">
              S.NO
            </th>
            <th className="border border-t-0 border-gray-800 w-[1261px] p-3 pt-0">
              Item
            </th>
            <th className="border border-t-0 border-gray-800 p-3 pt-0 ">
              Quantity
            </th>
            <th className="border border-t-0 border-gray-800 p-3 pt-0 ">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((items, index) => {
            return (
              <tr key={index} className="text-sm">
                <td className="border border-gray-800 p-3 pt-0">{index + 1}</td>
                <td className="border border-gray-800 text-left p-3 pt-0">
                  {items.ProductName}
                </td>
                <td className="border border-gray-800 p-3 pt-0">
                  {items.Quantity}
                </td>
                <td className="border border-gray-800 p-3 pt-0 text-right">
                  {items.price}
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td className="border border-gray-800 p-3 pt-0">1</td>
            <td className="border border-gray-800 text-left p-3 pt-0">
              Item 1
            </td>
            <td className="border border-gray-800 p-3 pt-0">2</td>
            <td className="border border-gray-800 p-3 pt-0 text-right">$10</td>
          </tr>
          <tr>
            <td className="border border-gray-800 p-3 pt-0">2</td>
            <td className="border border-gray-800 text-left p-3 pt-0">
              Item 2
            </td>
            <td className="border border-gray-800 p-3 pt-0">1</td>
            <td className="border border-gray-800 p-3 pt-0 text-right">$20</td>
          </tr> */}
          <tr className="border-b-2 border-gray-800 ">
            <td className="border border-r-0 border-gray-800"></td>
            <td className="border border-l-0 border-gray-800"></td>
            <td className="p-3 pt-0 border border-gray-800 font-medium">
              Sub Total
            </td>
            <td className="text-right border border-gray-800 pb-4 px-2">
              2,027.000000
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end text-xl">
        <p className="font-bold">Grand Total: ${grandTotal}</p>
      </div>
    </div>
  );
}

export default Bill;
