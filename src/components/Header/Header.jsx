import { AppBar, Slide, Typography, useScrollTrigger } from "@mui/material";
import { Box, Container, height, margin } from "@mui/system";
import { useState } from "react";
import { headerText, parentBox } from "./HeaderStyle";
const Header = () => {
    function HideOnScroll(props)
    {
        const {children} = props;
        const trigger = useScrollTrigger();
        return (<Slide appear={false} direction={'down'} in={!trigger}>{children}</Slide>)
    }
    return (
        <div>
        <HideOnScroll>
            <AppBar sx={{boxShadow:'none'}}>
                <Box component='div' sx={parentBox}>
                    <Typography sx={headerText}>Chai Bolo</Typography>
                </Box>
            </AppBar>
        </HideOnScroll>
        </div>
    );
}

export default Header