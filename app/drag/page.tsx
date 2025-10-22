"use client";

import { motion } from "motion/react";

export default function Drag() {
  return (
    <div className="flex items-center justify-center gap-10">
      <motion.div
        drag
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-red-500 rounded-2xl"
      >
        I&apos;m free!
      </motion.div>
      <motion.div
        drag="x"
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-blue-500 rounded-2xl"
      >
        Only X axis!
      </motion.div>
      <motion.div
        drag="y"
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-yellow-500 rounded-2xl"
      >
        Only Y axis!
      </motion.div>
      <motion.div
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-pink-500 rounded-2xl"
      >
        Only 50px!
      </motion.div>
      <motion.div
        drag
        dragMomentum={false}
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-green-500 rounded-2xl"
      >
        DragMomentum false!
      </motion.div>
      <motion.div
        drag
        whileDrag={{ scale: 2 }}
        className="flex p-3 items-center justify-center text-white font-bold w-25 h-25 bg-orange-500 rounded-2xl"
      >
        WhileDrag scale 2!
      </motion.div>
    </div>
  );
}
