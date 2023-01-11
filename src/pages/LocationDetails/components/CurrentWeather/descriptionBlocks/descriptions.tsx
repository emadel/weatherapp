import { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './descriptions.module.css';

interface Props extends HTMLAttributes<HTMLElement> {
  visuallyHidden?: boolean;
}

export const DL = (props: Props) => {
  const { className, ...rest } = props;
  return <dl className={clsx(styles.base, className)} {...rest} />;
};

export const DT = (props: Props) => {
  const { className: customClasses, visuallyHidden = false, ...rest } = props;

  const className = clsx(
    styles.base,
    {
      [styles.visuallyHidden]: visuallyHidden,
    },
    customClasses
  );

  return <dt className={className} {...rest} />;
};

export const DD = (props: Props) => {
  const { className: customClasses, visuallyHidden = false, ...rest } = props;

  const className = clsx(
    styles.base,
    {
      [styles.visuallyHidden]: visuallyHidden,
    },
    customClasses
  );

  return <dd className={className} {...rest} />;
};
