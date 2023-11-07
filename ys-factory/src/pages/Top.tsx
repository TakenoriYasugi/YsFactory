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
                <Box sx={{p: 2}}>
                    <Typography variant='h6' className='heading'>プロフィール</Typography>
                    <Typography sx={{p: 1}}>
                        1994年10月2日生まれ。1女の父。<br/>中学生時代に始めた<Link to='https://www.tonyu.jp/'>TonyuSystem</Link>によるゲーム制作を通じてプログラミングの楽しさを知る。<br/>
                        現在はクラウド系SEの傍ら、フリーランスエンジニアへの転身に向けて活動中。
                    </Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6' className='heading'>略歴</Typography>
                    <Typography sx={{p: 1}}>
                        2019年　高知大学卒業<br/>
                        同年　株式会社日立社会情報サービス入社<br/>
                        2022年　株式会社フレクトへ転職<br/>
                    </Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6' className='heading'>スキルセット</Typography>
                    <Typography sx={{p: 1}}>
                        <li>基本情報技術者</li>
                        <li>応用情報技術者</li>
                        <li>情報処理安全確保支援士</li>
                        <li>AWSクラウドプラクティショナー</li>
                        <li>MuleSoft Certified Developer Level 1</li>
                    </Typography>
                </Box>

                <Box sx={{p: 2}}>
                    <Typography variant='h6' className='heading'>Git Hub</Typography>
                    <Typography sx={{p: 1}}>
                        <Link to="https://github.com/TakenoriYasugi/">TakenoriYasugi</Link>
                    </Typography>
                </Box>
           </Box>

        </>
    );
}

export default Top;