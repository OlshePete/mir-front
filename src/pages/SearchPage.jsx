import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import EventPostPreviewBlock from "../components/blocks/EventPostPreviewBlock";
import SearchNavBlock from "../components/blocks/SearchNavBlock";
import SearchEventForm from "../components/forms/SearchEventForm/SearchEventForm";

const PageContainer = styled(Box)`
    position: relative;
    margin-top:20px;
`
function SearchPage() {
  const helmetText =
    "Поиск :: Открытая база данных междисциплинарного искусства в России";
  const events = useSelector((state)=>state.mir.events)

  return (
    <PageContainer>
      <Helmet>
        <title>{helmetText}</title>
      </Helmet>
      <Container maxWidth="md">
        <SearchNavBlock/>
        <SearchEventForm />
        {
          events && <EventPostPreviewBlock event={events[0]}/>
        }
      </Container>
    </PageContainer>
  );
}

export default SearchPage;
