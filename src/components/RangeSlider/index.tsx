import React, { useState } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './index.less';

import { usePrevious, useUpdateEffect } from '@umijs/hooks';
import { isEqual } from 'lodash';
interface RangeSliderProps {
  onChange?: Function;
  min: number;
  max: number;
  step?: number;
  value?: [number, number];
}

const RangeSlider = ({
  max = 10,
  min = 0,
  value = [min, max],
  onChange,
  step = 1,
}: RangeSliderProps) => {
  const [innerValue, setInnerValue] = useState(value);

  const prevValue: number[] | undefined = usePrevious(value);

  useUpdateEffect(() => {
    if (!isEqual(prevValue, value)) {
      setInnerValue(value);
    }
  }, [value]);

  return (
    <div className={styles.rangeComponent}>
      <Range
        step={step}
        className={styles.rangeComponentSlider}
        value={innerValue}
        min={min}
        max={max}
        onChange={(values: any) => {
          setInnerValue(values);
        }}
        onAfterChange={(values) => {
          if (onChange) {
            onChange(values);
          }
        }}
        pushable={true}
      />

      <div className={styles.rangeComponentValue}>
        <div className={styles.rangeComponentValueMin}>{value[0]}</div>
        <div className={styles.rangeComponentValueMax}>{value[1]}</div>
      </div>
    </div>
  );
};

export default RangeSlider;
