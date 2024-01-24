import { useState } from 'react';
import {
  StyledNumberInput,
  StyledDropdown,
  StyledContainer,
} from './CustomInput.styled';

type InputProps = {
  type: string;
  name: string;
  value?: string | number;
  minInput?: number;
  maxInput?: number;
  numberOptions: number[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
};

const CustomListInput: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  minInput,
  maxInput,
  numberOptions,
  className,
}) => {
  const clampedValue =
    value !== undefined
      ? Math.min(Math.max(Number(value), minInput || 0), maxInput || 99)
      : '';
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (selectedValue: number) => {
    onChange?.({
      target: { value: selectedValue.toString() },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    setDropdownOpen(false);
  };

  return (
    <StyledContainer style={{ position: 'relative' }}>
      <StyledNumberInput
        type="text"
        name={name}
        value={clampedValue}
        onChange={() => {}}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className={className}
      />
      {isDropdownOpen && (
        <StyledDropdown className={className}>
          {numberOptions.map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </StyledDropdown>
      )}
    </StyledContainer>
  );
};

export default CustomListInput;
