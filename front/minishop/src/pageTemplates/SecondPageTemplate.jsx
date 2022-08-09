import { Drawer, Box, IconButton } from '@mui/material';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import './SecondPageTemplate.css';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export function SecondPageTemplate(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#b07ca3' }}>
          <Toolbar>
            <div className="barra">
              <div className="ladoesquerdo">
                <IconButton
                  onClick={() => setIsDrawerOpen(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <img src="/logo-branca.png" className="logo" alt="logo" />
                <div className="divisor">|</div>
                <Typography variant="h5" noWrap component="div">
                  VitaHealth
                </Typography>
              </div>
              <div className="ladodireito">
                <Button color="inherit" className="botao">
                  <PersonIcon />
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" role="presentation" textAlign="center">
          <List>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton>
                  <img src="/home.png" className="icone" alt="home" />
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/produtos" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton>
                  <img src="/produtos.png" className="icone" alt="produtos" />
                  <ListItemText primary="Produtos" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/clientes" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton>
                  <img src="/clientes.png" className="icone" alt="clientes" />
                  <ListItemText primary="Clientes" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/pedidos" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton>
                  <img src="/pedidos.png" className="icone" alt="pedidos" />
                  <ListItemText primary="Pedidos" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/fornecedores" style={{ textDecoration: 'none' }}>
              <ListItem>
                <ListItemButton>
                  <img
                    src="/fornecedores.png"
                    className="icone"
                    alt="fornecedores"
                  />
                  <ListItemText primary="Fornecedores" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <main>
        <div className="ConteudoPrincipalAQUI">{props.children}</div>
      </main>
    </>
  );
}

export default SecondPageTemplate;
