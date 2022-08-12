import './CadastrarCliente.css';
import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomTextField from '../../components/customTextField/CustomTextField';
import Titulo from '../../components/titulo/Titulo';
import CustomMaskedInput from '../../components/customMaskedInput/CustomMaskedInput';
import { validaEmail } from '../../service/validadores/regex';
import { useState } from 'react';
import { validaCPF } from '../../service/validadores/validaCpf';
import CustomAlertaErro from '../../components/customAlertaErro/CustomAlertaErro';
import {
  postCliente,
  putClientePorId,
} from '../../service/requisicoesApi/clienteApiService';
import { unmaskCPF } from '../../service/unmask/cpf';
import { unmaskTelefone } from '../../service/unmask/telefone';
import { useNavigate } from 'react-router-dom';

const CadastrarCliente = ({ valorInicial }) => {
  const navigate = useNavigate();
  const valoresIniciais = valorInicial;

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputCpfErr, setInputCpfErr] = useState(false);

  const [novoCliente, setNovoCliente] = useState({
    cpf: valoresIniciais?.cpf ?? '',
    email: valoresIniciais?.email ?? '',
    firstName: valoresIniciais?.firstName ?? '',
    lastName: valoresIniciais?.lastName ?? '',
    phone: valoresIniciais?.phone ?? '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valoresIniciais?.id) {
      putClientePorId(valoresIniciais.id, novoCliente);
    } else {
      if (!validaCPF(novoCliente.cpf)) {
        setInputCpfErr(false);
      } else {
        setInputCpfErr(true);
      }
      if (!validaEmail.test(novoCliente.email)) {
        setInputEmailErr(true);
      } else {
        setInputEmailErr(false);
      }
      postCliente(novoCliente);
    }
  };

  return (
    <div className="container-cliente">
      {valoresIniciais?.id ? (
        <Titulo titulo="Editar Cliente" />
      ) : (
        <Titulo titulo="Cadastrar Cliente" />
      )}
      <div className="container-form">
        <form className="cadastrar-cliente">
          <aside>
            <div className="flex">
              <CustomTextField
                label="Nome"
                required={true}
                value={novoCliente.firstName}
                largura={30}
                aoAlterado={(valor) =>
                  setNovoCliente({ ...novoCliente, firstName: valor })
                }
              />
            </div>
            <div className="flex">
              <CustomTextField
                label="Sobrenome"
                required={true}
                value={novoCliente.lastName}
                largura={30}
                aoAlterado={(valor) =>
                  setNovoCliente({ ...novoCliente, lastName: valor })
                }
              />
            </div>
            <div className="">
              <CustomTextField
                required={true}
                largura={30}
                label="E-mail"
                placeholder="email@email.com"
                type="email"
                value={novoCliente.email}
                aoAlterado={(valor) =>
                  setNovoCliente({ ...novoCliente, email: valor })
                }
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
                  setNovoCliente({
                    ...novoCliente,
                    phone: unmaskTelefone(valor),
                  })
                }
                value={novoCliente.phone}
              />
            </div>

            <div className="margin">
              <CustomMaskedInput
                mascara="999.999.999-99"
                placeholder="CPF"
                required={true}
                label="CPF"
                largura={20}
                value={novoCliente.cpf}
                aoAlterado={(valor) =>
                  setNovoCliente({ ...novoCliente, cpf: unmaskCPF(valor) })
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
