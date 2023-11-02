/***
 * TopPage
 * サイトのトップページに表示するコンテンツ
 */

import { Box, Container, Link, Typography } from '@mui/material';
import headerImage from '../images/header.webp' ;
import '../css/TopPageStyle.css';

const TopPage = () => {

    return (
        <>
            <img className='logo' src={headerImage} />
           
           <Box component='main' sx={{p: 3}}>
                <Box sx={{p: 2}}>
                    <Typography variant='h5'>Y's Factoryへようこそ</Typography>
                    <Typography>本サイトは安木岳規が運営するポートフォリオサイトです。</Typography>
                </Box>
                <Box sx={{p: 2}}>
                    <Typography variant='h6'>プロフィール</Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6'>略歴</Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6'>スキルセット</Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6'>Git Hub</Typography>
                    <Link href="https://github.com/TakenoriYasugi/">TakenoriYasugi</Link>
                </Box>
           </Box>

        </>
    );
}

export default TopPage;