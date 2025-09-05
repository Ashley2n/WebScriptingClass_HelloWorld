import Grid from "@/components/Grid";
import Image from "next/image";

export default function Home() {
  let quantity:number = 1;
  return (
    <div className="flex items-center h-[100vh]  justify-center text-center">
      <Grid quantity={quantity} color="#141414"/>
    </div>
  );
}
