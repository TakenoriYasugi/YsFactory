/***
 * TopPage
 * サイトのトップページに表示するコンテンツ
 */

import { Container } from '@mui/material';
import mainLogo from '../images/mainlogo.webp' ;
import '../css/TopPageStyle.css';

const TopPage = () => {

    return (
        <>
            <Container>
                <img className='logo' src={mainLogo} />
                <h1 className='headerText'>Y's Factoryへようこそ</h1>
            </Container>

           
        </>
    );
}

export default TopPage;