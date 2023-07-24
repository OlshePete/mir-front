import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import TimeLineBlock from "../components/timeline/TimeLineBlock";
import { fetchEventsFromAPI } from "../reducers/globalSlice";

function StartPage() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const events = useSelector((state) => state.mir.events);
  const helmetText =
    "Главная :: Открытая база данных междисциплинарного искусства в России";
  useEffect(() => {
    events ? setData(events) : dispatch(fetchEventsFromAPI());
  }, [events, dispatch]);
  console.log("data", data);
  return (
    <Box sx={{
    }}>
      <Helmet>
        <title>{helmetText}</title>
      </Helmet>
      {data && <TimeLineBlock data={{ events: data }} />}
    </Box>
  );
}

export default StartPage;
