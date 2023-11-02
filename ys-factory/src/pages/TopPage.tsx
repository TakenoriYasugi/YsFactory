/***
 * TopPage
 * サイトのトップページに表示するコンテンツ
 */

import { Container } from '@mui/material';
import headerImage from '../images/header.webp' ;
import '../css/TopPageStyle.css';

const TopPage = () => {

    return (
        <>
                <img className='logo' src={headerImage} />
           
        </>
    );
}

export default TopPage;