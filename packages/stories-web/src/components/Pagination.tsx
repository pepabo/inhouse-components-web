import React, { FC, HTMLAttributes } from 'react'
import { Size } from './types'

type HTMLProps = HTMLAttributes<HTMLElement>

export type Format = 'numbered' | 'simple'

export interface Props extends HTMLProps {
  current: number;
  max: number;
  format?: Format;
  siblingCount?: number;
  withCounter?: boolean;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  ariaLabel?: string;
  hrefTemplate?: (page: number) => string;
}

type PageItem = number | 'truncation'

const getPageItems = (current: number, max: number, siblingCount: number): PageItem[] => {
  const first = 1;
  const last = max;
  const start = Math.max(current - siblingCount, first + 1);
  const end = Math.min(current + siblingCount, last - 1);

  const items: PageItem[] = [first];

  if (start > first + 1) {
    items.push('truncation');
  }

  for (let page = start; page <= end; page++) {
    items.push(page);
  }

  if (end < last - 1) {
    items.push('truncation');
  }

  if (last > first) {
    items.push(last);
  }

  return items;
};

const Pagination: FC<Props> = (props: Props) => {
  const {
    current,
    max,
    format = 'numbered',
    siblingCount = 2,
    withCounter = false,
    size,
    ariaLabel,
    hrefTemplate = (page: number) => `?page=${page}`,
    ...rest
  } = props;

  const classList = ['in-pagination'];

  if (typeof size !== 'undefined') {
    classList.push(`-size-${size}`);
  }

  const classes = classList.join(' ');

  return (
    <nav
      className={classes}
      aria-label={ariaLabel}
      {...rest}
    >
      {current > 1 ? (
        <a className="_previous" href={hrefTemplate(current - 1)}>前のページ</a>
      ) : (
        <span className="_previous -is-placeholder">前のページ</span>
      )}
      {format === 'numbered' && (
        <ul className="_list">
          {getPageItems(current, max, siblingCount).map((item, index) => (
            <li
              key={item === 'truncation' ? `truncation-${index}` : item}
              className="_item"
              {...(item === 'truncation' ? { 'aria-hidden': true } : {})}
            >
              {item === 'truncation' ? (
                <span className="_truncation">…</span>
              ) : item === current ? (
                <span className="_current" aria-current="page">{item}</span>
              ) : (
                <a className="_link" href={hrefTemplate(item)}>{item}</a>
              )}
            </li>
          ))}
        </ul>
      )}
      {(format === 'simple' || withCounter) && (
        <span className="_counter">{current} / {max}</span>
      )}
      {current < max ? (
        <a className="_next" href={hrefTemplate(current + 1)}>次のページ</a>
      ) : (
        <span className="_next -is-placeholder">次のページ</span>
      )}
    </nav>
  );
};

export default Pagination;
