/***
 * Top
 * サイトのトップページに表示するコンテンツ
 */

import { Box, Container, Typography } from '@mui/material';
import headerImage from '../images/header.webp' ;
import '../css/TopStyle.css';
import { Link } from 'react-router-dom';
import DrawerAppBar from '../uiparts/DrawerAppBar';

const Top = () => {

    return (
        <>
            <DrawerAppBar/>
            <img className='logo' src={headerImage} />
           
           <Box component='main' sx={{p: 3}}>
                <Box sx={{p: 2}}>
                    <Typography variant='h5'>Y's Factoryへようこそ</Typography>
                    <Typography>本サイトは安木岳規が運営するポートフォリオサイトです。</Typography>
                </Box>
           </Box>

        </>
    );
}

export default Top;