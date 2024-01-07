import { Component } from "react"
import Sl from "../slider/slidbarpto";
import ProductDetail from "./prod";

export default class Propage extends Component{
    render(){
        return(
            <>
            <ProductDetail/>
            <Sl/>
            </>
        )
    }
}