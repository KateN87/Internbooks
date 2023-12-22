import { Dispatch, SetStateAction } from 'react';

type ValidateFormProps = {
  target: HTMLFormControlsCollection;
  params: FormDataParam[];
  setError: Dispatch<
    SetStateAction<{
      input: string;
      message: string;
    }>
  >;
};

const validateForm = ({
  target,
  params,
  setError,
}: ValidateFormProps): boolean => {
  const isValid = params.every(({ name, errorType }) => {
    const inputElement = target.namedItem(name) as HTMLInputElement | null;

    if (!inputElement?.value) {
      setError({
        input: errorType,
        message: `Please fill in ${name}`,
      });
      return false;
    }

    return true;
  });

  return isValid;
};

export default validateForm;
