"use client";
import { useState } from "react";
import Box from "./Box";
import { AdditionButton } from "./SecondaryButton";
interface Boxes {
  quantity: number;
  color: string;
}
export default function Grid({
  quantity,
  color,
  otherStyle,
}: {
  quantity: number;
  color: string;
  otherStyle?: string;
}) {
  const [theQuantity, setQuantity] = useState(quantity);

  function AdditionButton({ value }: { value: number }) {
    return (
      <button
        className="bg-white/90 text-black px-12 py-4 rounded-lg font-semibold"
        onClick={(e) => {
          setQuantity(theQuantity + 1);
        }}
      >
        Add a Box
      </button>
    );
  }

  function SubractionButton({ value }: { value: number }) {
    return (
      <button
        className="bg-white/90 text-black px-12 py-4 rounded-lg font-semibold"
        onClick={(e) => {
          setQuantity(theQuantity - 1);
        }}
      >
        Remove a Box
      </button>
    );
  }

  console.log("In the Grid the quanity is " + theQuantity);
  return (
    <section className="flex items-center justify-center flex-col gap-8">
      <h1 className="font-bold text-3xl">Boxes</h1>
      <div
        className={`flex flex-wrap items-center justify-center max-w-[70%] gap-2  ${otherStyle}`}
      >
        {Array.from({ length: theQuantity }, (_, index) => (
          <Box key={index} index={index} color={color} />
        ))}
      </div>
      <div
      className="flex gap-4 p-2">
        <AdditionButton value={theQuantity} />
        <SubractionButton value={theQuantity} />
      </div>
    </section>
  );
}
