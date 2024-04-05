import {  useNavigate } from "react-router-dom"
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
export const Signin = () => {
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Assuming you already have an account"} />
        <InputBox placeholder="Kuchtolikh@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <SubHeading label={"by Aditya Mane"} />
        <div className="pt-4">
          <Button onClick={()=>{
            navigate("/dashboard")
          }} label={"Sign in"} />
        </div>
        
      </div>
    </div>
  </div>
}