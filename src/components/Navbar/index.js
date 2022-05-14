import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'

import { navbarItems } from './consts/index'
import { theme } from '../../styles/theme'

const drawerWidth = 260

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }

  const drawer = (
    <div>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => {
            navigate('/')
          }}
        >
          <ListItemIcon
            sx={{ color: theme.palette.primary.main, marginLeft: '20px' }}
          >
            {<HomeIcon />}
          </ListItemIcon>
          <ListItemText
            sx={{
              '& span': {
                marginLeft: '-10px',
                fontSize: '16px'
              }
            }}
            primary="Inicio"
          />
        </ListItem>
      </List>
      <Divider />
      <List>
        {navbarItems.map((item, index) => (
          <ListItem
            button
            key={item.id}
            onClick={() => {
              navigate(item.route)
            }}
          >
            <ListItemIcon
              sx={{ color: theme.palette.primary.main, marginLeft: '20px' }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                '& span': {
                  marginLeft: '-10px',
                  fontSize: '16px'
                }
              }}
              primary={item.label}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Tu-Destino
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { sm: 0 },
          height: '100vh'
        }}
      >
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: '100vh',
              position: 'static'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Navbar
