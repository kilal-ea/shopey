import { Cursor, useTypewriter } from "react-simple-typewriter"

export default function Ev(){
    const  c = <Cursor  className="text-2xl text-blue-900 " cursorColor="|"/>
    const [text] = useTypewriter({
        words:["All types of men's, women's and children's clothing","All international brands",
        " Everything you are looking for"],
        loop:{},
        typeSpeed:35,
        deleteSpeed:10,
    }) 
    return(
        <div className="ml-24 h-2/4 mt-16 max-md:h-1/3 max-md:pb-10 max-sm:hidden max-md: max-md:ml-16 ">
        <h1 className="text-5xl text-blue-900">Find </h1><br/>
        <p className="text-2xl text-black h-20 ">
            {text}{c}
        </p>
        
    </div>
    )
}