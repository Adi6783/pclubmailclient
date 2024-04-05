import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";

export const Composemail =()=>{
   
    return <div>
        <div className="bg-gray-200 px-4 py-2">
        <h1 className="text-lg font-semibold">Compose Email</h1>
      </div>
         <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <InputBox label={"To"} />
         </div>
         <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <InputBox label={"Subject"} />
         </div>
         <div className="px-10 py-10">
         <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
            <InputBox label={"Message"} />
         </div>
         </div>
         <div className="flex justify-center">
         <Button label={"Send"} />
         </div>
    </div>
}