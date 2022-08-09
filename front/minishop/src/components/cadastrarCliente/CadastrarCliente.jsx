import './CadastrarCliente.css';
import Botao from '../botao/Botao';
import TextFields from '../textFields/TextFields';
import Titulo from '../titulo/Titulo';
import MaskedInput from '../MaskedInput/MaskedInput';
import { validaEmail } from '../../service/regex';
import { useState } from 'react';
import { validaCPF } from '../../service/validaCpf';
import Alert from '@mui/material/Alert';

const CadastrarCliente = () => {
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputCpfErr, setInputCpfErr] = useState(false);

  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const validate = () => {
    console.log('cpf', cpf);
    console.log('email', email);
    console.log('nome', nome);
    console.log('sobrenome', sobrenome);
    console.log('telefone', telefone);

    if (!validaCPF(cpf)) {
      setInputCpfErr(false);
    } else {
      setInputCpfErr(true);
    }
    if (!validaEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
    }
  };

  return (
    <div className="container-cliente">
      <Titulo titulo="Cadastrar Clientes" />
      <div className="container-form">
        <form className="cadastrar-cliente">
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
                label="Sobrenome"
                required={true}
                value={sobrenome}
                aoAlterado={(valor) => setSobrenome(valor)}
              />
            </div>
            <div className="">
              <TextFields
                required={true}
                label="E-mail"
                placeholder="email@email.com"
                type="email"
                value={email}
                aoAlterado={(valor) => setEmail(valor)}
              />
              {inputEmailErr && (
                <Alert severity="error">
                  Por favor digite um e-mail válido!
                </Alert>
              )}
            </div>
          </aside>
          <main>
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

            <MaskedInput
              mascara="999.999.999-99"
              placeholder="CPF"
              required={true}
              label="CPF"
              largura={20}
              value={cpf}
              aoAlterado={(valor) =>
                setCpf(valor.replace('-', '').replaceAll('.', ''))
              }
            />
            {inputCpfErr && (
              <Alert severity="error">Por favor digite um CPF válido!</Alert>
            )}
          </main>
        </form>

        <div className="alinhamento-direita">
          <Botao onClick={validate} cor="#B17DA4" label="Salvar" />
          <Botao cor="#94b456" label="Voltar" />
        </div>
      </div>
    </div>
  );
};

export default CadastrarCliente;
