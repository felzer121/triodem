"use client";
import React from "react";
 
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";


export const CanvasEffect = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-4 mx-auto rounded-xl overflow-hidden">
          <div className="group/canvas-card flex items-center justify-center w-full mx-auto relative h-[445px]">
            <AnimatePresence>
                <div className="h-full w-full absolute inset-0">
                <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-emerald-900"
                    dotSize={2}
                />
                </div>
            </AnimatePresence>
            <div className="relative z-20">
                <div className="text-center  transition duration-200 w-full  mx-auto flex items-center justify-center">
                </div>
                <h2 className="text-white text-xl text-center relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    Реализуя проекты, мы сформировали свой собственный фирменный стиль
                </h2>
            </div>
          </div>
        </div>
    )
}