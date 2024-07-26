export const handleChangeValue = (field, value, setState) => {
  setState((prevState) => ({
    ...prevState,
    [field]: value,
  }));
};
