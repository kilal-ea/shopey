import { Component } from "react";
import { Link } from "react-router-dom";

export default class Bar extends Component{
    render(){
        return(
            <div  className="">
                <div style={{marginLeft:'-35px',marginRight:'-5px'}} className="bg-sky-800 rounded-3xl w-20 ">
                <div className="ml-5 mt-3 mb-3 pt-5">
                <a className="mt-5" href="http://twitter.com" target='_blank'>
                <img style={{marginBottom:'-20px'}} src='images/X1.png' className="w-5 h-5 ml-7"/>
                </a><br/>
                <a href="http://facebook.com" target='_blank'>
                     <i class=" text-white text-xl ml-7 mt-3 fa-brands fa-facebook-f"></i>
                </a><br/>
                
                <a href="http://instagram.com" target='_blank'>
                     <i class=" text-white text-xl ml-7 mt-3 fa-brands fa-instagram"></i>
                </a><br/>
                <a href="https://web.telegram.org/a/" target='_blank' >
                     <i class=" text-white text-xl ml-7 mt-3 mb-3 fa-brands fa-telegram"></i>
                </a>
                </div>
            </div>
            </div>
        )
    }
}