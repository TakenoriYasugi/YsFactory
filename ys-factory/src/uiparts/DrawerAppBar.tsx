import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Icon, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

const drawerWidth = 240;

type NavItem = {
  url: string,
  text: string
}

const navItems: NavItem[] = [
  {url: "/", text: "Top"},
  {url: "/about", text: "About"},
  {url: "/works",text: "Works"},
  {url: "/contact", text: "Contact"}
  ];

const DrawerAppBar = ({title}: {title: string}) => {
  // Drawer（ハンバーガーメニュー）が開いているかどうかの状態を保持
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // スマホで閲覧した際に表示するハンバーガーメニュー


  const navigate = useNavigate();

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }} onClick={() => navigate(item.url)}  >
                <ListItemText primary={item.text}/>
              </ListItemButton>
           </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // 以降のコンポーネントはsx props内のdisplayスタイルを用いてモバイル表示とPC表示を切り分けている。
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sm(画面幅600px以上)の場合にdisplayをnone(非表示)にする。 = モバイルでのみ表示
            // 以降省略
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'white'}}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: '#fff' }} onClick={() => navigate(item.url)}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

export default DrawerAppBar;