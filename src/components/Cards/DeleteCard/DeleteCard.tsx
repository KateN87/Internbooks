import CustomButton from '../../Buttons/CustomButton';
import { StyledDeleteCard, ButtonContainer } from './DeleteCard.styled';

type DeleteCardProps = {
  book: Record<string, string>;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteCard = ({ book, setShowDelete }: DeleteCardProps) => {
  const cancelHandler = () => {
    setShowDelete(false);
  };

  const deleteHandler = () => {
    console.log('delete');
  };

  return (
    <StyledDeleteCard>
      <p>
        Are you sure you want to delete <b>{book.name}?</b>
      </p>
      <ButtonContainer>
        <CustomButton text="cancel" className="small" onClick={cancelHandler} />
        <CustomButton text="delete" className="small" onClick={deleteHandler} />
      </ButtonContainer>
    </StyledDeleteCard>
  );
};

export default DeleteCard;
