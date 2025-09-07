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
  closeOnOverlayClick?: boolean;
  triggerLabel: string;
}

const Dialog: FC<Props> = (props: Props) => {
  const {
    title,
    children,
    footer,
    size = 'm',
    closeOnOverlayClick = false,
    triggerLabel,
    ...rest
  } = props;

  const dialogClassList = ['in-dialog'];

  if (size !== 'm') {
    dialogClassList.push(`-size-${size}`);
  }

  const dialogClasses = dialogClassList.join(' ');

  return (
    <AriaDialogTrigger>
      <Button className="in-button -appearance-outlined -width-half">{triggerLabel}</Button>
      <AriaModalOverlay
        className="in-dialog-modal"
        isDismissable={closeOnOverlayClick}
      >
        <AriaModal className="_container">
          <AriaDialog
            className={dialogClasses}
            role="dialog"
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
