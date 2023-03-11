"use client";

export const metadata = {
  title: "Customer info",
};

export default function Customer({ params }) {
  console.log("params", params);
  return (
    <div>
      <h1>Customer {params.id}</h1>
    </div>
  );
}
