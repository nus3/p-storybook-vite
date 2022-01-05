import { VFC } from "react";

import styles from "./styles.module.css";

export type ButtonProps = {
  onClickFoo: () => void;
};

export const Button: VFC<ButtonProps> = ({ onClickFoo }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={onClickFoo}>
      Foo
    </button>
  );
};
