import Link from "next/link";

export default function Customer() {
  return (
    <div className="flex m-3 ">
      <Link href="/customer/1">
        <h1 className="m-1">Customer 1</h1>
      </Link>
      <Link href="/customer/2">
        <h1 className="m-1">Customer 2</h1>
      </Link>
      <Link href="/customer/3">
        <h1 className="m-1">Customer 3</h1>
      </Link>
      <Link href="/customer/4">
        <h1 className="m-1">Customer 4</h1>
      </Link>
    </div>
  );
}
