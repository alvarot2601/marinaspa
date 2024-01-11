import { AppBar } from "@mui/material";
import { React, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Toolbar, Typography, Menu, Box, Button, Tooltip, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from "../assets/images/logo-marinaspa-c2.jpg";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const NavBar = (props) => {
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const subpages = [['Programas Faciales', 'programas-faciales'], ['Estética General', 'estetica-general'], ['Silueta Corporal', 'silueta-corporal'], ['Bienestar y relajación', 'bienestar-y-relajacion'], ['Depilación y Fotodepilación', 'depilacion-y-fotodepilacion']];
  const pages = [['INICIO', ''], ['TRATAMIENTOS', ''], ['CONTACTO', 'contacto']];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openTreatments, setOpenTreatments] = useState(false);

  const handleClickTreatments = () => {
    setOpenTreatments(!openTreatments);
  };


  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };




  var prueba = "home";
  //const [change, setChange] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const [isNavbarBig, setIsNavbarBig] = useState(false);
  let lastCoord = 0;
  const thresold = 100;


  /*useEffect(() => {
    if (window.location.href.search('contacto') !== -1) {
      setActiveLink('contacto');
    }
    else if (window.location.href.search('tratamientos') !== -1 || window.location.href.search('programas-faciales') !== -1 || window.location.href.search('estetica-general') !== -1 || window.location.href.search('silueta-corporal') !== -1 || window.location.href.search('bienestar') !== -1 || window.location.href.search('depilacion') !== -1) {
      setActiveLink('tratamientos');
    }
    else {
      setActiveLink('home');
    }
  });*/
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > lastCoord) {
        setIsNavbarBig(true);
        lastCoord = window.scrollY;
      } else {
        setIsNavbarBig(false);
        lastCoord = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <AppBar position="static" sx={{ backgroundColor: "white",padding:'5px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between md:justify-center gap-6">
          <img src={Logo} className="max-h-[70px] hidden md:flex" />

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              edge="start"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={Logo} className="max-h-[60px] flex md:hidden" />
          <Box className="hidden md:flex">
            {pages.map((page) => {
              if (page[0].toLowerCase() === 'tratamientos') {
                return (
                  <div>
                    <Button
                      key={page}
                      size="large"
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      sx={{ my: 2, display: 'flex' }}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      {page[0]}
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'bottom',

                      }}
                      transformOrigin={{
                        vertical: 'top',

                      }}
                    >
                      {
                        subpages.map(subpage => (
                          <MenuItem onClick={handleClose}>
                            <NavLink to={`/${subpage[1]}`}>
                              {subpage[0]}
                            </NavLink>
                          </MenuItem>
                        ))
                      }
                    </Menu>
                  </div>
                )
              } else {
                return (

                  <NavLink
                    className='MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeLarge MuiButton-textSizeLarge MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeLarge MuiButton-textSizeLarge css-8htxp0-MuiButtonBase-root-MuiButton-root'
                    to={`/${page[1]}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: 'flex' }}
                  >
                    {page[0]}
                  </NavLink>
                )
              }
            })}
          </Box>
          <Drawer
            anchor="top"
            open={openDrawer}
            onClose={toggleDrawer(false)}
            sx={{width:500}}
          >
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <div style={{ width: "100%" }}>
                {pages.map((page) => {
                  if (page[0].toLowerCase() === 'tratamientos') {
                    return (
                      <>
                        <ListItemButton onClick={handleClickTreatments}>
                          <span
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'flex' }}
                          >
                            {page[0]}
                          </span>
                          {openTreatments ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openTreatments} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {
                              subpages.map(subpage => (
                                <ListItemButton>
                                  <NavLink to={`/${subpage[1]}`} className="pl-1 text-primaryDark">{subpage[0]}</NavLink>
                                </ListItemButton>
                              ))
                            }
                          </List>
                        </Collapse>
                      </>
                    )
                  } else {
                    return (
                      <ListItemButton>
                        <NavLink
                          to={`/${page[1]}`}
                          key={page}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, display: 'flex' }}
                        >
                          {page[0]}
                        </NavLink>
                      </ListItemButton>
                    )
                  }
                })}

              </div>
            </List>
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
