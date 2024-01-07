import { Component } from "react";
import Sea from "../home/barsea";
import Pg from "./gal";

export default class Prodact extends Component{
    render(){
        return(
            <div className="  bg-no-repeat h-full  " >
                <div  style={{backgroundImage:'url(images/BG1.png)' }} className="bg-cover  bg-no-repeat h-full  pt-1 pb-5"  >
                    <div className=" text-center flex justify-center w-full -mb-20 mt-5 ">
                        <h1 className="text-2xl text-blue-950  font-semibold w-1/2 max-sm:w-5/6">Get the best offers<span className="text-3xl text-sky-500">  whenever you want</span> and <span className="text-3xl text-sky-500">wherever you are</span> , on any land and under any sky</h1>
                    </div>
                   <Sea/> 
                </div>
                <Pg/>
            </div>
        )
    }
}