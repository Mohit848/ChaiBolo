import { Place } from '@mui/icons-material'
import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import React from 'react'

const Footer = () => {
  return (
    <div style={{
        backgroundColor:'#FEE37B',
    }}>
    <Box component={'div'} sx={{
        textAlign:'center',
        padding:'5%'
    }}>
        <Link sx={{padding:'0 5%'}} href='#' underline='none'><FacebookIcon fontSize='large'/></Link>
        <Link sx={{padding:'0 5%'}} href='https://instagram.com/chai.bolo95?igshid=YmMyMTA2M2Y=' underline='none' color={'#e95950'}><InstagramIcon fontSize='large'/></Link>
        <Link sx={{padding:'0 5%'}} href='https://twitter.com/chaibolo95?s=21&t=4H7nksCPqx0MWp_VPfvDVg' underline='none' color={'#00acee'}><TwitterIcon fontSize='large'/></Link>
        <Typography pt={'35px'} variant='body2'>Made with ❤️ by ©ChaiBolo</Typography>
    </Box>
    </div>
  )
}

export default Footer