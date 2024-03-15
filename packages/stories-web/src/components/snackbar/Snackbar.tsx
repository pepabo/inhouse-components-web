import React, { FC, InputHTMLAttributes } from "react";

type HTMLProps = InputHTMLAttributes<HTMLInputElement>;

export interface Props extends HTMLProps {
  color?: string;
}

export const Snackbar: FC<Props> = ({ color = "" }) => {
  return (
    <>
      <div className={`in-snackbar -color-${color}`}>
        <div className="_group">
          <span className="in-icon _icon" data-icon="check" />
          <span>アイテム1を削除しました</span>
        </div>
        <button className="_button" type="button">
          もとに戻す
        </button>
      </div>
      <div className={`in-snackbar -color-${color} -inline`}>
        <div className="_group">
          <span className="in-icon _icon" data-icon="check" />
          <span>アイテム1を削除しました</span>
        </div>
        <button className="_button" type="button">
          もとに戻す
        </button>
      </div>
    </>
  );
};

export default Snackbar;
