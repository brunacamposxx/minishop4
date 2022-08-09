import './Titulo.css';

const Titulo = ({ titulo }) => {
  return (
    <>
      <h1 className="titulo">{titulo}</h1>
      <div className="divider"></div>
    </>
  );
};

export default Titulo;
