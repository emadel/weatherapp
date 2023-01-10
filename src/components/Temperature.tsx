import { HTMLAttributes } from 'react';

import { Units } from '@/api/constants';

const UnitSymbol: Record<Units, string> = {
  [Units.METRIC]: 'C',
  [Units.IMPERIAL]: 'F',
  [Units.STANDARD]: 'K',
};

interface Props extends HTMLAttributes<HTMLSpanElement> {
  temperature: number;
  units: Units;
}

export const Temperature = (props: Props) => {
  const { temperature, units, ...spanProps } = props;

  return (
    <span {...spanProps}>
      {temperature}

      <>&nbsp;&#176;</>

      {UnitSymbol[units]}
    </span>
  );
};
