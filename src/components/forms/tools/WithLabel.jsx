import { Stack, Typography } from "@mui/material";

function WithLabel({ label, children }) {

  return (
    <Stack gap={'8px'}>
      <Typography variant="form_label" component={'label'}>{label && label.length>0 ?`${label[0]}`.toUpperCase()+`${label}`.slice(1):""}</Typography>
      {children}
    </Stack>
  );
}

export { WithLabel };
