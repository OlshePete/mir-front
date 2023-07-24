import { Button, Collapse, Grid, Stack } from "@mui/material";
import { Form, Formik } from "formik";
import { useState } from "react";
import CustomDateFieldsStack from "../tools/CustomDateFieldsStack";
import { CustomInputField } from "../tools/CustomInputField";
import { CustomSelectField } from "../tools/CustomSelectField";
import { WithLabel } from "../tools/WithLabel";

const FORM_DATASET = {
  query: {
    label: "расширенный поиск",
    placeholder: "Введите название события",
    grid: 12,
    type: "input",
    options:null,
  },
  //   title: {
  //     label: "название",
  //     placeholder:"",
  //     grid:12,
  //     type:'input'
//   options:null,
  // },
  categorySeq: {
    label: "категория события",
    placeholder: "Выберите категорию события",
    grid: 6,
    type: "select",
    options:[
        { label: 'Публичное', id: 1 },
        { label: 'Непубличное', id: 2 },
        { label: 'Издание', id: 3 },
    ],
  },
  formatSeq: {
    label: "формат события",
    placeholder: "Выберите формат события",
    grid: 6,
    type: "select",
    options:[
        { label: 'Антология / сборник', id: 1 },
        { label: 'Биеналле', id: 2 },
        { label: 'Видеопрограмма', id: 3 },
    ],
  },
  date: {
    label: "дата",
    placeholder: "",
    grid: 6,
    type: "date",
    options:null,
  },
//   dateStart: {
//     label: "дата с",
//     placeholder: "",
//     grid: 3,
//     type: "date",
// options:null,
//   },
//   dateEnd: {
//     label: "дата по",
//     placeholder: "",
//     grid: 3,
//     type: "date",
// options:null,
//   },
  citySeq: {
    label: "населенный пункт",
    placeholder: "Выберите город",
    grid: 6,
    type: "input",
    options:null,
  },
  organizerTitle: {
    label: "организации",
    placeholder: "Введите организацию",
    grid: 6,
    type: "input",
    options:null,
  },
  placeTitle: {
    label: "место проведения",
    placeholder: "Введите место проведения",
    grid: 6,
    type: "input",
    options:null,
  },
  membersTitle: {
    label: "участники",
    placeholder: "Введите ФИО участника или название группы участников",
    grid: 12,
    type: "input",
    options:null,
  },
  tagsTitle: {
    label: "ключевые слова",
    placeholder: "Введите ключевые слова",
    grid: 12,
    type: "multiselect",
    options:[
        { label: 'Публичное', id: 1 },
        { label: 'Непубличное', id: 2 },
        { label: 'Издание', id: 3 },
    ],
  },
};
const initialValues = {
  query: "",
  categorySeq: "",
  formatSeq: "",
  dateStart: "", //06.07.2023
  dateEnd: "", //06.07.2023
  citySeq: "",
  organizerTitle: "",
  placeTitle: "",
  membersTitle: "",
  tagsTitle: [],
};

const _getValidComponent = (options, key )=>{
    const {type} = options
    switch (type) {
        case "input":
            return <CustomInputField name={key} options={options} />
        case "select":
            return <CustomSelectField name={key} options={options} />
        case "multiselect":
            return <CustomSelectField name={key} options={options} isMulti={true} />
        case "date":
            return <CustomDateFieldsStack name={key} options={options}/>
                
        default:
            return <h4>{type}</h4>
    }
}
function SearchEventForm() {
  const [expandAdvanced, setExpandAdvanced] = useState(false);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      <Form>
        <Grid container rowGap={'9px'} sx={{
            paddingTop: {xs:'50px',lg:0},
        }}>
          <Grid item xs={12}>
            <WithLabel label={expandAdvanced? FORM_DATASET["query"].label:""}>
                <CustomInputField name="query" options={FORM_DATASET["query"]}/>
            </WithLabel>
          </Grid>
          <Grid item xs={12}>
            <Collapse
              in={expandAdvanced}
              timeout="auto"
              unmountOnExit
              sx={{ width: "100%" }}
            >
              <Grid container  columnSpacing={'20px'} rowGap={'9px'}>
                {Object.keys(FORM_DATASET)
                  .filter((f) => f !== "query")
                  .map((fieldKey, index) => {
                    const options = FORM_DATASET[fieldKey];
                    return (
                      <Grid item xs={options.grid} key={fieldKey + index}>
                        <WithLabel label={options.label}>
                        {_getValidComponent(options,fieldKey)}
                        </WithLabel>
                      </Grid>
                    );
                  })}
              </Grid>
            </Collapse>
          </Grid>
          <Grid item xs={12}>
            <Stack direction={"row"} justifyContent={'flex-end'} gap={'7px'}>
              <Button
                disableRipple={true}
                onClick={() => setExpandAdvanced((p) => !p)}
                variant="search_expand"
                className={expandAdvanced?"active":""}
              >
                {!expandAdvanced ? "Расширенный поиск" : "закрыть"}
              </Button>
              <Button type="submit" variant="search_submit">
                ИСКАТЬ
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default SearchEventForm;
