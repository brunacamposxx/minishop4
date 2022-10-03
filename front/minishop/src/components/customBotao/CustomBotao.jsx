import Button from '@mui/material/Button';
import './CustomBotao.css';

const CustomBotao = ({ cor, onClick, label, disabled }) => {
  const corBotao = cor;
  return (
    <div className="custom-botao">
      <Button
        disabled={disabled}
        style={{
          backgroundColor: corBotao,
          fontFamily: 'Pompiere',
          textTransform: 'capitalize',
        }}
        variant="contained"
        size="large"
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomBotao;
