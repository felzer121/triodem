"use client";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { LabelInputContainer, Input } from "../../componets/ui/input";
import { Logo } from "../../componets/Logo/ui";
import { IconAlertHexagonFilled } from "@tabler/icons-react";
import React from "react";
import { Toaster } from "react-hot-toast";
import { validate } from "@/app/lib/validate";
import { useUser } from "@/app/store/user";
import { getUser } from "@/app/api/auth";

interface UserField {
  email: null | string;
  password: null | string;
}

interface validSearchField {
  [key: string]: {
    isValid: null | boolean;
    error?: string;
  };
}

const defaultValidateField = {
  email: { isValid: null },
  password: { isValid: null },
};

export default function Auth() {
  const [user, setUser] = React.useState<UserField>({
    email: null,
    password: null,
  });
  const authUser = useUser((state) => state.authUser);
  const userState = useUser((state) => state.user);
  const [validateField, setValidateField] =
    React.useState<validSearchField>(defaultValidateField);

  const handleChange = (value: string, label: string) => {
    setValidateField(defaultValidateField);
    setUser((user) => {
      return { ...user, [label]: value };
    });
  };

  const handleLogin = () => {
    Object.keys(user).forEach((item) => {
      setValidateField((field) => {
        return {
          ...field,
          [item]: validate(item, user[item as keyof UserField]),
        };
      });
    });
    if (
      validateField.email.isValid &&
      validateField.password.isValid &&
      user.email &&
      user.password
    )
      authUser({ login: user.email, password: user.password });
  };

  return (
    <main className={GeistSans.className}>
      <Toaster />
      <section className="flex h-screen">
        <div className="w-full p-4 shadow-[inset_0px_0px_120px_164px_#000] hidden sm:flex">
          <Image
            src={`/image/auth-fone.jpg`}
            width={0}
            height={0}
            sizes="100vw"
            quality={100}
            className="w-full h-full relative z-[-1] rounded-3xl object-cover"
            alt="fon"
          />
        </div>

        <div className="w-full p-4 flex justify-center items-center">
          <div className="max-w-[420px] w-full h-full flex flex-col justify-between py-12">
            <div className="flex justify-center items-center gap-2">
              <Logo size="small" />
              <h2 className="uppercase font-bold text-4xl">Triodem</h2>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 mb-12">
                <LabelInputContainer className="mt-2">
                  <span className="text-sm">Email</span>
                  <Input
                    autoComplete="on"
                    id="email"
                    onChange={(e) => handleChange(e.target.value, "email")}
                    placeholder="Введите ваш email"
                    type="email"
                  />
                  {validateField.email.error && (
                    <span className="text-red-800 text-sm flex gap-1 items-center">
                      <IconAlertHexagonFilled />
                      {validateField.email.error}
                    </span>
                  )}
                </LabelInputContainer>
                <LabelInputContainer className="mt-2">
                  <span className="text-xs">Пароль</span>
                  <Input
                    autoComplete="on"
                    id="password"
                    onChange={(e) => handleChange(e.target.value, "password")}
                    placeholder="Введите ваш пароль"
                    type="password"
                  />
                  {validateField.password.error && (
                    <span className="text-red-800 text-sm flex gap-1 items-center">
                      <IconAlertHexagonFilled />
                      {validateField.password.error}
                    </span>
                  )}
                </LabelInputContainer>
              </div>
              <button
                onClick={handleLogin}
                className="w-full px-3 sm:px-4 py-3 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-700 text-sm sm:text-base font-semibold hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Войти
              </button>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h2 className="font-semibold text-md">created by Triodem</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
