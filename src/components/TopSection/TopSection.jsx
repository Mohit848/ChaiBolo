import { Grid, Typography } from '@mui/material'
import { Box, Container, margin } from '@mui/system'
import { ChaiBoloTypo, ParentDivStyle, taglineStyle } from './TopSectionStyle'
import React from 'react'
import Tea from '../../Assets/Tea.png'
const TopSection = () => {
  return (
    <div>
        <Box component='div' textAlign={'center'} sx={{
            display:'flex',
            flexDirection : {
                md : 'row'
            },
            flexWrap:{
                xs:'wrap',
                md:'nowrap'
            },
            alignItems:'center',
            justifyContent:'center'
            }}>
            <Box padding={'7%'} component="img" src={Tea} sx={{height : 400}}/>
            <Typography sx = {ChaiBoloTypo}>Chai Bolo
                <Typography sx={taglineStyle}>_Feel well, sip well_</Typography>  
            </Typography>
            
        </Box>
    </div>
  )
}

export default TopSection