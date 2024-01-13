export const loginParams = [
  {
    type: 'text',
    name: 'email',
    errorType: 'email',
  },
  {
    type: 'password',
    name: 'password',
    errorType: 'password',
  },
];

export const signupParams = [
  {
    type: 'text',
    name: 'firstname',
    errorType: 'firstname',
  },
  {
    type: 'text',
    name: 'lastname',
    errorType: 'lastname',
  },
  {
    type: 'text',
    name: 'email',
    errorType: 'email',
  },
  {
    type: 'password',
    name: 'password',
    errorType: 'password',
  },
  {
    type: 'text',
    name: 'address',
    errorType: 'address',
  },
  {
    type: 'text',
    name: 'city',
    errorType: 'city',
  },
  {
    type: 'number',
    name: 'postcode',
    errorType: 'zip',
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    errorType: 'phoneNumber',
  },
];

export const bookEditParams = [
  {
    type: 'text',
    name: 'title',
    errorType: 'title',
  },
  {
    type: 'text',
    name: 'author',
    errorType: 'author',
  },
  {
    type: 'number',
    name: 'number of pages',
    errorType: 'number of pages',
  },
  {
    type: 'number',
    name: 'price',
    errorType: 'price',
  },

  {
    type: 'number',
    name: 'quantity',
    errorType: 'quantity',
  },
  { type: 'textarea', name: 'description', errorType: 'description' },
];
