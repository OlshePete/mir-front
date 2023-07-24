import styled from "@emotion/styled"
import { Box, CardMedia, Container, Typography } from "@mui/material"
import fondLogo from "../../assets/fond_logo.png";
import fbIcon from '../../assets/footer_link_fb.png';
import instIcon from '../../assets/footer_link_inst.png';
const FooterContentContainer = styled(Container)`
    padding-top:46px;
    padding-bottom:84px;
    & > * {
        font-size:12px
    }
`
const FooterContent = styled(Box)`
    height:60px;
    display:flex;
    justify-content:space-between;
`
const PartnerBlock = styled(Box)`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:10px;
    padding:0 22px 25px
`
const CopyrightLinkBlock = styled(Box)`
    display:flex;
    align-items:center;
    padding-bottom:25px;
    padding-right:20px;
    gap:20px
`
const ShareLinksContainer = styled(Box)`
    display:flex;
    align-items:center;
    gap:12px;
`
const TextLinkLabel = styled(Typography)`
    text-decoration:underline;
    font-size:12px;
`
const FondLogo = ()=>{
    return <Box><CardMedia
        component="img"
        height="57"
        width="167"
        image={fondLogo}
        alt="eusp logo"
    /></Box>
}
const ShareLinks = ()=>{
    return <ShareLinksContainer><CardMedia
    component="img"
    height="20"
    image={fbIcon}
    alt="inst logo"
    /><CardMedia
    component="img"
    height="20"
    image={instIcon}
    alt="fb logo"
    /></ShareLinksContainer>
}
function AppFooter() {
    return (
      <Box component={'footer'} borderTop={'1px solid rgb(216, 219, 212)'}>
        <FooterContentContainer maxWidth="xl">
            <FooterContent>
                <CopyrightLinkBlock>
                © 2021. MIRopendatabase.
                <ShareLinks/>
                </CopyrightLinkBlock>
                <Box>
                Увидели неточность?<br/>
Сообщите нам об этом: mir.opendb@gmail.com
                </Box>
                <PartnerBlock>
                    <Box>
                    Разработка Базы Данных:
                    </Box>
                    <TextLinkLabel>
                    ИНТЕРНЕТ-БИЗНЕС-СИСТЕМЫ
                    </TextLinkLabel>
                </PartnerBlock>
                <PartnerBlock>
                    <Box>
                    При участии:
                    </Box>
                    <TextLinkLabel >
                    ТЕХНО-АРТ-ЦЕНТРА
                    </TextLinkLabel>
                </PartnerBlock>
                <FondLogo/>
            </FooterContent>
        </FooterContentContainer>
      </Box>
    )
  }
  
  export {AppFooter}