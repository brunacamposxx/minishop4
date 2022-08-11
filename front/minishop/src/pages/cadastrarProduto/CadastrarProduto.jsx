import './CadastrarProduto.css';
import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomTextField from '../../components/customTextField/CustomTextField';
import Titulo from '../../components/titulo/Titulo';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CustomSwitch from '../../components/customSwitch/CustomSwitch';

const CadastrarProduto = () => {
  const [imagem, setImagem] = useState('');
  const [preco, setPreco] = useState('');
  const [pacote, setPacote] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [nome, setNome] = useState('');
  const [checked, setChecked] = useState(false);

  const fornecedores = [{ nome: 'Arroz' }, { nome: 'Feijão' }];

  const handleClick = () => {
    console.log(checked);
  };
  return (
    <div className="container-produto">
      <Titulo titulo="Cadastrar Produto" />
      <div className="container-form-produto">
        <form className="cadastrar-produto">
          <aside>
            <div className="flex">
              <CustomTextField
                label="Nome"
                required={true}
                value={nome}
                largura={30}
                aoAlterado={(valor) => setNome(valor)}
              />
            </div>
            <div className="flex">
              <CustomTextField
                label="Imagem"
                required={true}
                value={imagem}
                largura={30}
                aoAlterado={(valor) => setImagem(valor)}
              />
            </div>
          </aside>
          <main>
            <div className="flex">
              <CustomTextField
                required={true}
                label="Preço"
                placeholder="R$ 0,00"
                type="number"
                value={preco}
                largura={20}
                aoAlterado={(valor) => setPreco(valor)}
              />
            </div>
            <div className="flex">
              <CustomTextField
                label="Pacote"
                largura={20}
                value={pacote}
                aoAlterado={(valor) => setPacote(valor)}
              />
            </div>

            <div className="flex">
              <TextField
                style={{ width: 160, marginTop: 15 }}
                id="outlined-select-currency"
                select
                label="Fornecedores"
                size="small"
                value={fornecedor}
                onChange={(valor) => setFornecedor(valor.target.value)}
                required={true}
              >
                {fornecedores.map((option) => (
                  <MenuItem key={option.nome} value={option.nome}>
                    {option.nome}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="flex">
              <CustomSwitch
                checked={checked}
                aoAlterado={(valor) => setChecked(valor)}
                label={checked ? 'Ativado' : 'Desativado'}
              />
            </div>
          </main>
        </form>

        <div className="alinhamento-direita">
          <CustomBotao onClick={handleClick} cor="#B17DA4" label="Salvar" />
          <CustomBotao cor="#94b456" label="Voltar" />
        </div>
      </div>
    </div>
  );
};

export default CadastrarProduto;
