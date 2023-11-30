import { Link, Typography } from "@mui/material";
import DrawerAppBar from "../uiparts/DrawerAppBar";

const Contact = () => {
    return (
        <>
            <DrawerAppBar title="Contact"/>
            <Typography>Y's Factoryへのお問い合わせは以下のGoogleフォームにてお願いいたします。</Typography>
            <Link href='https://docs.google.com/forms/d/e/1FAIpQLSezBeFh3aswH4NfrH_vsBu3B7o_AZjLFVjG9AMiyeo9HGAjbg/viewform?usp=sf_link'>Y's Factory お問い合わせフォーム</Link>
        </>
    );
}

export default Contact;