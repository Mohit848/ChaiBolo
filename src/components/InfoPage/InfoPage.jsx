import { Link, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react'
import Code from '../../Assets/Code.gif'
import Typewritter from 'typewriter-effect';
const InfoPage = () => {
  return (
    <div style={{
        backgroundColor:'#FFA095',
        textAlign:'center',
        padding:'7% 0'
    }}>
        <Box component='img' src={Code} sx={{height : {xs:300, md:400}, borderRadius:'50%', pb:'2%'}}/>
        <Typography pt='3%' variant='h4' fontWeight={700} color='#FD331B' fontFamily={'Montserrat'} sx={{textShadow:'3px 3px #F8F193',}}>Hold on!! 😅</Typography>
        <Typography pt='10px'color='#FFD8CE' variant='body1' fontFamily={'Montserrat'}>We are currently building our webpage!!</Typography>
        <Typography pt='10px'color='#FFD8CE' variant='h5' fontWeight={700} fontFamily={'Montserrat'}>Meanwhile!! You can write your
        <span style={{color:'#FD331B', textShadow:'3px 3px #F8F193'}}><Typewritter
            style={{padding:'10%'}}
            options={{
                strings : ["Thoughts!", "Suggestions!", "Ideas!", "Feedback!"],
                autoStart : true,
                loop : true,
            }}
        /></span>
         to us🤩</Typography>
        <Typography pt='10px'color='#FFD8CE' variant='h6' fontWeight={500} fontFamily={'Montserrat'}>via</Typography>
        <Link href='https://wa.me/917982090611'>
            <WhatsAppIcon sx={{
            marginTop:'10px',
            color:'#128C7E', 
            fontSize:'4rem'
            }}/>
        </Link>
    </div>
  )
}

export default InfoPage