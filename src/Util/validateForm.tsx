type ValidateFormProps = {
  target: HTMLFormControlsCollection;
  params: FormDataParam[];
};

const validateForm = ({
  target,
  params,
}: ValidateFormProps): boolean | CustomError => {
  for (const { name, errorType } of params) {
    const inputElement = target.namedItem(name) as HTMLInputElement | null;

    if (!inputElement?.value) {
      return { input: errorType, message: `Please fill in ${name}` };
    }
  }

  return true;
};

export default validateForm;
