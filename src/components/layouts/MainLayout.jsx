import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import { AppFooter } from "../footer/AppFooter"
import { AppHeader } from "../header/AppHeader"

function MainLayout() {
  return (
    <div>
        <AppHeader/>
        <Box minHeight={'600px'}>

        <Outlet/>
        </Box>
        <AppFooter/>

    </div>
  )
}

export {MainLayout}