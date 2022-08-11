import React from 'react';
import styles from './DetalheFornecedor.module.css';
import CreateIcon from '@mui/icons-material/Create';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Button } from '@mui/material';
import CustomBotao from '../../components/customBotao/CustomBotao';
import PersonIcon from '@mui/icons-material/Person';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from 'react-router-dom';

function DetalheFornecedor() {
  return (
    <div className={styles.pagina}>
      <div className={styles.cabecalho}>
        <h2>Detalhe do Fornecedor</h2>
        <div className={styles.linha}></div>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.parteum}>
          <h1>Exotic Liquids</h1>
          <div className={styles.colunaum}>
            <h5>
              <PersonIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              Charlotte Cooper
            </h5>
            <h5>
              <PhoneIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              (37)998187879
            </h5>
          </div>
          <div className={styles.colunadois}>
            <h5>
              <CorporateFareIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              52.733.987/4444-02
            </h5>
            <h5>
              <AlternateEmailIcon
                style={{ fontSize: '28', color: '#b07ca3' }}
              />
              maria.anders@gmail.com
            </h5>
          </div>
          <div className={styles.colunatres}>
            <h5>
              <PlaceIcon style={{ fontSize: '28', color: '#b07ca3' }} />
              Uberlândia - MG
            </h5>
          </div>
        </div>
        <div className={styles.linha}></div>
        <div className={styles.partedois}>
          <h4 className={styles.total}>Produtos</h4>
          <div className={styles.quadro}>
            <span className={styles.produto}>Chai Latte</span>
            <span className={styles.produto}>Cajun Seasoning</span>
          </div>
        </div>
        <Button
          color="inherit"
          style={{ marginLeft: 'auto', marginTop: 'auto' }}
        >
          <CreateIcon style={{ fontSize: '40', color: '#b07ca3' }} />
        </Button>
      </div>
      <Link to="/fornecedores" style={{ textDecoration: 'none' }}>
        <CustomBotao cor="#b07ca3" label="Voltar" />
      </Link>
    </div>
  );
}

export default DetalheFornecedor;
