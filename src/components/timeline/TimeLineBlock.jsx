import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {dataset} from "../../assets/mock/events";

const temporary = {
   "events": [
    {
      "media": {
        "url": "//www.flickr.com/photos/tm_10001/2310475988/",
      },
      "start_date": {
        "month": 3,
        "day": 16,
        "year": 2009
      },
      "end_date": {
          "month": 3,
          "day": 29,
          "year": 2009
      },
      "text": {
        "headline": "Научно-популярный фестиваль Science Art Fest",
        "text": "<p style=\"margin-bottom: 0px\">Фестиваль</p><p style=\"margin-bottom: 30px\">Москва</p>"
     }
    },
    {
        "start_date": {
            "month": 7,
            "day": 6,
            "year": 2014
        },
        "end_date": {
            "month": 9,
            "day": 3,
            "year": 2014
        },
        "text": {
            "headline": "Шуршание ангелов",
            "text": "<p style=\"margin-bottom: 0px\">Выставка</p><p style=\"margin-bottom: 30px\">Москва</p>"
        },
        "media": {
            "url": "http://mir.eusp.org/files/models/events/1000/28/caf7aac79eb664e9f438f51721aebe02.jpg"
        }
    },
    {
        "start_date": {
            "month": 3,
            "day": 16,
            "year": 2009
        },
        "end_date": {
            "month": 3,
            "day": 29,
            "year": 2009
        },
        "text": {
            "headline": "Наука как предчувствие",
            "text": "<p style=\"margin-bottom: 0px\">Выставка</p><p style=\"margin-bottom: 30px\">Москва</p>"
        },
        "media": {
            "url": "files/models/events/1000/31/d0f5be108461fce114b9cc2b9f142413.jpg"
        }
    },
    {
        "start_date": {
            "month": 1,
            "day": null,
            "year": 1982
        },
        "end_date": {
            "month": 1,
            "day": null,
            "year": 1982
        },
        "text": {
            "headline": "Слайд-поэма \"В тени Кадриорга\"",
            "text": "<p style=\"margin-bottom: 0px\">Перформанс</p><p style=\"margin-bottom: 30px\">Пермь</p>"
        },
        "media": {
            "url": "files/models/events/1000/33/ea398eeefbe7899ae22b0f2d4c477ebd.jpg"
        }
    },
    {
        "start_date": {
            "month": 4,
            "day": 19,
            "year": 2016
        },
        "end_date": {
            "month": 5,
            "day": 19,
            "year": 2016
        },
        "text": {
            "headline": "Творческая лаборатория Цифровой мир",
            "text": "<p style=\"margin-bottom: 0px\">Фестиваль</p><p style=\"margin-bottom: 30px\">Пермь</p>"
        },
        "media": {
            "url": "files/models/events/1000/37/ae55ea4e261d5f2807dda74c3b08fdf1.jpg"
        }
    },]
  }
function TimeLineBlock() {
// let timeline
const tlRef = useRef(null)
let data = dataset
const [data_tl, setData_tl] = useState(dataset)
const TimelineConstuctor = window.TL.Timeline
let timeline_data = {'events':[...data.events.map((e,i)=>{
  
  const media = e?.media ? {media:{...e.media}}:{}
  return{
  unique_id:i+1,
  ...e,
  ...media,
  text:{...e.text},
  start_date:{...e.start_date},
  end_date:{...e.end_date},
}})]}
// timeline_data.events.push({test:'test'})

const additionalOptions = {
  font:'pt',
  height: 300,
  default_bg_color: {r:255, g:255, b:255},
  timenav_height: 300,
  timenav_position:'top',
  events:timeline_data.events,
}
const [timeline, setTimeline] = useState(null)

useEffect(() => {
 if (tlRef.current)setTimeline(new TimelineConstuctor('timeline-embed',timeline_data, additionalOptions))
}, [tlRef])
  // useEffect(() => {
  //   console.log('csdsds', document.getElementById('timeline-embed'))
  //   setTimeline()
  // }, [])
    if (!data) return <></>
// const timeline_config = {
//   width: "100%",
//   height: "600",
//   source: data,
//   embed_id: "timeline-embed", //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
//   start_at_end: false, //OPTIONAL START AT LATEST DATE
//   start_at_slide: "4", //OPTIONAL START AT SPECIFIC SLIDE
//   start_zoom_adjust: "3", //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
//   hash_bookmark: true, //OPTIONAL LOCATION BAR HASHES
//   font: "Bevan-PotanoSans", //OPTIONAL FONT
//   debug: true, //OPTIONAL DEBUG TO CONSOLE
//   lang: "fr", //OPTIONAL LANGUAGE
//   maptype: "watercolor", //OPTIONAL MAP STYLE
// };
// const timeline = 
// console.log('timeline',timeline)

// timeline.setOptions({height: 600,})
  return <Box ref={tlRef} id='timeline-embed' sx={{
      minHeight:"600px",
    flexGrow:1
    }}>
  </Box>;
}

export default TimeLineBlock;
