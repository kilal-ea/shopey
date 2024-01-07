import { Component } from "react";

export default class Foot extends Component{
    render(){
        return(
            <div className="relative h-full w-fuul">
                <div style={{}} className="bg-blue-950 p-3 text-white   absolute inset-x-0 .bottom-0">
                <div className="flex justify-between">
                    <div><h1 className="text-xl ">shopey</h1></div>
                    <div><h1 className="text-xl ">shopey_pro@professional.ma</h1></div>
                </div>
                <div className="flex justify-around my-10">
                      <div>
                        <div>
                            <h1 className="text-xl">servise</h1>
                        </div>
                        <div>
                            <p>Selling clothing</p>
                            <p>advertising</p>
                            <p>promoting customer products</p>
                        </div>
                        
                      </div>
                      <div>
                        <div><h1 className="text-xl">contact</h1></div>
                        <div>
                            <p>facebook</p>
                            <p>email</p>
                            <p>whatsApp</p>
                            <p>telegram</p>
                        </div>
                        
                      </div>
                      <div>
                        <div><h1 className="text-xl">ville</h1></div>
                        <div>
                            <p>laayoun</p>
                            <p>safi</p>
                            <p>agader</p>
                            <p>fes</p>
                            <p>tange</p>
                        </div>
                        
                      </div>
                </div>
                <div className="flex justify-center">
                    &copy;<p>shopey_2024</p>
                </div>
            </div>
            </div>
            
        )
    }
}