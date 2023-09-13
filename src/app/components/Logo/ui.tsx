import { LeftHeaderVector, RightHeaderVector } from "../landing/Vector/ui";
import styles from "./style.module.css";
import { Oswald } from "next/font/google";

export const oswald = Oswald({
  weight: "700",
  subsets: ["latin"],
});

interface LogoProps {
  color?: "dark" | "light";
}

export const Logo = ({ color }: LogoProps) => {
  return (
    <div className={oswald.className}>
      <span
        className={styles.logo}
        style={color === "light" ? { color: "#fff" } : { color: "#333" }}
      >
        Тетриум
      </span>
    </div>
  );
};
