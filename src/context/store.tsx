import { MenuList, OrderList } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const RestoContext = createContext<any>(null);

export function useResto() {
  return useContext(RestoContext);
}

export function RestoProvider({ children }: any) {
  const [dataMenu, setDataMenu] = useState<MenuList>();
  const [dataOrder, setDataOrder] = useState<OrderList>([]);
  const defaultMenu = [
    { id: "123522", name: "Ayam Goreng" },
    { id: "543123", name: "Nasi Goreng" },
    { id: "765221", name: "Mie Ayam" },
  ];

  function setStorageMenu(value: MenuList) {
    setDataMenu(value);
    localStorage.setItem("menu", JSON.stringify(value));
  }

  function setStorageOrder(value: OrderList) {
    setDataOrder(value);
    localStorage.setItem("order", JSON.stringify(value));
  }

  function reset() {
    setDataMenu([]);
    setDataOrder([]);
    localStorage.removeItem("menu");
    localStorage.removeItem("order");
  }

  const value = {
    setStorageMenu,
    setStorageOrder,
    dataOrder,
    dataMenu,
    reset,
  };

  useEffect(() => {
    if (dataMenu === null || dataMenu?.length == 0) {
      setStorageMenu(defaultMenu);
    }
  }, [reset]);

  useEffect(() => {
    setDataMenu(() => {
      const storedMenu = localStorage.getItem("menu");
      return storedMenu ? JSON.parse(storedMenu) : null;
    });

    setDataOrder(() => {
      const storedOrder = localStorage.getItem("order");
      return storedOrder ? JSON.parse(storedOrder) : [];
    });
  }, []);

  return (
    <RestoContext.Provider value={value}>{children}</RestoContext.Provider>
  );
}
