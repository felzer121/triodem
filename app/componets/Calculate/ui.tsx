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
        <div className="mt-16 py-6 bg-gradient-to-r from-[transparent] to-[#161616] rounded-lg">
          <div className="grid grid-cols-[1fr_1fr]">
            <div className="flex flex-col gap-6">
              <h2 className="text-6xl font-black">
                Калькулятор
                <br />
                стоимости
              </h2>
              <FonCalculate />
            </div>
            <div className="flex items-center">
              <div className="w-full">
                <div className="max-w-[600px] flex flex-col gap-16">
                  <LineCalculate step={step} />
                  <CalculateBody step={step} setStep={setStep} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
