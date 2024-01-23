import { ChangeEvent, FormEvent } from 'react';
import { useContext, useEffect, useState } from 'react';
import { BookEditStyled, BookEditForm } from './BookEdit.styled';
import CustomTextInput from '../../../components/CustomInput/CustomTextInput';
import CustomInputContainer from '../../../components/CustomInput/CustomInputContainer';
import { ErrorContext } from '../../../context/ErrorContext';
import CustomButton from '../../../components/Buttons/CustomButton';
import ErrorContainer from '../../../components/Error/ErrorContainer';
import validateForm from '../../../Util/validateForm';
import { bookEditParams } from '../../../params/formParams';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../../../context/BookContext';
import { InventoryContext } from '../../../context/InventoryContext';

type BookEditProps = {
  bookItemCode: string;
};

const BookEdit = ({ bookItemCode }: BookEditProps) => {
  const navigate = useNavigate();
  const { bookList, updateBook } = useContext(BookContext);
  const { inventoryList, updateInventories } = useContext(InventoryContext);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { error, clearError, handleError } = useContext(ErrorContext);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | undefined>('');

  useEffect(() => {
    clearError();
    const foundBook = bookList.find((item) => item.itemCode === bookItemCode);
    const foundQuantity = inventoryList.find(
      (item) => item.itemCode === bookItemCode
    );
    if (foundBook && foundQuantity) {
      const bookItem = { ...foundBook, quantity: foundQuantity.quantity };
      addBookInfo(bookItem);
    }
  }, [bookItemCode, bookList, inventoryList, clearError]);

  const addBookInfo = (foundBook: BookInventoryItem) => {
    setAuthor(foundBook.author);
    setName(foundBook.name);
    setDescription(foundBook.description);
    setPrice(foundBook.price);
    setNumberOfPages(foundBook.numberOfPages);
    setQuantity(foundBook.quantity);
    setImage(foundBook.imageLink);
  };

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

    try {
      const book = {
        name,
        author,
        description,
        numberOfPages,
        price,
        imageLink: image,
      };
      // Todo: connnect with backend
      await updateInventories(bookItemCode, quantity);
      await updateBook(bookItemCode, book);
      setIsLoading(false);
      cancel();
    } catch {
      setIsLoading(false);
    }
  };

  const cancel = () => {
    navigate('/');
  };

  const textareaInput = {
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
      state: setName,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setName(e.target.value),
    },
    {
      type: 'text',
      name: 'author',
      errorType: 'author',
      placeholder: author,
      value: author,
      state: setAuthor,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setAuthor(e.target.value),
    },
    {
      type: 'number',
      name: 'number of pages',
      errorType: 'number of pages',
      placeholder: numberOfPages,
      value: numberOfPages,
      state: setNumberOfPages,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setNumberOfPages(Number(e.target.value)),
    },
    {
      type: 'number',
      name: 'price',
      errorType: 'price',
      placeholder: price,
      value: price,
      state: setPrice,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setPrice(Number(e.target.value)),
    },

    {
      type: 'number',
      name: 'quantity',
      errorType: 'quantity',
      placeholder: quantity,
      value: quantity,
      state: setQuantity,
      onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
        setQuantity(Number(e.target.value)),
    },
  ];

  return (
    <BookEditStyled>
      {' '}
      <div className="cancel-button">
        <CustomButton
          className="medium"
          text="Cancel"
          onClick={() => cancel()}
        />
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
            <CustomInputContainer key={textareaInput.name}>
              <CustomTextInput
                type={textareaInput.type}
                name={textareaInput.name}
                placeholder={textareaInput.placeholder}
                value={textareaInput.value}
                onChange={textareaInput.onChange}
                error={error && error.input === textareaInput.errorType}
              />
              {error && error.input === textareaInput.errorType && (
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
