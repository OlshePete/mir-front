import { AppBar, Box, Button, CardMedia, Container, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectLogo from "../../assets/mir_logo.png";
import projectLogoMobile from "../../assets/mir_mobile_logo.png";
import ownerLogo from "../../assets/eu_logo.png";
import ownerLogoMobile from "../../assets/eu_mobile_logo.png";

const StyledAppBar = styled(AppBar)`
    flex-grow: 1;
    padding-top:32px;

`
const StyledToolbar = styled(Toolbar)((props)=>{
    return `
    display:flex;
    justify-content: space-between;
    gap:50px;
    &.MuiToolbar-root {
        min-height:${props.isMobile?'60px':'40px'};
    }
`
})
const StyledNavBlock = styled(Box)`
    flex-grow: 1;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const ProjectLogo = ({isMobile})=>{
    console.log(`Project`,isMobile)
    return <Box><CardMedia
        component="img"
        height={isMobile?'60':'40'}
        image={isMobile?projectLogoMobile:projectLogo}
        alt=" mir project logo"
        sx={{
            minWidth: isMobile?'120px':'202px'
        }}
    /></Box>
}
const OwnerLogo = ({isMobile})=>{
    console.log(`Owner`,isMobile)

    return <Box><CardMedia
        component="img"
        height={isMobile?'60':'40'}
        image={isMobile?ownerLogoMobile:ownerLogo}
        alt="eusp logo"
        sx={{
            minWidth: isMobile?'59px':'140px'
        }}
    /></Box>
}
const InternalizationLink = ()=>{
    return <Stack direction={'row'} gap={'20px'} sx={{
        display: {xs:'none',md:'flex'},
        alignItems:'center',
        "& >*":{
            p:0,
            m:0,
            minWidth:'20px'
        }
    }}>
        <Button variant='text'disableRipple={true}>RU</Button>
        <Button variant='text' disableRipple={true} disabled>EN</Button>
    </Stack>
}
const NavLinks = ()=>{
    return <Stack direction={'row'} gap={'30px'} px={'15px'}sx={{
        display: {xs:'none',md:'flex'},
    }}>
    <Link to={"/"}>ТАЙМЛАЙН</Link>
    <Link to={"/search"}>ПОИСК</Link>
    </Stack>
}
function AppHeader() {
    const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <StyledAppBar position="static" elevation={0}>
        <Container maxWidth="xl">

      <StyledToolbar disableGutters isMobile={isMobile}>
        <ProjectLogo isMobile={isMobile}/>
        <StyledNavBlock>
            <NavLinks/>
            <InternalizationLink/>
        </StyledNavBlock>
        <OwnerLogo isMobile={isMobile}/>
      </StyledToolbar>
      </Container>

    </StyledAppBar>
  );
}

export { AppHeader };
