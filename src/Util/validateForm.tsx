type ValidateFormProps = {
  target: HTMLFormControlsCollection;
  params: FormDataParam[];
  login?: boolean;
};

const validateForm = ({
  target,
  params,
  login,
}: ValidateFormProps): boolean | CustomError => {
  const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  for (const { name, errorType } of params) {
    const inputElement = target.namedItem(name) as HTMLInputElement | null;

    if (!inputElement?.value) {
      return { input: errorType, message: `Please fill in ${name}` };
    }

    if (!login && name === 'password') {
      if (!validPassword.test(inputElement?.value)) {
        return {
          input: errorType,
          message: `Password must contain: 
        At least one digit.
        At least one special character from the set !@#$%^&*.
        At least one lowercase letter.
        At least one uppercase letter.
        The total length of the password must be at least 8 characters`,
        };
      }
    }
  }

  return true;
};

export default validateForm;
