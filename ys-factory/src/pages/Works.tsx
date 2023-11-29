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
            <Container sx={{maxWidth: "500px", maxHeight: "auto"}}>
                <ImageSwiper/>
            </Container>

            <Typography variant="h5">繋がらないSNS EchoNor</Typography>

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
                <Typography variant="body1">
                    EchoNor（エコノア）は、「繋がらないSNS」というコンセプトの下開発している、匿名性を重視したSNSです。
                </Typography>
            </Box>

        </>
    );
}

export default Works;