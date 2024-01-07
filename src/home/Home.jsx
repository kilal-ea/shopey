import { Component } from "react";
import Bar from "./bar.jsx";
import Ev from "./even.jsx";
import Sea from "./barsea.jsx";
import Galerie from "./galerie.jsx";
import About from '../about.jsx'
import Contact from '../contact.jsx'
export default class Home extends Component{
    render(){
        return(
            <div className="w-full ">
                <div  className="mt-60  fixed    top-0 z-10  " >
               <Bar className="  mt-32 "/> 
            </div>
            <div style={{backgroundImage:'url(images/BG1.png)' }} className="w-full pt-2   relative pb-5 max-xl:pb-36 max-2xl:pb-48 flex mt-2 h-full bg-cover  bg-no-repeat">
            <div className="w-full">
            <Ev/>
            <Sea />
            </div>
            <div style={{marginLeft:"75%"}} className="absolute  ">
            </div>
            </div>
            <div className=" ">
                <Galerie/>
            </div>
            <div  className="p-16" >
                <About/>
            </div>
            <div id="a">
                <Contact/>
            </div>
               
            </div>
            )
    }
}