import Button from '@mui/material/Button';

const Botao = ({ cor, onClick, label }) => {
  const corBotao = cor;
  return (
    <Button
      style={{ backgroundColor: corBotao, marginRight: 30, borderRadius: 10 }}
      variant="contained"
      size="large"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default Botao;
