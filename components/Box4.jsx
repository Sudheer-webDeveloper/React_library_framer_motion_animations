import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  const boxVariant = {
    hidden: {
      x: -400,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren", // now the children animation will happen after the parent animation get overed
      },
    },
  };

  // we are agian creating new variant called list varaint but with the same names called hidden and visble objects init  for children li , we no need to crate with new objects names and pass them as a prop to the children , which looks easy

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition:{
      staggerChildren: 0.2,
      }
    },
  };

  return (
    <motion.div
      className="box-4"
      variants={boxVariant}
      initial="hidden"
      animate="visible"
    >
        <h2>Box-4</h2>
      <motion.ul  variants={listVariant}>
        {[1, 2, 3].map((item) => {
          return (
            <motion.li className="small_box" variants={listVariant}></motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Box4;
