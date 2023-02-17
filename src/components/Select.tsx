import { FC } from 'react';
import SelectComponent from 'react-select';
import { SingleValue } from 'react-select/dist/declarations/src';

const options = [
  { value: 'From', label: 'From' },
  { value: 'To', label: 'To' },
];

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  onChange: (option: string) => void;
}

export const Select: FC<ISelectProps> = ({ onChange }) => {
  const onSelectChange = (option: SingleValue<IOption>) => {
    if (option) {
      onChange(option.value);
    }
  };

  return (
    <div>
      <SelectComponent
        options={options}
        onChange={onSelectChange}
        isClearable={true}
      />
    </div>
  );
};
