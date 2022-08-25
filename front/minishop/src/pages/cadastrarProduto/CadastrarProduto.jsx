import './CadastrarProduto.css';

import {
  postProduto,
  putProdutoPorId,
} from '../../service/requisicoesApi/produtoApiService';
import { useEffect, useState } from 'react';

import CustomBotao from '../../components/customBotao/CustomBotao';
import CustomSwitch from '../../components/customSwitch/CustomSwitch';
import CustomTextField from '../../components/customTextField/CustomTextField';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Titulo from '../../components/titulo/Titulo';
import { formatter } from '../../service/formatacao/real';
import { getFornecedor } from '../../service/requisicoesApi/produtoApiService';
import { imgUpload } from '../../service/imgService/imgservice';
import { maskPrice } from '../../utils/masks';
import { useNavigate } from 'react-router-dom';

const CadastrarProduto = ({ valorInicial }) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState([]);
  const [fornecedores, setFornecedores] = useState([]); //lista de fornecedores para o select
  const [pagina, setPagina] = useState(0); //paginacao
  const valoresIniciais = valorInicial;

  const [novoProduto, setNovoProduto] = useState({
    isDiscontinued: valoresIniciais?.isDiscontinued ?? false,
    packageName: valoresIniciais?.packageName ?? '',
    productName: valoresIniciais?.productName ?? '',
    supplierId: valoresIniciais?.supplierId ?? '',
    unitPrice: valoresIniciais?.unitPrice ?? 0,
    urlList: valoresIniciais?.listaUrls ?? [],
  });

  useEffect(() => {
    getFornecedor(pagina, 30).then((data) => {
      setFornecedores((listaAtual) => [
        ...listaAtual,
        ...data.objetoRetorno.content,
      ]);
    });
  }, [pagina]);

  function proximaPagina() {
    setPagina((paginaAtual) => paginaAtual + 1);
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (valoresIniciais?.id) {
      putProdutoPorId(valoresIniciais.id, novoProduto);
    } else {
      postProduto(novoProduto);
    }
  };

  async function handleImageUpload(e) {
    setCurrentImage([...currentImage, e.target.files[0]]);
    const newImgUrl = await imgUpload(e.target.files[0]);

    setNovoProduto({
      ...novoProduto,
      urlList: [...novoProduto.urlList, newImgUrl],
    });
  }

  return (
    <div className="container-produto">
      {valoresIniciais?.id ? (
        <Titulo titulo="Editar Produto" />
      ) : (
        <Titulo titulo="Cadastrar Produto" />
      )}
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
            <div className="flex">
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                label="Imagem"
                required={true}
                largura={30}
                onChange={handleImageUpload}
              />
            </div>
          </aside>
          <main>
            <div className="flex">
              <CustomTextField
                required={true}
                label="Preço"
                placeholder="R$ 0.00"
                type="number"
                value={maskPrice(novoProduto.unitPrice)}
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
