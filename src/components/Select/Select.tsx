import { FC } from 'react';
import SelectComponent from 'react-select';
import {
  SingleValue,
  StylesConfig,
  MultiValue,
} from 'react-select/dist/declarations/src';
import s from './Select.module.scss';


const options = [
  { value: 'From', label: 'From' },
  { value: 'To', label: 'To' },
];

const classNames: StylesConfig<IOption> = {
  control: (baseStyles) => ({
    ...baseStyles,
    fontSize: '14px',
    transition: '.4s',
    border: '0',
    backgroundColor: '#363640',
    '&:hover': {
      backgroundColor: 'gray',
      border: 'none',
    },
    '&:focus': {
      background: '#F6F6F6',
      boxShadow: '0px 0px 5px #D9D9D9',
      border: 'none',
    },
    cursor: 'pointer',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#363640' : 'white',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'grey',
      color: 'white',
    },
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'white',
  }),
  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    color: 'white',
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'white'
  })
};


export interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  onChange: (option: SingleValue<IOption>) => void;
}

export const Select: FC<ISelectProps> = ({ onChange }) => {
  const onSelectChange = (
    option: SingleValue<IOption> | MultiValue<IOption>,
  ) => {
    onChange(option as SingleValue<IOption>);
  };

  return (
    <div className={s.container}>
      <SelectComponent
        options={options}
        onChange={onSelectChange}
        isClearable={true}
        placeholder="Выбрать"
        styles={classNames}
      />
    </div>
  );
};
