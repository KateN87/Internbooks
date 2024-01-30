type ValidateFormProps = {
  target: HTMLFormControlsCollection;
  params: FormDataParam[];
};

const validateForm = ({
  target,
  params,
}: ValidateFormProps): boolean | CustomError => {
  const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  for (const { name, errorType } of params) {
    const inputElement = target.namedItem(name) as HTMLInputElement | null;

    if (!inputElement?.value) {
      return { input: errorType, message: `Please fill in ${name}` };
    }

    if (name === 'password') {
      if (!validPassword.test(inputElement?.value)) {
        return {
          input: errorType,
          message: `Password does not meet the criteria`,
        };
      }
    }
  }

  return true;
};

export default validateForm;
