import { createTheme } from "@mui/material";
import { pink, common } from "@mui/material/colors";
const appTheme = createTheme({
  palette: {
    primary: {
      main: common.white,
    },
    secondary: pink,
  },
  typography: {
    fontFamily: [
      "'PT Mono', monospace",
      // '"Helvetica Neue"',
      // 'Arial',
      // 'sans-serif',
    ].join(","),
    event_preview_title:{
      fontFamily: "'Open Sans', sans-serif",
      fontWeight:700,
      fontSize:24,
    },
    event_preview_caption:{
      // paddingBottom:'15px',
      // fontFamily: "Open Sans', sans-serif",
    },
    // nav_button: {
    //   fontFamily: "'Noto Serif', serif",
    //   lineHeight: "100%",
    //   fontSize: "16px",
    //   textTransform: "uppercase",
    //   fontWeight: 500,
    //   opacity: 1,
    //   letterSpacing: "0.12rem",
    //   minWidth: "160px",
    //   maxWidth: "160px",
    //   cursor: "pointer",
    //   color: fontColor,
    //   "&:visited": {
    //     color: "inherit",
    //   },
    //   "&:hover": {
    //     color: color,
    //     textDecoration: "underline",
    //   },
    //   "&.footer_nav": {
    //     minWidth: "280px",
    //     maxWidth: "280px",
    //   },
    //   "&.active_nav": {
    //     color: color,
    //   },
    // },
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: "rgb(0, 0, 0)",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            textTransform: "uppercase",
            fontSize: "16px",
            color: "#000",
            width:'fit-content',
            padding: 0,
          },
        },
        {
          props: { variant: "search_expand" },
          style: {
            textTransform: "none",
            fontSize: "17px",
            padding: 0,
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0)",
              textShadow: "0 0 0.65px #333, 0 0 0.65px #333",
              transition: "text-shadow .25s ease",
            },
            "&.active": {
              textTransform: "uppercase",
              background: "#807e7e",
              color: "white",
              padding: "0 10px",
              letterSpacing: "1px",
            },
          },
        },
        {
          props: { variant: "search_nav" },
          style: {
            textTransform: "uppercase",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#C1C1C1",
            padding: 0,
            "&::after,&::before": {
              content: "''",
              position: "absolute",
              width: "8px",
              height: "1.5px",
              backgroundColor: "#C1C1C1",
              right: "-13px",
            },
            "&::after": {
              transform: "rotate(300deg)",
              bottom: "7px",
            },
            "&::before": {
              transform: "rotate(60deg)",
              bottom: "12px",
            },
            "&:hover": {
              color: "#000",
              backgroundColor: "rgba(0,0,0,0)",
              "&::before,::after": {
                backgroundColor:'#000'
              },

            },
          },
        },
        {
          props: { variant: "search_submit" },
          style: {
            // background:'linear-gradient(95.69deg, #0B48EE -11.12%, #E500D4 95.43%)',
            fontSize: "17px",
            padding: 0,
            color: "white",
            width: "100px",
            letterSpacing: "1px",
            position: "relative",
            zIndex: 1,
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              // opacity:0,
              background:
                "linear-gradient(95.69deg, #023ad6 -11.12%, #c000b3 95.43%)",
            },
            "&.hover::before": {
              opacity: 1,
            },
            "&:hover": {
              backgroundColor: "rgba(128,126,126,.3)",
            },
          },
        },
      ],
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        // The props to change the default for.
        // disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          // backgroundColor: 'red',
          minWidth: "100%",
          // maxHeight: '30px',
          // color:'rgba(0, 0, 0, 0.87)',
          // padding:0,
          // backgroundColor:'lavenderblush',
          // minWidth:'300px',
          // minHeight:'10vh',
          // "&.text":{
          //   color:'rgba(0, 0, 0, 0.87)',
          //   padding:0,
          //   backgroundColor:'red',
          //   minWidth:'auto',
          //   minHeight:'auto',
          // },
        },
        popper: {
          overflow: "hidden",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        // fullWidth:true,
        inputProps: {
          sx: {
            // border:'2px solid blue',
            // maxHeight: '30px',
          },
        },
        // The props to change the default for.
        // disableRipple: true, // No more ripple, on the whole application 💣!
      },
      styleOverrides: {
        root: {
          // backgroundColor: 'green',
          // minWidth: '100%',
          // maxHeight: '30px',
          // color:'rgba(0, 0, 0, 0.87)',
          // padding:0,
          // backgroundColor:'lavenderblush',
          // minWidth:'300px',
          // minHeight:'10vh',
          // "&.text":{
          //   color:'rgba(0, 0, 0, 0.87)',
          //   padding:0,
          //   backgroundColor:'red',
          //   minWidth:'auto',
          //   minHeight:'auto',
          // },
        },
        paper: {
          // maxHeight:'30px'
        },
        input: {
          "&::-webkit-calendar-picker-indicator": {
            display: "none",
          },
          overflow: "hidden",
        },
      },
    },
  },
});
export { appTheme };
