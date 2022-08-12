import './CadastrarProduto.css';
import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomTextField from '../../components/customTextField/CustomTextField';
import Titulo from '../../components/titulo/Titulo';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CustomSwitch from '../../components/customSwitch/CustomSwitch';
import { formatter } from '../../service/formatacao/real';
import { getFornecedor } from '../../service/requisicoesApi/produtoApiService';
import { useNavigate, useParams } from 'react-router-dom';
import {
  postProduto,
  getProdutoPorId,
} from '../../service/requisicoesApi/produtoApiService';

const CadastrarProduto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fornecedores, setFornecedores] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [novoProduto, setNovoProduto] = useState({
    isDiscontinued: false,
    packageName: '',
    productName: '',
    supplierId: '',
    unitPrice: 0,
  });

  useEffect(() => {
    getFornecedor(pagina, 30).then((data) => {
      setFornecedores((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  useEffect(() => {
    getProdutoPorId(id).then((data) => {
      setNovoProduto(data.objetoRetorno);
    });
  }, [id]);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  const handleClick = (event) => {
    event.preventDefault();
    postProduto(novoProduto);
  };

  console.log(novoProduto);
  return (
    <div className="container-produto">
      <Titulo titulo="Cadastrar Produto" />
      <div className="container-form-produto">
        <form className="cadastrar-produto" noValidate autoComplete="off">
          <aside>
            <div className="flex">
              <CustomTextField
                label="Nome"
                required={true}
                value={novoProduto.productName}
                largura={30}
                aoAlterado={(valor) =>
                  setNovoProduto({
                    ...novoProduto,
                    productName: valor,
                  })
                }
              />
            </div>
            {/* <div className="flex">
              <CustomTextField
                label="Imagem"
                required={true}
                value={imagem}
                largura={30}
                // aoAlterado={(valor) =>
                //   setNovoProduto({
                //     ...novoProduto,
                //     nome: valor,
                //   })
                // }
              />
            </div> */}
          </aside>
          <main>
            <div className="flex">
              <CustomTextField
                required={true}
                label="Preço"
                placeholder="R$ 0.00"
                type="number"
                value={novoProduto.unitPrice}
                largura={20}
                aoAlterado={(valor) =>
                  setNovoProduto({
                    ...novoProduto,
                    unitPrice: formatter(valor),
                  })
                }
              />
            </div>
            <div className="flex">
              <CustomTextField
                label="Pacote"
                largura={20}
                value={novoProduto.packageName}
                aoAlterado={(valor) =>
                  setNovoProduto({ ...novoProduto, packageName: valor })
                }
              />
            </div>

            <div className="flex">
              <TextField
                style={{ width: 200, marginTop: 15 }}
                id="outlined-select-currency"
                select
                label="Fornecedores"
                size="small"
                value={novoProduto.supplierId}
                onChange={(valor) =>
                  setNovoProduto({
                    ...novoProduto,
                    supplierId: valor.target.value,
                  })
                }
                required={true}
              >
                {fornecedores.map((option, index) => (
                  <MenuItem key={index} value={option.id}>
                    {option.nome}
                  </MenuItem>
                ))}
                <MenuItem onClick={() => proximaPagina()}>
                  Carregar mais...
                </MenuItem>
              </TextField>
            </div>

            <div className="flex">
              <CustomSwitch
                checked={novoProduto.isDiscontinued}
                aoAlterado={(valor) =>
                  setNovoProduto({ ...novoProduto, isDiscontinued: valor })
                }
                label={novoProduto.isDiscontinued ? 'Ativado' : 'Desativado'}
              />
            </div>
          </main>
        </form>

        <div className="alinhamento-direita">
          <CustomBotao onClick={handleClick} cor="#B17DA4" label="Salvar" />
          <CustomBotao
            onClick={() => navigate(-1)}
            cor="#94b456"
            label="Voltar"
          />
        </div>
      </div>
    </div>
  );
};

export default CadastrarProduto;
