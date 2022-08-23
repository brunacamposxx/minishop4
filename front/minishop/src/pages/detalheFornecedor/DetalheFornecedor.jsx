import React, { useEffect, useState } from 'react';
import styles from './DetalheFornecedor.module.css';
import CreateIcon from '@mui/icons-material/Create';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import PersonIcon from '@mui/icons-material/Person';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PlaceIcon from '@mui/icons-material/Place';
import { Link, useParams } from 'react-router-dom';
import { getFornecedorPorId } from '../../services/minishopApiServices';
import { maskCnpj, maskPhone } from '../../utils/masks';

function DetalheFornecedor() {
  const { id } = useParams();

  const [fornecedor, setFornecedor] = useState({});
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getFornecedorPorId(id).then((data) => {
      setFornecedor(data.objetoRetorno);
      setProdutos(data.objetoRetorno.listaDeProdutos);
    });
  }, [id]);

  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Fornecedor</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.parteum}>
          <h1>{fornecedor.nome}</h1>
          <div className={styles.colunaum}>
            <h5>
              <PersonIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              {fornecedor.contato ? fornecedor.contato : 'Não informado'}
            </h5>
            <h5>
              <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              {fornecedor.telefone
                ? maskPhone(fornecedor.telefone)
                : 'Não informado'}
            </h5>
          </div>
          <div className={styles.colunadois}>
            <h5>
              <CorporateFareIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              {fornecedor.cnpj ? maskCnpj(fornecedor.cnpj) : 'Não informado'}
            </h5>
            <h5>
              <AlternateEmailIcon
                style={{ fontSize: '28', color: '#b07ca3' }}
              />
              {fornecedor.email ? fornecedor.email : 'Não informado'}
            </h5>
          </div>
          <div className={styles.colunatres}>
            <h5>
              <PlaceIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              {fornecedor.cidade ? fornecedor.cidade : 'Não informado'}{' '}
              <span>-</span>
              {fornecedor.estado ? fornecedor.estado : 'Não informado'}
            </h5>
          </div>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.partedois}>
          <h4 className={styles.total}>Produtos</h4>
          <div className={styles.quadro}>
            <p className={styles.produto}>
              {produtos.map((produto) => (
                <span key={produto.id}>
                  {' '}
                  {produto.productName} <br />
                </span>
              ))}
            </p>
          </div>
        </div>
        <Link
          to={`/editarFornecedores/${id}`}
          style={{ textDecoration: 'none' }}
        >
          <Button
            color="inherit"
            style={{ marginLeft: 'auto', marginTop: 'auto' }}
          >
            <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
          </Button>
        </Link>
      </div>
      <Link to="/fornecedores" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheFornecedor;
