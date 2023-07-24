import styled from '@emotion/styled'
import { Box, InputBase } from '@mui/material'
// import { DatePicker } from '@mui/x-date-pickers'
import { Field, useField } from 'formik'

const FieldsContainer = styled(Box)`
    display: flex;
    & > * {
        flex-grow:1;
    }

`
const FormBorder = styled(Box)`
    border:1px solid rgb(185, 181, 181);
    border-radius:3px;
    padding:0 11px;
    display:flex;
    & > * {
        flex-grow:1;
    }
`

function CustomDateFieldsStack() {
   const date_start = useField("dateStart");
   const date_end = useField("dateEnd");
console.log('dateStart', date_start)
console.log('dateEnd', date_end)
const handleChange = (event) =>{
    event.target.id==='dateStart' ? date_start[2].setValue(event.target.value): date_end[2].setValue(event.target.value)
console.log(event.target.value)
}
  return (
    <FieldsContainer>
        {/* <DatePicker label="Basic date picker" /> */}
        <FormBorder>

        <Field
            as={InputBase}
            type="date"
            fullWidth={false}
            name="dateStart"            
            id="dateStart"
            onChange={handleChange}
        />
        </FormBorder>
        <FormBorder>

        <Field
            as={InputBase}
            type="date"
            fullWidth={false}
            name="dateEnd"            
            id="dateEnd"
            onChange={handleChange}
        />
        </FormBorder>

    </FieldsContainer>
  )
}

export default CustomDateFieldsStack