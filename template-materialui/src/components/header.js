import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { blue, purple } from '@mui/material/colors';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="sticky" 
        sx={{
          background: `linear-gradient(45deg, ${blue[500]}, ${purple[500]})`, // Gradiente de cor
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Sombras sutis
          transition: 'background-color 0.3s ease', // Efeito de transição
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>  {/* Ajuste o conteúdo entre os itens */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, // Efeito de hover
            }}
          >
            {/* Adicione um ícone aqui, como por exemplo: */}
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography 
            variant="h4" 
            component="div" 
            sx={{
              fontWeight: 'bold',  // Deixa o título mais ousado
              color: 'white',      // Cor do texto
              letterSpacing: 1,    // Distância entre as letras
              textTransform: 'uppercase',  // Transforma o texto para maiúsculas
            }}
          >
            Meus Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
