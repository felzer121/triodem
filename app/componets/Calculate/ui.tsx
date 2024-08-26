"use client";
import React from "react";
import { LineCalculate } from "../LineCalculate/ui";
import { FonCalculate } from "../svg/FonCalculate";
import { CalculateBody } from "../CalculateBody/ui";

export const Calculate = () => {
  const [step, setStep] = React.useState(1);
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="mt-16 py-6 bg-gradient-to-r from-[transparent] to-[#161616] rounded-lg  px-3">
          <div className="grid gap-12 lg:gap-4 grid-cols-[1fr] lg:grid-cols-[380px_1fr] xl:grid-cols-[1fr_1fr]">
            <div className="flex flex-col items-center gap-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white">
                Калькулятор
                стоимости
              </h2>
              <div className="max-w-[520px] w-full hidden lg:block">
                <FonCalculate />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="max-w-[600px] flex flex-col gap-16">
                  <LineCalculate step={step} />
                  <CalculateBody step={step} setStep={setStep} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
