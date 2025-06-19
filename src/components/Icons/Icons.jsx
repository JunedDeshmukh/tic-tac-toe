
import { FaRegDotCircle } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { CgBorderStyleDashed } from "react-icons/cg";

function Icons({name}) {
    if(name== "circle"){
        return(<FaRegDotCircle />)
    }else if(name== "cross"){
        return(<GiCrossMark />)
    }else{
        return (<CgBorderStyleDashed />)
    }
    
    
  
}

export default Icons;
