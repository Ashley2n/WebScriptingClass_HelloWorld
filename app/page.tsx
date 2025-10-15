import Grid from "@/components/Grid";
import Image from "next/image";
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";


Amplify.configure(outputs);


export default function Home() {
  let quantity:number = 1;
  return (
    
    <div className="flex items-center h-[100vh]  justify-center text-center">
      <Grid quantity={quantity} color="#141414"/>
    </div>
  );
}
