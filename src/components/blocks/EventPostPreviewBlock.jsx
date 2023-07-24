import styled from '@emotion/styled'
import { Box, CardMedia, Typography, useMediaQuery } from '@mui/material'
import RawHTML from './RawHTML';

const PreviewContainer = styled(Box)((props)=>`
    width:100%;
    min-height:204px;
    display: flex;
    flex-wrap: ${props.isMobile?'wrap':'nowrap'};
`)
function _generateDate(s,e) {
   const formatter =  new Intl.DateTimeFormat("ru", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      const start_date = formatter.format(new Date(`${s.year}-${s.month}-${s.day}`));
      const end_date = formatter.format(new Date(`${e.year}-${e.month}-${e.day}`));
    return `${start_date} - ${end_date}`
}
function EventPostPreviewBlock({event}) {
    const isMobile = useMediaQuery('(max-width:600px)');

    console.log(event)
  return (
    <PreviewContainer isMobile={isMobile}>
        <Box sx={{
            width:isMobile ? '100%' : '309px',
            minHeight:'204px',
            bgcolor:'blue'
        }}>
            <CardMedia
                component="img"
                height="204"
                image={"http://mir.eusp.org"+event.media.url}
                alt="Paella dish"
            />
        </Box>
        <Box sx={{
            flexGrow:1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '14px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                bgcolor:'green',
                "& > *> p":{
                    margin:0,
                    marginBottom:'0 !important',
                }
            }}>
            <Typography variant="event_preview_caption" pb={'16px'}>{_generateDate(event.start_date,event.end_date)}</Typography>
            <Typography variant="event_preview_title" pb={'35px'}>{event.text.headline}</Typography>
            <Typography variant="event_preview_caption" component={'div'}><RawHTML dirtyHTML={event.text.text}/></Typography>
            </Box>
        </Box>
    </PreviewContainer>
  )
}

export default EventPostPreviewBlock