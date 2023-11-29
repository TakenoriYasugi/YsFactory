import { Container, Stack, Typography } from "@mui/material";
import DrawerAppBar from "../uiparts/DrawerAppBar";
import { Box } from "@mui/system";
import echonorLogo from "../images/echonor/echonor_logo.png";
import Introduction from "../uiparts/Introduction";
import ImageSwiper from "../uiparts/ImageSwiper";

const Works = () => {
    return (
        <>
            <DrawerAppBar title="Works"/>
            <Typography variant="h5" sx={{textAlign: 'center', m: 5}}>繋がらないSNS EchoNor</Typography>

            <Typography variant="body1" sx={{m: 3}}>
                EchoNor（エコノア）は、「繋がらないSNS」というコンセプトの下開発している、匿名性を重視したSNSです。
                現在は限られたユーザーに公開しており、フィードバックをもとに改善を続けています。
                2024年中の一般公開を目指しています。
            </Typography>

            <Container sx={{maxWidth: "500px", maxHeight: "auto"}}>
                <ImageSwiper/>
            </Container>


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
            <Box sx={{m: 5}}>
            </Box>
            <Box sx={{m: 2}}>
            </Box>

        </>
    );
}

export default Works;