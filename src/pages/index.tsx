import { useResto } from "@/context/store";
import { MenuTypes } from "@/types";
import { generateRandomId } from "@/utils/generateId";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const { setStorageMenu, dataMenu } = useResto();

  const addMenu = () => {
    const newId = generateRandomId();
    const newMenu = {
      id: newId,
      name: name,
    };
    try {
      setStorageMenu([...dataMenu, newMenu]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenu = (id: string) => {
    const updatedMenu = dataMenu.filter((item: MenuTypes) => item.id !== id);
    setStorageMenu(updatedMenu);
  };

  return (
    <div className="bg-blue-300 mt-4 p-2">
      <p>Menu Makanan</p>
      <div className="flex flow-row">
        <input
          type="text"
          placeholder="Tambahkan disini..."
          className="p-2 w-full mr-2"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-gray-500 p-2 ml-auto"
          onClick={addMenu}
          disabled={name.length > 0 ? false : true}
        >
          Tambah
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start">ID</th>
            <th className="text-start">Menu</th>
            <th className="text-start">Hapus?</th>
          </tr>
        </thead>
        <tbody>
          {dataMenu?.map((menu: MenuTypes) => (
            <tr className="border-t-2 p-2" key={menu.id}>
              <td>{menu.id}</td>
              <td>{menu.name}</td>
              <td
                onClick={() => deleteMenu(menu.id)}
                className="cursor-pointer"
              >
                Hapus
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center mt-1">Daftar Menu Restoran Anda</p>
    </div>
  );
}
