"use client";
export default function Profile({
  text,
  otherStyles,
}: {
  text: string;
  otherStyles?: string;
}) {
  return (
    <button
      title={text}
      className={`bg-white/90 text-black px-10 py-2 rounded-lg font-semibold ${otherStyles}`}
    >
      {text}
    </button>
  );
}

function AdditionButton({ value }: { value: number }) {
  return (
    <button
      className="bg-white/90 text-black px-12 py-4 rounded-lg font-semibold"
      onClick={(e) => {return value++;} }
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
        value--;
      }}
    >
      Remove a Box
    </button>
  );
}

export { AdditionButton, SubractionButton };
