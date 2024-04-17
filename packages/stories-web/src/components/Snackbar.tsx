import React, { FC, InputHTMLAttributes } from "react";
import { SemanticColor } from "./types";

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
  return (
    <>
      {/* note: 表示したときにキーボードでアクションを実行できるよう、focusを当てる */}
      <div
        className={`in-snackbar -color-${color} ${isActive ? "--active" : ""} ${
          isInline ? "-inline" : ""
        }`}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="in-icon" data-icon="check" />
        <span>アイテム1を削除しました</span>
        <div className="_trailing">
          <button className="in-button -size-s -appearance-transparent">
            <div className="_body">もとに戻す</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Snackbar;
