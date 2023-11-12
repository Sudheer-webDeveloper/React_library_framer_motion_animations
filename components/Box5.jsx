// This componenet is based on key frames in framer motion 

import React from 'react'
import { motion } from 'framer-motion'


const Box5 = () => {
  return (
    <div>
       <motion.div
      className="box-5"
      animate={{
        scale:[1,1.4,1.4,1,1],
        borderRadius:["20%","30%","50%","50%","20%"],
        rotate:[0,0,270,360,0]
      }}
       // here duration is 2 seconds so each frame in scale, borderRaduius,rotate takes 2/5 = 0.4 seconds if we give 10s duration then each one will take 2s
      transition={{
        duration:2,
      }}
      >

    </motion.div>
    </div>
  )
}

export default Box5
