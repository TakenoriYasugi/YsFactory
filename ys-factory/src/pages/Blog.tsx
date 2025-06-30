/***
 * Blog
 * 技術ブログページ
 */

import { Box, Container, Typography } from '@mui/material';
import DrawerAppBar from '../uiparts/DrawerAppBar';

const Blog = () => {
    return (
        <>
            <DrawerAppBar title="Blog"/>
            <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: 4}}>
                <Typography variant="h4" gutterBottom>
                    技術ブログ
                </Typography>
                <Typography variant="body1">
                    ここでは開発に関する技術記事やノウハウを発信していきます。
                </Typography>
            </Container>
        </>
    );
}

export default Blog; 