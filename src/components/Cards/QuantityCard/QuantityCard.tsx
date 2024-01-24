import { ChangeEvent, useContext, useEffect, useState } from 'react';
import CustomButton from '../../Buttons/CustomButton';
import ErrorContainer from '../../Error/ErrorContainer';
import {
  StyledQuantityCard,
  ButtonContainer,
  StyledError,
} from './QuantityCard.styled';
import { ErrorContext } from '../../../context/ErrorContext';
import { InventoryContext } from '../../../context/InventoryContext';
import CustomListInput from '../../CustomInput/CustomListInput';

type DeleteCardProps = {
  bookItemCode: string;
  setShowQuantity: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
};

const QuantityCard = ({
  bookItemCode,
  setShowQuantity,
  quantity,
}: DeleteCardProps) => {
  const { updateInventories } = useContext(InventoryContext);
  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const { error, clearError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);
  const numberList = Array.from({ length: 1000 }, (_, index) => index + 1);

  const cancelHandler = () => {
    setShowQuantity(false);
  };

  useEffect(() => {
    clearError();
  }, [clearError]);

  const updateQuantity = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newAmount = Number(e.target.value);

    // Clamp the new amount within the range 1 to 99
    const clampedAmount = Math.min(Math.max(newAmount, 0), 1000);
    setNewQuantity(clampedAmount);
  };

  const deleteHandler = async () => {
    clearError();
    setIsLoading(true);

    const resp = await updateInventories(bookItemCode, newQuantity);

    if (resp === undefined) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    cancelHandler();
  };

  return (
    <StyledQuantityCard>
      <CustomListInput
        type="number"
        name="items"
        value={newQuantity}
        onChange={(e) => updateQuantity(e)}
        minInput={0}
        maxInput={1000}
        numberOptions={numberList}
        className="quantity"
      />
      <StyledError>
        {error && <ErrorContainer message={error.message} />}
      </StyledError>

      <ButtonContainer>
        <CustomButton
          text="Cancel"
          className="medium"
          onClick={cancelHandler}
        />
        <CustomButton
          text={isLoading ? 'Loading...' : 'Save'}
          className="medium"
          onClick={deleteHandler}
        />
      </ButtonContainer>
    </StyledQuantityCard>
  );
};

export default QuantityCard;
