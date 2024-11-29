import React, { FC } from "react";
import { Shape } from "../types";

export interface Props {
  appearance?: "filled" | "outlined" | "elevated";
  body?: string;
  color?: "primary" | "secondary" | "tertiary";
  isGapless?: boolean;
  shape?: Shape;
}

const Card: FC<Props> = (props: Props) => {
  const { appearance, body, color, isGapless, shape, ...rest } = props;

  const classes = [`in-card`];

  if (typeof appearance !== "undefined") {
    classes.push(`-appearance-${appearance}`);
  }

  if (typeof color !== "undefined") {
    classes.push(`-color-${color}`);
  }

  if (isGapless) {
    classes.push("-is-gapless");
  }

  if (typeof shape !== "undefined") {
    classes.push(`-shape-${shape}`);
  }

  return (
    <div className={classes.join(" ")} {...rest}>
      {body || null}
    </div>
  );
};

export default Card;
