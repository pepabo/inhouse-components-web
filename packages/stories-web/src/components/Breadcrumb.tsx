import React, { FC, HTMLAttributes } from 'react'
import { Size, Density, Overflow } from './types'
import {
  Breadcrumbs as AriaBreakcrumbs,
  Breadcrumb as AriaBreadcrumb,
  Link as AriaLink
} from 'react-aria-components';

type HTMLProps = HTMLAttributes<HTMLDivElement>

export interface Option {
  value: string;
  label: string;
}

export interface Props extends HTMLProps {
  options: Option[];
  size?: Extract<Size, 's' | 'm' | 'l'>;
  density?: Extract<Density, 'dense' | 'normal' | 'comfort'>;
  overflow?: Extract<Overflow, 'wrap' | 'scroll'>;
  ariaLabel?: string;
}

const Breadcrumb: FC<Props> = (props: Props) => {
  const {
    options,
    size,
    density,
    overflow,
    ariaLabel,
    ...rest
  } = props;

  const classList = ['in-breadcrumb'];

  if (typeof size !== 'undefined') {
    classList.push(`-size-${size}`);
  }

  if (typeof density !== 'undefined') {
    classList.push(`-density-${density}`);
  }

  if (typeof overflow !== 'undefined') {
    classList.push(`-overflow-${overflow}`);
  }

  const classes = classList.join(' ');

  return (
    <div
      className={classes}
      {...rest}
    >
      <AriaBreakcrumbs className="_list" aria-label={ariaLabel}>
        {options.map((option) => (
          <AriaBreadcrumb key={option.value} className="_item">
            <AriaLink href={option.value} className={({ isCurrent }) => isCurrent ? '_current' : '_link'}>
              {option.label}
            </AriaLink>
          </AriaBreadcrumb>
        ))}
      </AriaBreakcrumbs>
    </div>
  );
};

export default Breadcrumb;
