import React, { FC, ReactNode, HTMLAttributes } from 'react'
import { Appearance, Density, Size } from './types'
import {
  Tabs as AriaTabs,
  TabList as AriaTabList,
  Tab as AriaTab,
  TabPanel as AriaTabPanel
} from 'react-aria-components'

type HTMLProps = HTMLAttributes<HTMLDivElement>

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface Props extends HTMLProps {
  tabItems: TabItem[];
  appearance?: Extract<Appearance, 'transparent' | 'outlined'>;
  align?: 'start' | 'center';
  density?: Density;
  size?: Extract<Size, 's' | 'm' | 'l'>;
  isGapless?: boolean;
  ariaLabel?: string;
}

const getTabClassName = ({isSelected}: {isSelected: boolean}) => {
  return isSelected ? "_item --activated" : "_item";
};

const getPanelClassName = ({isInert}: {isInert: boolean}) => {
  return !isInert ? "_panel --activated" : "_panel";
};

const Tab: FC<Props> = (props: Props) => {
  const {
    tabItems,
    appearance,
    align,
    density,
    size,
    isGapless,
    ariaLabel = 'メニュー',
    ...rest
  } = props;

  const classList = ['in-tab'];

  if (typeof appearance !== 'undefined') {
    classList.push(`-appearance-${appearance}`);
  }

  if (typeof align !== 'undefined') {
    classList.push(`-align-${align}`);
  }

  if (typeof density !== 'undefined') {
    classList.push(`-density-${density}`);
  }

  if (typeof size !== 'undefined') {
    classList.push(`-size-${size}`);
  }

  if (isGapless) {
    classList.push(`-is-gapless`);
  }

  const classes = classList.join(' ');

  return (
    <div
      className={classes}
      {...rest}
    >
      <AriaTabs>
        <AriaTabList className="_list" aria-label={ariaLabel}>
          {tabItems.map((item) => (
            <AriaTab
              key={item.id}
              id={item.id}
              className={getTabClassName}
            >
              <span className="_body">{item.label}</span>
            </AriaTab>
          ))}
        </AriaTabList>

        {tabItems.map((item) => (
          <AriaTabPanel
            key={item.id}
            id={item.id}
            className={getPanelClassName}
          >
            {item.content}
          </AriaTabPanel>
        ))}
      </AriaTabs>
    </div>
  );
};

export default Tab;
