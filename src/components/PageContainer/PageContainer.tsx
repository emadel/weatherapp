import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './PageContainer.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const PageContainer = (props: Props) => {
  const { className, ...divProps } = props;

  return (
    <div className={clsx(styles.container, className)} {...divProps}></div>
  );
};
