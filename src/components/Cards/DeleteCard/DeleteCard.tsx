import { useContext, useEffect, useState } from 'react';
import CustomButton from '../../Buttons/CustomButton';
import ErrorContainer from '../../Error/ErrorContainer';
import {
  StyledDeleteCard,
  ButtonContainer,
  StyledError,
} from './DeleteCard.styled';
import { ErrorContext } from '../../../context/ErrorContext';
import { BookContext } from '../../../context/BookContext';

type DeleteCardProps = {
  book: Record<string, string>;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteCard = ({ book, setShowDelete }: DeleteCardProps) => {
  const { deleteBook } = useContext(BookContext);
  const { error, clearError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);
  const cancelHandler = () => {
    setShowDelete(false);
  };

  useEffect(() => {
    clearError();
  }, [clearError]);

  const deleteHandler = async () => {
    clearError();
    setIsLoading(true);

    const resp = await deleteBook(book.itemCode);

    if (resp === undefined) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    cancelHandler();
  };

  return (
    <StyledDeleteCard>
      <p>
        Are you sure you want to delete <b>{book.name}?</b>
      </p>
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
          text={isLoading ? 'Loading...' : 'Delete'}
          className="medium"
          onClick={deleteHandler}
        />
      </ButtonContainer>
    </StyledDeleteCard>
  );
};

export default DeleteCard;
