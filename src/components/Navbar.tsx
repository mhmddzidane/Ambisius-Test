import { useResto } from "@/context/store";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { reset } = useResto();
  const router = useRouter();

  const usedTabStyle = "bg-white px-5 py-2 text-black rounded-md";
  const notUsedTabStyle = "text-white px-5 py-2";

  const resets = () => {
    reset();
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold">Sistem Restoran Ambisius</h1>
      <p>Ambisius Coding Challege</p>
      <div className="flex flow-row">
        <div className="bg-slate-500 flex flow-row p-2 gap-2">
          <Link
            href="/"
            className={router.pathname == "/" ? usedTabStyle : notUsedTabStyle}
          >
            Menu
          </Link>
          <Link
            href="/order"
            className={
              router.pathname == "/order" ? usedTabStyle : notUsedTabStyle
            }
          >
            Order
          </Link>
          <Link
            href="/dapur"
            className={
              router.pathname == "/dapur" ? usedTabStyle : notUsedTabStyle
            }
          >
            Dapur
          </Link>
          <Link
            href="/kasir"
            className={
              router.pathname == "/kasir" ? usedTabStyle : notUsedTabStyle
            }
          >
            Kasir
          </Link>
        </div>
        <button className="ml-auto border border-black p-3" onClick={resets}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Navbar;
