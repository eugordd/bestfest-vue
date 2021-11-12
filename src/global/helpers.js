export const getErrorText = error => {
  return error?.response?.data?.message;
};
