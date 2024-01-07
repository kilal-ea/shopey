import { Component } from "react";

export default class About extends Component{
    render(){
        return(
            <div id="" className="w-full pb-5 ">
                <div >
                    <div className=" shadow-md rounded-xl">
                        <div > 
                            <img src="images/f.jpg" className=" w-full bg-cover rounded-t-2xl  "/> 
                        </div>
                        <div className="ml-16 mt-16 mr-5 pb-5 md:flex  max-sm:ml-3 max-sm:text-center max-sm:mt-5   ">
                            <h1 className="text-blue-950 text-4xl w-1/6 md:w-1/4 md:mr-4 max-md:text-3xl max-md:mb-3 max-md:w-full">
                                About us
                            </h1>
                            <p className="text-blue-950 text-lg w-3/6 md:w-5/6 max-md:w-full">
                            Welcome to Sopey, where passion for quality and dedication to customer satisfaction converge. Our journey began with a vision—to create an online shopping experience that goes beyond transactions and fosters a community of inspired individuals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}