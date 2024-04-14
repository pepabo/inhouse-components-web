import React, { FC, InputHTMLAttributes } from "react";
import { SemanticColor } from "./types";

type HTMLProps = InputHTMLAttributes<HTMLInputElement>;

export interface Props extends HTMLProps {
  color?: Extract<
    SemanticColor,
    "neutral" | "positive" | "negative" | "notice"
  >;
}

export const Snackbar: FC<Props> = ({ color = "neutral" }) => {
  return (
    <>
      <div className={`in-snackbar -color-${color}`}>
        <span className="in-icon" data-icon="check" />
        <span>アイテム1を削除しました</span>
        <div className="_trailing">
          <button className="in-button -size-s -appearance-transparent">
            <div className="_body">もとに戻す</div>
          </button>
        </div>
      </div>
      <div className={`in-snackbar -color-${color} -inline`}>
        <span className="in-icon _icon" data-icon="check" />
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
