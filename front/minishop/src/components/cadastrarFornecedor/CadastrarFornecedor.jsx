import React from 'react';
import './CadastrarFornecedor.css';
import CustomBotao from '../customBotao/CustomBotao';
import CustomTextField from '../customTextField/CustomTextField';
import Titulo from '../titulo/Titulo';
import MaskedInput from '../MaskedInput/MaskedInput';
import { validaEmail, validaCnpj } from '../../service/regex';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { estadosBrasileiros } from '../../constants/fornecedor.constants';

const CadastrarFornecedor = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contato, setContato] = useState('');
  const [estado, setEstado] = useState('');

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputCnpjErr, setInputCnpjErr] = useState(false);

  const validate = () => {
    console.log('email', email);
    console.log('nome', nome);
    console.log('contato', contato);
    console.log('cidade', cidade);
    console.log('telefone', telefone);
    console.log('cnpj', cnpj);
    console.log('teste', inputEmailErr);

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

  return (
    <div className="container-fornecedor">
      <Titulo titulo="Cadastrar Fornecedor" />
      <div className="container-form-fornecedor">
        <form className="cadastrar-fornecedor">
          <aside>
            <div className="flex-fornecedor">
              <CustomTextField
                label="Nome"
                required={true}
                value={nome}
                largura={30}
                aoAlterado={(valor) => setNome(valor)}
              />
            </div>
            <div className="flex-fornecedor">
              <CustomTextField
                largura={30}
                label="Contato"
                required={true}
                value={contato}
                aoAlterado={(valor) => setContato(valor)}
              />
            </div>

            <div className="flex-fornecedor teste">
              <CustomTextField
                label="Cidade"
                largura={20}
                required={true}
                value={cidade}
                aoAlterado={(valor) => setCidade(valor)}
              />

              <div className="alinhamento-uf">
                <TextField
                  id="outlined-select-currency"
                  select
                  style={{
                    width: 100,
                    marginTop: 19,
                  }}
                  label="UF"
                  size="small"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required={true}
                >
                  {estadosBrasileiros.map((option) => (
                    <MenuItem key={option.nome} value={option.nome}>
                      {option.nome}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </aside>
          <main>
            <CustomTextField
              largura={30}
              required={true}
              label="E-mail"
              placeholder="email@email.com"
              type="email"
              value={email}
              aoAlterado={(valor) => setEmail(valor)}
            />

            <div className="flex-fornecedor">
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

            <div className="flex-fornecedor">
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
          <CustomBotao onClick={validate} cor="#B17DA4" label="Salvar" />
          <CustomBotao cor="#94b456" label="Voltar" />
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
