import { FormInput as Input, FormInputLabel, Group } from './form-input.styles';

const FormInput = ({ label, ...inputProps }) => {
  return (
    <Group>
      {label && <FormInputLabel>{label}</FormInputLabel>}
      <Input {...inputProps} />
    </Group>
  );
};

export default FormInput;
