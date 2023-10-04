import { useResto } from "@/context/store";
import { OrderTypes } from "@/types";

const dapur = () => {
  const { dataOrder } = useResto();
  const table = ["Meja 1", "Meja 2", "Meja 3"];

  return (
    <div className="bg-blue-300 mt-4 p-2">
      <div className="grid grid-cols-3 gap-3 ">
        <>
          {table.map((name, index) => (
            <div key={index}>
              <p>{name}</p>
              {dataOrder
                .filter((order: OrderTypes) => order.tableId === `${index + 1}`)
                .map((order: OrderTypes) => (
                  <p key={order.id}>
                    {order.quantity + "x" + " " + order.menu}
                  </p>
                ))}
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default dapur;
