import React, { FC, ReactNode, HTMLAttributes } from 'react'
import { Size } from './types'
import {
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  Button,
  Heading
} from 'react-aria-components'

type HTMLProps = Omit<HTMLAttributes<HTMLDivElement>, 'role'>

export interface FooterProps {
  close: () => void;
}
export interface Props extends Omit<HTMLProps, 'title'> {
  title: ReactNode;
  children: ReactNode;
  footer?: ReactNode | ((props: FooterProps) => ReactNode);
  size?: Extract<Size, 's' | 'm' | 'l'>;
  alignment?: 'left' | 'center' | 'right';
  buttonFlow?: 'row' | 'column';
  closeOnOverlayClick?: boolean;
  triggerLabel: string;
}

const Dialog: FC<Props> = (props: Props) => {
  const {
    title,
    children,
    footer,
    size = 'm',
    alignment = 'center',
    buttonFlow = 'row',
    closeOnOverlayClick = false,
    triggerLabel,
    ...rest
  } = props;

  const dialogClassList = ['in-dialog'];

  if (size !== 'm') {
    dialogClassList.push(`-size-${size}`);
  }
  if (alignment !== 'center') {
    dialogClassList.push(`-alignment-${alignment}`);
  }
  if (buttonFlow !== 'row') {
    dialogClassList.push(`-button-flow-${buttonFlow}`);
  }

  const dialogClasses = dialogClassList.join(' ');

  return (
    <AriaDialogTrigger>
      <Button className="in-button -appearance-outlined">
        <span className="_body">{triggerLabel}</span>
      </Button>
      <AriaModalOverlay
        className="in-modal"
        isDismissable={closeOnOverlayClick}
      >
        <AriaModal>
          <AriaDialog
            className={dialogClasses}
            {...rest}
          >
            {({ close }) => (
              <>
                <div className="_header">
                  <Heading
                    id="dialog-title"
                    className="_title"
                  >
                    {title}
                  </Heading>
                </div>
                <div className="_content" role="document">
                  {children}
                </div>
                {footer && (
                  <div
                    className="_footer"
                    role="toolbar"
                    aria-label="ダイアログのアクション"
                  >
                     {typeof footer === 'function' ? footer({ close }) : footer}
                  </div>
                )}
              </>
            )}
          </AriaDialog>
        </AriaModal>
      </AriaModalOverlay>
    </AriaDialogTrigger>
  );
};

export default Dialog;
