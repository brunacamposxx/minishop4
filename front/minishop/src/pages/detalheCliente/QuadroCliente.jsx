import React from 'react';
import styles from './QuadroCliente.module.css';

// import CreateIcon from '@mui/icons-material/Create';
// import PhoneIcon from '@mui/icons-material/Phone';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import SubjectIcon from '@mui/icons-material/Subject';
// import { Button } from '@mui/material';
// import CustomBotao from '../../components/customBotao/CustomBotao';
// import { Link, useParams } from 'react-router-dom';
// import {
//   getClientePorId,
//   getProdutoPorId,
// } from '../../services/minishopApiServices';

function QuadroCliente(props) {
  //   const { id } = useParams();
  //   const listaIdProdutos = [];
  //   const listaNomes = [];

  //   const [cliente, setCliente] = useState({});
  //   const [pedidos, setPedidos] = useState({});

  //   useEffect(() => {
  //     getClientePorId(id).then((data) => {
  //       setCliente(data.objetoRetorno);
  //       setPedidos(data.objetoRetorno.customerOrders);
  //     });
  //   }, [id]);

  //   for (let i = 0; i < pedidos.length; i++) {
  //     listaIdProdutos.push(pedidos[i].id);
  //   }

  //   async function pegaNomes() {
  //     for (let n = 0; n < listaIdProdutos.length; n++) {
  //       await getProdutoPorId(listaIdProdutos[n]).then((data) => {
  //         listaNomes.push(data.objetoRetorno.productName);
  //       });
  //     }
  //   }

  //   pegaNomes();

  return (
    <div>
      <div className={styles.linhaquadro}>
        <span className={styles.produto}>{props.nome}</span>
        <span className={styles.produto}>{props.preco}</span>
      </div>
      {/* <div className={styles.linhaquadro}>
        <span className={styles.total}>Total</span>
        <span className={styles.total}>189,35</span>
      </div> */}
    </div>
  );
}

export default QuadroCliente;
