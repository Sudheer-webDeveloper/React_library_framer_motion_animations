import React from "react";
import { motion, useAnimation } from "framer-motion";

const Box6 = () => {
  const control = useAnimation();
  return (
    <div className="Box-6">
      <button
        onClick={() => {
          control.start({
            x: 900,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>

      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>

      <button
      onClick={()=>{
        control.start({
          borderRadius:["20%","30%","40%","50%","50%"],
          x:[0,300,600,700,900],
          rotate:[0,180,270,360,0],
          transition:{
            duration:2,
          }
        })
      }}>Turn Circle</button>
      <button
      onClick={()=>{
        control.start({
          borderRadius:"0",
          x:0,
          transition:{
            duration:2,
          }
        })
      }}>Turn Square</button>
      <button
      onClick={()=>{
        control.stop()
      }}>Stop</button>

      <motion.div className="box-6" animate={control}>
        {/* <h2>Box-6</h2> */}
      </motion.div>
    </div>
  );
};

export default Box6;
