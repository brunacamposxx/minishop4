import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './pages/clientes/Clientes';
import HomePage from './pages/HomePage';
import Fornecedores from './pages/fornecedores/Fornecedores';
import Pedidos from './pages/pedidos/Pedidos';
import Produtos from './pages/produtos/Produtos';
import SecondPageTemplate from './pageTemplates/SecondPageTemplate';
import DetalheProduto from './pages/detalheProduto/DetalheProduto';
import DetalheCliente from './pages/detalheCliente/DetalheCliente';
import DetalheFornecedor from './pages/detalheFornecedor/DetalheFornecedor';
import DetalhePedido from './pages/detalhePedido/DetalhePedido';
import CadastrarProduto from './pages/cadastrarProduto/CadastrarProduto';
import CadastrarCliente from './pages/cadastrarCliente/CadastrarCliente';
import CadastrarFornecedor from './pages/cadastrarFornecedor/CadastrarFornecedor';
import EditarProduto from './pages/editarProduto/EditarProduto';
import EditarFornecedor from './pages/editarFornecedor/EditarFornecedor';
import EditarCliente from './pages/editarCliente/EditarCliente';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SecondPageTemplate>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/produtos/:id" element={<DetalheProduto />} />
            <Route path="/clientes/:id" element={<DetalheCliente />} />
            <Route path="/pedidos/:id" element={<DetalhePedido />} />
            <Route path="/fornecedores/:id" element={<DetalheFornecedor />} />
            <Route path="/cadastrarProduto/" element={<CadastrarProduto />} />
            <Route path="/cadastrarCliente/" element={<CadastrarCliente />} />
            <Route path="/editarProduto/:id" element={<EditarProduto />} />
            <Route
              path="/cadastrarFornecedor/"
              element={<CadastrarFornecedor />}
            />
            <Route
              path="/editarFornecedores/:id"
              element={<EditarFornecedor />}
            />
            <Route path="/editarClientes/:id" element={<EditarCliente />} />
          </Routes>
        </SecondPageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
