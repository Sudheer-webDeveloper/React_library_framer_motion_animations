import React from 'react'
import { motion } from 'framer-motion'

const Box2 = () => {
  return (
    <motion.div className='box-2'

    whileHover={{
        scale:1.1,
    }}

    whileTap={{
        scale:0.9,
    }}

    drag
    dragConstraints={{
       right:1000,
       left:100,
       top:100,
       bottom:100,  
    }}
    >
      <h2>Box-2</h2>
    </motion.div>
  )
}

export default Box2
