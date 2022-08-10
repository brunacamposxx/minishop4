import './Titulo.css';

const Titulo = ({ titulo }) => {
  return (
    <header>
      <h1 className="titulo">{titulo}</h1>
      <div className="divider"></div>
    </header>
  );
};

export default Titulo;
