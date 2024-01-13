import { ChangeEvent, FormEvent } from 'react';
import { useContext, useEffect, useState } from 'react';
import { BookEditStyled, BookEditForm } from './BookEdit.styled';
import MockBooks from '.././../../MockData/MockBooks.json';
import CustomTextInput from '../../../components/CustomInput/CustomTextInput';
import CustomInputContainer from '../../../components/CustomInput/CustomInputContainer';
import { ErrorContext } from '../../../context/ErrorContext';
import CustomButton from '../../../components/Buttons/CustomButton';
import ErrorContainer from '../../../components/Error/ErrorContainer';
import validateForm from '../../../Util/validateForm';
import { bookEditParams } from '../../../params/formParams';
import getFormData from '../../../Util/getFormData';
import { useNavigate } from 'react-router-dom';

type BookEditProps = {
  bookItemCode: string;
};

const BookEdit = ({ bookItemCode }: BookEditProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { error, clearError, handleError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // ToDo: Get book from backend
    const foundBook = MockBooks.find((item) => item.itemCode === bookItemCode);
    if (foundBook) {
      addBookInfo(foundBook);
    }
  }, [bookItemCode]);

  const addBookInfo = (foundBook: BookInventoryItem) => {
    setAuthor(foundBook.author);
    setName(foundBook.name);
    setDescription(foundBook.description);
    setPrice(foundBook.price);
    setNumberOfPages(foundBook.numberOfPages);
    setQuantity(foundBook.quantity);
  };

  if (!name) {
    return <div>Loading...</div>;
  }

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    const target = e.currentTarget.elements;

    const isFormValid = validateForm({ target, params: bookEditParams });

    if (typeof isFormValid === 'object') {
      handleError(isFormValid);
      return setIsLoading(false);
    }

    const formData = getFormData(target, bookEditParams) as Record<
      string,
      string
    >;

    // Todo:
    console.log('DATA', formData);
    setIsLoading(false);
    cancel();
  };

  const cancel = () => {
    navigate('/');
  };

  const textareInput = {
    type: 'textarea',
    name: 'description',
    errorType: 'description',
    placeholder: description,
    value: description,
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
      setDescription(e.target.value),
  };

  const inputFields = [
    {
      type: 'text',
      name: 'title',
      errorType: 'title',
      placeholder: name,
      value: name,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setName(e.target.value),
    },
    {
      type: 'text',
      name: 'author',
      errorType: 'author',
      placeholder: author,
      value: author,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setAuthor(e.target.value),
    },
    {
      type: 'number',
      name: 'number of pages',
      errorType: 'number of pages',
      placeholder: numberOfPages,
      value: numberOfPages,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setNumberOfPages(Number(e.target.value)),
    },
    {
      type: 'number',
      name: 'price',
      errorType: 'price',
      placeholder: price,
      value: price,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setPrice(Number(e.target.value)),
    },

    {
      type: 'number',
      name: 'quantity',
      errorType: 'quantity',
      placeholder: quantity,
      value: quantity,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setQuantity(Number(e.target.value)),
    },
  ];

  return (
    <BookEditStyled>
      {' '}
      <div className="cancel-button">
        <CustomButton className="medium" text="Cancel" />
      </div>
      <BookEditForm onSubmit={handleEdit}>
        <div className="input-container">
          <div className="normal-input">
            {inputFields.map(
              ({ type, name, placeholder, value, onChange, errorType }) => (
                <CustomInputContainer key={name}>
                  <CustomTextInput
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    error={error && error.input === errorType}
                  />
                  {error && error.input === errorType && (
                    <ErrorContainer message={error.message} />
                  )}
                </CustomInputContainer>
              )
            )}
          </div>
          <div className="area-input">
            <CustomInputContainer key={textareInput.name}>
              <CustomTextInput
                type={textareInput.type}
                name={textareInput.name}
                placeholder={textareInput.placeholder}
                value={textareInput.value}
                onChange={textareInput.onChange}
                error={error && error.input === textareInput.errorType}
              />
              {error && error.input === textareInput.errorType && (
                <ErrorContainer message={error.message} />
              )}
            </CustomInputContainer>
          </div>
        </div>
        <div className="button-container">
          {error && !error.input && <ErrorContainer message={error.message} />}

          <CustomButton
            className="large"
            text={isLoading ? 'Loading...' : 'Save'}
            type="submit"
            disabled={isLoading}
          />
        </div>
      </BookEditForm>
    </BookEditStyled>
  );
};

export default BookEdit;
