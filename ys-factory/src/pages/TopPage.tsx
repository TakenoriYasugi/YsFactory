/***
 * TopPage
 * サイトのトップページに表示するコンテンツ
 */

import { Container } from '@mui/material';
import mainLogo from '../images/mainlogo.webp' 

const TopPage = () => {

    // ロゴを枠内に収めるためのスタイル
    const logoStyle = {
        maxWidth: "100%",
        height: "auto",
        display: "block"
    }

    return (
        <>
            <Container>
                <img src={mainLogo} style={logoStyle}/>
            </Container>
        </>
    );
}

export default TopPage;