export interface MenuList extends Array<MenuTypes> {}
export interface OrderList extends Array<OrderTypes> {}

export interface MenuTypes {
  id: string;
  name: string;
}

export interface OrderTypes {
  id: string;
  tableId: string;
  menu: string;
  quantity: number;
}
