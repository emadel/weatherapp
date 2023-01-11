import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { BackButton } from './BackButton';
import styles from './Header.module.css';

interface Props extends HTMLAttributes<HTMLElement> {}

export const Header = (props: Props) => {
  const { className, children, ...rest } = props;

  return (
    <header className={clsx(styles.header, className)} {...rest}>
      <BackButton className={styles.backButton} />

      <h1 className={styles.heading}>{children}</h1>
    </header>
  );
};
