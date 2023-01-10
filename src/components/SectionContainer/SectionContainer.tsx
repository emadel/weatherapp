import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './SectionContainer.module.css';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const SectionContainer = (props: Props) => {
  const { className, ...divProps } = props;

  return (
    <section className={clsx(styles.container, className)} {...divProps} />
  );
};
