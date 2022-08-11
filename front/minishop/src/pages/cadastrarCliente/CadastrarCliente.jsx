import './CadastrarCliente.css';
import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomTextField from '../../components/customTextField/CustomTextField';
import Titulo from '../../components/titulo/Titulo';
import CustomMaskedInput from '../../components/customMaskedInput/CustomMaskedInput';
import { validaEmail } from '../../service/regex';
import { useState } from 'react';
import { validaCPF } from '../../service/validaCpf';
import CustomAlertaErro from '../../components/customAlertaErro/CustomAlertaErro';

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
                label="Sobrenome"
                required={true}
                value={sobrenome}
                largura={30}
                aoAlterado={(valor) => setSobrenome(valor)}
              />
            </div>
            <div className="">
              <CustomTextField
                required={true}
                largura={30}
                label="E-mail"
                placeholder="email@email.com"
                type="email"
                value={email}
                aoAlterado={(valor) => setEmail(valor)}
              />
            </div>
          </aside>
          <main>
            <div className="margin">
              <CustomMaskedInput
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

            <div className="margin">
              <CustomMaskedInput
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
            </div>
          </main>
        </form>

        <div className="alinhamento-direita">
          <CustomBotao onClick={validate} cor="#B17DA4" label="Salvar" />
          <CustomBotao cor="#94b456" label="Voltar" />
        </div>
        <div className="margin">
          {inputCpfErr && (
            <CustomAlertaErro mensagem="Por favor digite um CPF válido!" />
          )}
          {inputEmailErr && (
            <CustomAlertaErro mensagem="Por favor digite um e-mail válido!" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CadastrarCliente;
