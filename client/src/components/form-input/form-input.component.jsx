import { FormInput as Input, FormInputLabel, Group } from './form-input.styles';

const FormInput = ({ label, ...inputProps }) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && <FormInputLabel>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
