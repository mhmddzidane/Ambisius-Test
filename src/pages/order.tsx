import { useResto } from "@/context/store";
import { MenuTypes } from "@/types";
import { generateRandomId } from "@/utils/generateId";
import { useState } from "react";

const Order = () => {
  const [table, setTable] = useState<string>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showQuantity, setShowQuantity] = useState<boolean>(false);
  const [menuName, setMenuName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const { dataMenu, setStorageOrder, dataOrder } = useResto();

  const usedButton = "p-4 bg-black text-white";
  const notUsedButton = "p-4 bg-white hover:bg-blue-300";

  const sendOrder = () => {
    const newId = generateRandomId();
    const order = {
      id: newId,
      tableId: table,
      menu: menuName,
      quantity: quantity,
    };

    try {
      setStorageOrder([...dataOrder, order]);
      setShowMenu(false);
      setShowQuantity(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blue-300 mt-4 p-2">
      <div className="grid grid-cols-3 gap-3 ">
        <button
          className={table == "1" ? usedButton : notUsedButton}
          onClick={() => setTable("1")}
        >
          Meja 1
        </button>
        <button
          className={table == "2" ? usedButton : notUsedButton}
          onClick={() => setTable("2")}
        >
          Meja 2
        </button>
        <button
          className={table == "3" ? usedButton : notUsedButton}
          onClick={() => setTable("3")}
        >
          Meja 3
        </button>
      </div>
      <p>Menu</p>
      <div className="grid grid-cols-3 gap-3 ">
        <button
          className="bg-white col-span-2 rounded-md py-2 text-start ps-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          Pilih Menu
        </button>
        <button
          className="bg-white col-span-1 rounded-md py-2 text-start ps-5"
          onClick={() => setShowQuantity(!showQuantity)}
        >
          Kuantitas
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 ">
        {showMenu && (
          <div className="bg-white col-span-2 rounded-md mt-2 ps-3">
            {dataMenu.map((menu: MenuTypes) => (
              <p
                key={menu.id}
                className={
                  menu.name == menuName
                    ? "bg-red-300 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
                onClick={() => setMenuName(menu.name)}
              >
                {menu.name}
              </p>
            ))}
          </div>
        )}
        {showQuantity && (
          <>
            {!showMenu && <div className="col-span-2" />}

            <div className="bg-white col-span-1 rounded-md mt-2 ps-3">
              <p
                onClick={() => setQuantity(1)}
                className={
                  quantity == 1
                    ? "bg-red-300 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
              >
                1
              </p>
              <p
                onClick={() => setQuantity(2)}
                className={
                  quantity == 2
                    ? "bg-red-300 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
              >
                2
              </p>
              <p
                onClick={() => setQuantity(3)}
                className={
                  quantity == 3
                    ? "bg-red-300 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
              >
                3
              </p>
            </div>
          </>
        )}
      </div>
      <button
        className="flex ms-auto bg-gray-300 p-4 mt-2"
        onClick={sendOrder}
        disabled={quantity && table && menuName ? false : true}
      >
        Tambah
      </button>
    </div>
  );
};

export default Order;
