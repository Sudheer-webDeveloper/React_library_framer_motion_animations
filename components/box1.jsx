import React, { useState } from "react";
import { motion } from "framer-motion";




const Box1 = () => {

// step2 

const [animate,setAnimate] = useState(false)


  // step -1
  return (
    <motion.div
      className="box-1"

      initial={{
        opacity:0.3
      }}
   
      animate={{
        x: animate ? 900 : 0,
        opacity:animate ? 1 : 0.5,
        rotate:animate ? 360 : 0,
      }}

      transition={{
        type:"spring",
        stiffness:70,
      }}

      onClick={()=>setAnimate(!animate)}

      
    >
      <h2>Box-1</h2>    

    </motion.div>
  );
};

export default Box1;
