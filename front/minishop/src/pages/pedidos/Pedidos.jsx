import React, { useEffect, useState } from 'react';
import styles from './Pedidos.module.css';
import { getPedidosDeTodosClientes } from '../../services/minishopApiServices';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import {
  // Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { maskDate } from '../../utils/masks';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  typography: {
    fontFamily: 'Pompiere',
  },
});

function Pedidos() {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [pagina, setPagina] = useState(0);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  useEffect(() => {
    getPedidosDeTodosClientes().then((data) => {
      setListaPedidos((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.pagina}>
        <div className={styles.cabecalho}>
          <h2>Pedidos</h2>
          <div className={styles.linha}></div>
        </div>
        <div className={styles.divPai}>
          <div className={styles.pedidosPage}>
            <TableContainer className="table">
              <Table
                sx={{ minWidth: 650, fontFamily: 'Pompiere' }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead
                  sx={{
                    background: '#b07ca3',
                    ' th ': { color: 'white', fontWeight: 'bold' },
                  }}
                >
                  <TableRow>
                    <TableCell
                      sx={{ padding: '15px', fontSize: '40px' }}
                      align="center"
                    >
                      Cliente
                    </TableCell>
                    <TableCell sx={{ fontSize: '40px' }} align="center">
                      Qnt. Produtos
                    </TableCell>
                    <TableCell sx={{ fontSize: '40px' }} align="center">
                      Data
                    </TableCell>
                    <TableCell sx={{ fontSize: '40px' }} align="center">
                      Total
                    </TableCell>
                    <TableCell sx={{ fontSize: '40px' }} align="center">
                      Ação
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaPedidos.map((pedido) => (
                    <TableRow
                      key={pedido.id}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      sx={{ ' td,  th': { border: '1px solid #b07ca3' } }}
                    >
                      <TableCell
                        sx={{ fontSize: '40px' }}
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {pedido.firstName + ' ' + pedido.lastName}
                      </TableCell>
                      <TableCell sx={{ fontSize: '40px' }} align="center">
                        {pedido.totalQuantity}
                      </TableCell>
                      <TableCell sx={{ fontSize: '40px' }} align="center">
                        {/* {client.orderDate} */}
                        {new Date(
                          pedido.orderDate ? maskDate(pedido.orderDate) : '',
                        ).toLocaleDateString('pt-br')}
                      </TableCell>
                      <TableCell sx={{ fontSize: '40px' }} align="center">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(pedido.totalAmount)}
                      </TableCell>
                      <TableCell sx={{ fontSize: '40px' }} align="center">
                        <IconButton
                          className="account-icon"
                          edge="end"
                          color="inherit"
                          aria-label="account"
                        >
                          <Link
                            to={`/pedidos/${pedido.id}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <RemoveRedEyeOutlinedIcon
                              style={{ color: '#b07ca3', fontSize: '35px' }}
                            />
                          </Link>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <p className={styles.carregar} onClick={() => proximaPagina()}>
          Carregar mais...
        </p>
      </div>
    </ThemeProvider>
  );
}

export default Pedidos;
