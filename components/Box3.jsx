import React from 'react'
import { motion } from 'framer-motion'


// variants

const Box3 = () => {

    const variant = {
       forInitial : {
        x:100,
        scale:1.5,
        backgroundColor:"blue",
       },
       forFinal:{
            x:1000,
            scale:0.3,
            backgroundColor:"maroon",
       }
    }

  return (
    <motion.div className='box-3' variants={variant} initial="forInitial" animate="forFinal" transition={{
        duration:2,
    }}>
        <h2>Box-3</h2>
    </motion.div>
  )
}

export default Box3
