import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './PageContainer.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const PageContainer = (props: Props) => {
  const { className, children, ...divProps } = props;

  return (
    <div className={styles.container} {...divProps}>
      <div className={clsx(styles.content, className)}>{children}</div>
    </div>
  );
};
