import React, { FC, ReactNode } from "react";
import { Shape } from "../types";

export interface Props {
  appearance?: "filled" | "outlined" | "elevated";
  body?: string;
  children?: ReactNode;
  color?: "primary" | "secondary" | "tertiary";
  isGapless?: boolean;
  shape?: Shape;
}

const Card: FC<Props> = (props: Props) => {
  const { appearance, body, children, color, isGapless, shape, ...rest } = props;

  const classes = [`in-card`];

  if (appearance) {
    classes.push(`in-card--${appearance}`);
  }

  if (color) {
    classes.push(`in-card--${color}`);
  }

  if (isGapless) {
    classes.push("in-card--gapless");
  }

  if (shape) {
    classes.push(`in-card--${shape}`);
  }

  return (
    <div className={classes.join(" ")} {...rest}>
      {body || children || null}
    </div>
  );
};

export default Card;
