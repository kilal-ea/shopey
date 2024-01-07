import { Component } from "react";
import Sea from "./home/barsea";
import Prodacts from "./Procucts";

export default class Ps extends Component{
    render(){
        return(
            <div className="  bg-no-repeat h-full  " >
                <div  style={{backgroundImage:'url(images/BG1.png)' }} className="bg-cover  bg-no-repeat h-full  pt-1 pb-5"  >
                    <div className=" text-center flex justify-center w-full -mb-20 mt-5 ">
                        <h1 className="text-2xl text-blue-950  font-semibold w-1/2 max-sm:w-5/6">Find everything you want</h1>
                    </div>
                   <Sea/> 
                </div>
                <Prodacts/>
            </div>
        )
    }
}