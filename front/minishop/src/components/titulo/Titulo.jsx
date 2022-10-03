import styles from './Titulo.module.css';

const Titulo = ({ titulo }) => {
  return (
    <header>
      <h1 className={styles.titulo}>{titulo}</h1>
      <div className={styles.divider}></div>
    </header>
  );
};

export default Titulo;
