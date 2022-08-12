import React from 'react';
import './CadastrarFornecedor.css';
import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomTextField from '../../components/customTextField/CustomTextField';
import Titulo from '../../components/titulo/Titulo';
import CustomMaskedInput from '../../components/customMaskedInput/CustomMaskedInput';
import { useState } from 'react';
import { validaEmail } from '../../service/validadores/regex';
import { validarCnpj } from '../../service/validadores/validarCnpj';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { estadosBrasileiros } from '../../constants/fornecedor.constants';
import { unmaskCnpj } from '../../service/unmask/cnpj';
import { unmaskTelefone } from '../../service/unmask/telefone';
import { useNavigate } from 'react-router-dom';

import {
  postFornecedor,
  putFornecedorPorId,
} from '../../service/requisicoesApi/fornecedorApiService';

const CadastrarFornecedor = ({ valorInicial }) => {
  const navigate = useNavigate();
  const valoresIniciais = valorInicial;

  const [novoFornecedor, setNovoFornecedor] = useState({
    nome: valoresIniciais?.nome ?? '',
    cidade: valoresIniciais?.cidade ?? '',
    estado: valoresIniciais?.estado ?? '',
    email: valoresIniciais?.email ?? '',
    telefone: valoresIniciais?.telefone ?? '',
    contato: valoresIniciais?.contato ?? '',
    cnpj: valoresIniciais?.cnpj ?? '',
  });

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputCnpjErr, setInputCnpjErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valoresIniciais?.id) {
      putFornecedorPorId(valoresIniciais.id, novoFornecedor);
    } else {
      if (!validaEmail.test(novoFornecedor.email)) {
        setInputEmailErr(true);
      } else {
        setInputEmailErr(false);
      }
      if (!validarCnpj(novoFornecedor.cnpj)) {
        setInputCnpjErr(true);
      } else {
        setInputCnpjErr(false);
      }
      postFornecedor(novoFornecedor);
      console.log(novoFornecedor);
    }
  };

  return (
    <div className="container-fornecedor">
      {valoresIniciais?.id ? (
        <Titulo titulo="Editar Fornecedor" />
      ) : (
        <Titulo titulo="Cadastrar Fornecedor" />
      )}
      <div className="container-form-fornecedor">
        <form className="cadastrar-fornecedor">
          <aside>
            <div className="flex-fornecedor">
              <CustomTextField
                label="Nome"
                required={true}
                value={novoFornecedor.nome}
                largura={30}
                aoAlterado={(valor) =>
                  setNovoFornecedor({
                    ...novoFornecedor,
                    nome: valor,
                  })
                }
              />
            </div>
            <div className="flex-fornecedor">
              <CustomTextField
                largura={30}
                label="Contato"
                required={true}
                value={novoFornecedor.contato}
                aoAlterado={(valor) =>
                  setNovoFornecedor({
                    ...novoFornecedor,
                    contato: valor,
                  })
                }
              />
            </div>

            <div className="flex-fornecedor teste">
              <CustomTextField
                label="Cidade"
                largura={20}
                required={true}
                value={novoFornecedor.cidade}
                aoAlterado={(valor) =>
                  setNovoFornecedor({
                    ...novoFornecedor,
                    cidade: valor,
                  })
                }
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
                  value={novoFornecedor.estado}
                  onChange={(valor) =>
                    setNovoFornecedor({
                      ...novoFornecedor,
                      estado: valor.target.value,
                    })
                  }
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
              value={novoFornecedor.email}
              aoAlterado={(valor) =>
                setNovoFornecedor({
                  ...novoFornecedor,
                  email: valor,
                })
              }
            />

            <div className="flex-fornecedor">
              <CustomMaskedInput
                mascara="(99)99999-9999"
                required={true}
                label="Telefone"
                largura={20}
                aoAlterado={(valor) =>
                  setNovoFornecedor({
                    ...novoFornecedor,
                    telefone: unmaskTelefone(valor),
                  })
                }
                value={novoFornecedor.telefone}
              />
            </div>

            <div className="flex-fornecedor">
              <CustomMaskedInput
                mascara="99.999.999/9999-99"
                placeholder="CNPJ"
                required={true}
                label="CNPJ"
                largura={20}
                value={novoFornecedor.cnpj}
                aoAlterado={(valor) =>
                  setNovoFornecedor({
                    ...novoFornecedor,
                    cnpj: unmaskCnpj(valor),
                  })
                }
              />
            </div>
          </main>
        </form>

        <div className="alinhamento-direita">
          <CustomBotao onClick={handleSubmit} cor="#B17DA4" label="Salvar" />
          <CustomBotao
            onClick={() => navigate(-1)}
            cor="#94b456"
            label="Voltar"
          />
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
