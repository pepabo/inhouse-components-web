import React, { FC, InputHTMLAttributes } from "react";
import { SemanticColor } from "./types";
import { useStyleBase } from "./styleBase";

type HTMLProps = InputHTMLAttributes<HTMLInputElement>;

export interface Props extends HTMLProps {
  color?: Extract<
    SemanticColor,
    "neutral" | "positive" | "negative" | "notice"
  >;
  isActive?: boolean;
  isInline?: boolean;
}

export const Snackbar: FC<Props> = ({
  color = "neutral",
  isActive = true,
  isInline = false,
}) => {
  const styleBase = useStyleBase();

  return (
    <>
      {/* note: 表示したときにキーボードでアクションを実行できるよう、focusを当てる */}
      <div
        className={`${styleBase}-snackbar -color-${color} ${
          isActive ? "--active" : ""
        } ${isInline ? "-inline" : ""}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className={`${styleBase}-icon`} data-icon="check" />
        <span>アイテム1を削除しました</span>
        <div className="_trailing">
          <button className={`${styleBase}-button -size-s -appearance-transparent`}>
            <span className="_body">もとに戻す</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Snackbar;
