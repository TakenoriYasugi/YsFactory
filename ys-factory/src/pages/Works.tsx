import { Card, CardContent, CardHeader, Container, Grid, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DrawerAppBar from "../uiparts/DrawerAppBar";
import { Box } from "@mui/system";
import echonorLogo from "../images/echonor/echonor_logo.png";
import Introduction from "../uiparts/Introduction";
import ImageSwiper from "../uiparts/ImageSwiper";
import "../css/WorksStyle.css";
import { ReactNode } from "react";
import styled from "@emotion/styled";

const CardContainer = ({children}: {children: ReactNode}) => (
    <Card sx={{m: 3, minWidth: "250px", minHeight: "200px", maxWidth: '400px', maxHeight: "400px"}}>
        <CardContent>
            {children}
        </CardContent>
    </Card>
)


const Works = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const gridXs = isMobile ? 12 : 3;
    
    const Header = styled(Typography)`
        font-weight: bold; /* 太字 */
        color: #333; /* 文字色をダークグレーに設定 */
        margin-top: 10px; /* 上のマージンを10pxに設定 */
        margin-bottom: 10px; /* 下のマージンを10pxに設定 */
        font-size: 1.2em; /* フォントサイズを1emに設定 */
    `
    const contents = [
        <>
            <Header variant="h6">匿名性保証</Header>
            <Typography>
                あなたの名前や身元は、EchoNorでは完全に秘密にされます。
            </Typography>
        </>,
        <>
            <Header variant="h6">ユーザ間の非接続性</Header>
            <Typography>ユーザ同士を直接繋げる機能はなく、フォローやダイレクトメッセージも存在しません。</Typography>
        </>,
        <>
            <Header variant="h6">プライベートな体験</Header>
            <Typography>
                EchoNorでのあなたの全ての行動履歴は、他のユーザーには知られません。
            </Typography>
        </>,
        <>
            <Header variant="h6">タイムラインの均等性</Header>
            <Typography>すべてのユーザーの投稿は同じタイムライン上に表示され、特定のユーザーが目立つことはありません。</Typography>
        </>
    ]

    return (
        <>
            <DrawerAppBar title="Works"/>
            
            <Box className="background">
                <Box className="title-container">
                    <Typography variant="h4" className="subtitle">繋がらないSNS</Typography>
                    <Typography variant="h3" className="main-title">EchoNor</Typography>
                </Box>
            </Box>


            <Typography variant="body1" sx={{m: 3}} textAlign={'center'} >
                EchoNor（エコノア）は「繋がらないSNS」というコンセプトの下開発中の、匿名性を重視したSNSです。<br/>
                必要以上に繋がることのない、プライベートな体験を提供します。
            </Typography>
            
            <Container sx={{maxWidth: "500px", maxHeight: "auto"}}>
                <ImageSwiper/>
            </Container>

            <Grid container id="grid-contents" sx={{display:'flex', justifyContent: 'center', alignContent: "center"}}>
                {contents.map((content, index) => (
                    <Grid item xs={gridXs} sx={{m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                        <CardContainer key={index}>
                            {content}
                        </CardContainer>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="body1" sx={{m: 3}} textAlign={'center'}>
                EchoNorは現在開発中のため、限られたユーザーに対してのみ公開しております。
                リリースまでの間、当サイトにて開発状況を公開して行く予定ですので、ご興味のある方はぜひご覧ください。
            </Typography>

            <Container sx={{
                mt: 10,
                display: 'flex',
                justifyContent: "center",
                maxWidth: "50%",
                maxHeight: "50%",
            }}>
                <Stack spacing={2} direction="column">
                    <Typography sx={{textAlign: "center"}}>サンプル：EchoNorのイントロダクション</Typography>
                    <Introduction/>
                </Stack>
            </Container>

            <Box sx={{m: 3}} textAlign={'center'}>
                <Link href="https://github.com/TakenoriYasugi/echonor">GitHub EchoNor</Link>
            </Box>

        </>
    );
}

export default Works;