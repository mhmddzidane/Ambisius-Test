import { useResto } from "@/context/store";
import { OrderTypes } from "@/types";
import { useState } from "react";

const kasir = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const { dataOrder, setStorageOrder } = useResto();

  const tableNumbers = Array.from(
    new Set(dataOrder.map((order: OrderTypes) => order.tableId))
  );

  const printInvoice = () => {
    setShowInvoice(true);
    setShowTable(false);
  };

  const emptyTable = () => {
    const updatedOrder = dataOrder.filter(
      (order: OrderTypes) => order.tableId !== selectedTable
    );
    setStorageOrder(updatedOrder);
    setShowInvoice(false);
    setShowTable(false);
  };

  return (
    <div className="bg-blue-300 mt-4 p-2">
      <p>Meja</p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <button
            className="bg-white p-4 mt-2"
            onClick={() => setShowTable(!showTable)}
          >
            Pilih Meja
          </button>
          {showTable && (
            <div className="bg-white mt-2">
              {tableNumbers.map((tableNumber: any) => (
                <p
                  onClick={() => setSelectedTable(tableNumber)}
                  className={
                    selectedTable == tableNumber
                      ? "bg-blue-200 cursor-pointer"
                      : "cursor-pointer"
                  }
                  key={tableNumber}
                >
                  Meja {tableNumber}
                </p>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-gray-200 p-4 mt-2 ms-9"
          onClick={printInvoice}
          disabled={selectedTable.length == 0}
        >
          Print Struk
        </button>
        {showInvoice && (
          <button className="bg-red-600 text-white p-4" onClick={emptyTable}>
            Kosongkan Meja
          </button>
        )}
      </div>
      {showInvoice && (
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start">Jumlah</th>
                <th className="text-start">Menu</th>
                <th className="text-start">Harga</th>
              </tr>
            </thead>
            <tbody>
              {dataOrder
                .filter((order: any) => order.tableId === selectedTable)
                .map((order: any) => (
                  <tr className="border-t-2 p-2" key={order.id}>
                    <td>{order.quantity}</td>
                    <td>{order.menu}</td>
                    <td>Gratis</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default kasir;
