import styled from "@emotion/styled";
import { Autocomplete, Box, InputBase } from "@mui/material";
import { Field, useField } from "formik";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const FormBorder = styled(Box)`
  border: 1px solid rgb(185, 181, 181);
  border-radius: 3px;
  padding: 0 11px;
  display: flex;
  & > * {
    flex-grow: 1;
  }
`;

function CustomSelectField({ name, options, isMulti = false }) {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const handleChange = (e, v) => {
    helpers.setValue(v);
  };
  return (
    <FormBorder>
      <Autocomplete
        name={name}
        component={Field}
        options={options?.options || []}
        disablePortal
        multiple={isMulti}
        value={field.value}
        placeholder={`${options?.placeholder}...`}
        popupIcon={<ArrowDropDownIcon />}
        forcePopupIcon={true}
        onChange={handleChange}
        id="custom-select-field"
        sx={{
          height: "30px",
        }}
        renderInput={(params) => {
          // eslint-disable-next-line no-unused-vars
          const { InputProps, InputLabelProps, ...rest } = params;
          return (
            <InputBase
              {...InputProps}
              {...rest}
              label=""
              placeholder={options?.placeholder}
            />
          );
        }}
      ></Autocomplete>
    </FormBorder>
  );
}

export { CustomSelectField };
