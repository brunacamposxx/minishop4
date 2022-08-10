import React from 'react';
import './CadastrarFornecedor.css';
import Botao from '../botao/Botao';
import TextFields from '../textFields/TextFields';
import Titulo from '../titulo/Titulo';
import MaskedInput from '../MaskedInput/MaskedInput';
import { validaEmail, validaCnpj } from '../../service/regex';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const CadastrarFornecedor = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contato, setContato] = useState('');

  const [estado, setEstado] = React.useState('');
  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputCnpjErr, setInputCnpjErr] = useState(false);

  const validate = () => {
    console.log('email', email);
    console.log('nome', nome);
    console.log('contato', contato);
    console.log('cidade', cidade);
    console.log('telefone', telefone);
    console.log('cnpj', cnpj);

    if (!validaEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }
    if (!validaCnpj.test(cnpj)) {
      setInputCnpjErr(true);
    } else {
      setInputCnpjErr(false);
    }
  };
  const estadosBrasileiros = [
    { nome: 'AC' },
    { nome: 'AL' },
    { nome: 'AP' },
    { nome: 'AM' },
    { nome: 'BA' },
    { nome: 'CE' },
    { nome: 'DF' },
    { nome: 'ES' },
    { nome: 'GO' },
    { nome: 'MA' },
    { nome: 'MT' },
    { nome: 'MG' },
    { nome: 'MS' },
    { nome: 'PA' },
    { nome: 'PB' },
    { nome: 'PR' },
    { nome: 'PE' },
    { nome: 'PI' },
    { nome: 'RJ' },
    { nome: 'RN' },
    { nome: 'RS' },
    { nome: 'RO' },
    { nome: 'RR' },
    { nome: 'SC' },
    { nome: 'SP' },
    { nome: 'SE' },
    { nome: 'TO' },
  ];

  return (
    <div className="container-fornecedor">
      <Titulo titulo="Cadastrar Fornecedor" />
      <div className="container-form">
        <form className="cadastrar-fornecedor">
          <aside>
            <div className="flex">
              <TextFields
                label="Nome"
                required={true}
                value={nome}
                aoAlterado={(valor) => setNome(valor)}
              />
            </div>
            <div className="flex">
              <TextFields
                label="Contato"
                required={true}
                value={contato}
                aoAlterado={(valor) => setContato(valor)}
              />
            </div>

            <div className="flex">
              <TextFields
                label="Cidade"
                required={true}
                value={cidade}
                aoAlterado={(valor) => setCidade(valor)}
                largura={20}
              />

              <TextField
                id="outlined-select-currency"
                select
                label="UF"
                size="small"
                value={estado}
                onChange={handleChange}
                required={true}
              >
                {estadosBrasileiros.map((option) => (
                  <MenuItem key={option.nome} value={option.nome}>
                    {option.nome}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </aside>
          <main>
            <TextFields
              required={true}
              label="E-mail"
              placeholder="email@email.com"
              type="email"
              value={email}
              aoAlterado={(valor) => setEmail(valor)}
            />

            <div className="flex">
              <MaskedInput
                mascara="(99)99999-9999"
                required={true}
                label="Telefone"
                largura={20}
                aoAlterado={(valor) =>
                  setTelefone(
                    valor.replace('-', '').replace('(', '').replace(')', ''),
                  )
                }
                value={telefone}
              />
            </div>

            <div className="flex">
              <MaskedInput
                mascara="99.999.999/9999-99"
                placeholder="CNPJ"
                required={true}
                label="CNPJ"
                largura={20}
                value={cnpj}
                aoAlterado={(valor) =>
                  setCnpj(
                    valor.replace('-', '').replaceAll('.', '').replace('/', ''),
                  )
                }
              />
            </div>
          </main>
        </form>

        <div className="alinhamento-direita">
          <Botao onClick={validate} cor="#B17DA4" label="Salvar" />
          <Botao cor="#94b456" label="Voltar" />
        </div>
        {inputEmailErr && (
          <Alert severity="error">Por favor digite um e-mail válido!</Alert>
        )}
        {inputCnpjErr && (
          <Alert severity="error">Por favor digite um CNPJ válido!</Alert>
        )}
      </div>
    </div>
  );
};

export default CadastrarFornecedor;
