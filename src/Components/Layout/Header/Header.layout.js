import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../../assets/img/white.png'


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'About', 'Help', 'Team'];

  const drawerContent = (
    <List sx={{width:'100%',marginTop:'50px'}}>
      {menuItems.map((item) => (
        <ListItem   key={item}>
          <ListItemText sx={{color:'white',fontWeight:'bold',fontSize:'20px' }} primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div style={{backgroundColor:'#333366'}}>
    <div className="animated-block">
      <p>.</p>
      <AppBar  sx={{ backgroundColor: '#333366',width:'100%',margin:'auto' }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <img style={{width:'150px' , height:'100px'}} src={Logo}/>
          </div>
          <Hidden smDown>
            {menuItems.map((item) => (
              <div key={item} style={{ margin: '0 10px',color:'white',fontWeight:'bold',fontSize:'20px' }}>
                {item}
              </div>
            ))}
          </Hidden>

          <Hidden mdUp>
            <IconButton  onClick={toggleDrawer}>
              <MenuIcon style={{color:'white',fontSize:'40px' }} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Drawer zIndex='2'  color='#333366' anchor="left"   open={drawerOpen} onClose={toggleDrawer}>
      <div
          style={{ width: '300px', padding: '16px',backgroundColor:'#333366' }}
        >
           
            {drawerContent}
        </div>
        <p>.</p>
      </Drawer>
       
    </div>
    </div>
  );
};

export default Header;
