import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import { Field, useField } from "formik";

const FormBorder = styled(Box)`
  border: 1px solid rgb(185, 181, 181);
  border-radius: 3px;
  padding: 0 11px;
  display: flex;
  & > * {
    flex-grow: 1;
  }
`;

function CustomInputField({ name, options }) {
  console.log(name, options);

  const [field, meta, helpers] = useField(name);
  console.log([field, meta, helpers]);
  return (
    <FormBorder>
      <Field
        type="text"
        as={InputBase}
        name={name}
        placeholder={`${options?.placeholder}...`}
        value={field.value}
        onChange={(e) => helpers.setValue(e.target.value)}
      />
    </FormBorder>
  );
}

export { CustomInputField };
