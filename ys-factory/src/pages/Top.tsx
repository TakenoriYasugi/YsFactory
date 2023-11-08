/***
 * Top
 * サイトのトップページに表示するコンテンツ
 */

import { Box, Card, CardActionArea, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import headerImage from '../images/header_working.png' ;
import '../css/TopStyle.css';
import { Link } from 'react-router-dom';
import DrawerAppBar from '../uiparts/DrawerAppBar';

const Top = () => {

    return (
        <>
            <DrawerAppBar/>
            <Container>
                <img className='logo' src={headerImage} />
            </Container>
           
            <Box component='main' sx={{p: 3}}>
                <Box sx={{p: 2}}>
                    <Typography variant='h5'>Y's Factoryへようこそ</Typography>
                    <Typography>本サイトは安木岳規が運営するポートフォリオサイトです。</Typography>
                </Box>

                {/* PC表示 */}
                <Grid container display={{sm: 'flex', xs: 'none'}}>
                    <Grid item xs={6} sx={{p: 4}}>
                        <Card sx={{p: 2}}>
                            <CardActionArea href="/about">
                                <CardContent>
                                    <Typography fontSize={'medium'}>
                                        About
                                    </Typography>
                                    <Divider/>
                                    <Typography fontSize={'small'}>
                                        自己紹介
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={6} sx={{p: 4}}>
                        <Card sx={{p: 2}}>
                            <CardActionArea href='/works'>
                                <CardContent>
                                    <Typography fontSize={'medium'}>
                                        Works
                                    </Typography>
                                    <Divider/>
                                    <Typography fontSize={'small'}>
                                        開発したプロダクトの紹介
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                {/* モバイル表示 */}
                <Container sx={{display: {sm: "none", xs: "block"}}}>

                    <Card sx={{m: 1}}>
                        <CardActionArea href="/about">
                            <CardContent>
                                <Typography fontSize={'medium'}>
                                    About
                                </Typography>
                                <Divider/>
                                <Typography fontSize={'small'}>
                                    自己紹介
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{m: 1}}>
                        <CardActionArea href='/works'>
                            <CardContent>
                                <Typography fontSize={'medium'}>
                                    Works
                                </Typography>
                                <Divider/>
                                <Typography fontSize={'small'}>
                                    開発したプロダクトの紹介
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Container>
           </Box>

        </>
    );
}

export default Top;