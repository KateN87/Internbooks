const getFormData = (
  target: HTMLFormControlsCollection,
  params: FormDataParam[]
): FormDataParam | Record<string, string> => {
  const formData: FormDataParam | Record<string, string> = {};

  params.forEach(({ name }) => {
    const inputElement = target.namedItem(name) as HTMLInputElement | null;
    const inputValue = inputElement?.value;

    // Set form data only if the input has a value
    if (inputValue !== undefined) {
      formData[name] = inputValue;
    }
  });

  return formData;
};

export default getFormData;
