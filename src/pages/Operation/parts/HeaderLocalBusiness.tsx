// src/pages/Operation/parts/HeaderLocalBusiness.tsx
import React, { useEffect, useState } from 'react';
import { Cascader } from 'antd';
import {
  useProfiler,
  useProfilerDispatch,
} from '@/contexts/ProfilerContext';
import { CascadeOption } from '@/types/CascadeOption';
import type { CascaderProps, GetProp } from 'antd';

type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

const options: CascadeOption[] = [
  {
    value: 'business1',
    label: 'Business 1',
    children: [
      {
        value: 'location1',
        label: 'Location 1',
      },
      {
        value: 'location2',
        label: 'Location 2',
      },
    ],
  },
  {
    value: 'business2',
    label: 'Business 2',
    children: [
      {
        value: 'location3',
        label: 'Location 3',
      },
      {
        value: 'location4',
        label: 'Location 4',
      },
    ],
  },
  {
    value: 'business5',
    label: 'Business 5',
    children: [
      {
        value: 'location6',
        label: 'Location 6',
        children: [
          {
            value: 'location7',
            label: 'Location 7',
          },
          {
            value: 'location8',
            label: 'Location 8',
          },
        ],
      },
      {
        value: 'location4',
        label: 'Location 4',
      },
    ],
  },
];

const HeaderLocalBusiness: React.FC = () => {
  const state = useProfiler();
  const dispatch = useProfilerDispatch();
  const [selectedBusiness, setSelectedBusiness] = useState<string[]>([]);

  useEffect(() => {
    if (state.localBusiness) {
      setSelectedBusiness(state.localBusiness.split(' / '));
    }
  }, [state.localBusiness]);

  const onChange: CascaderProps<CascadeOption>['onChange'] = (
    value,
    selectedOptions,
  ) => {
    console.log(value, selectedOptions);
    const selectedBusiness = value.join(' / ');
    dispatch({ type: 'SET_LOCAL_BUSINESS', payload: selectedBusiness });
  };

  const filter = (inputValue: string, path: DefaultOptionType[]) =>
    path.some(
      (option) =>
        (option.label as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1,
    );

  return (
    <Cascader
      size="large"
      options={options}
      value={selectedBusiness}
      onChange={onChange}
      showSearch={{ filter }}
      onSearch={(value) => console.log(value)}
      placeholder="Select Business Location"
      style={{ width: '100%' }}
    />
  );
};

export default HeaderLocalBusiness;
