import React, { FC, InputHTMLAttributes } from "react";

type HTMLProps = InputHTMLAttributes<HTMLInputElement>;

export interface Props extends HTMLProps {
  color?: string;
}

export const Snackbar: FC<Props> = ({ color = "" }) => {
  return (
    <div className={`in-snackbar -color-${color}`}>
      <span className="in-icon" data-icon="check" />
      <div className="_label">アイテムその1を削除しました</div>
      <button className="_button" type="button">
        もとに戻す
      </button>
    </div>
  );
};

export default Snackbar;
