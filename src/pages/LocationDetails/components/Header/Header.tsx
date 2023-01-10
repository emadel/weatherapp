import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { BackButton } from './BackButton';
import styles from './Header.module.css';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Header = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <header className={clsx(styles.header, className)} {...rest}>
      <BackButton />

      <h1>{children}</h1>
    </header>
  );
};
