import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './pages/clientes/Clientes';
import HomePage from './pages/HomePage';
import Fornecedores from './pages/fornecedores/Fornecedores';
import Pedidos from './pages/Pedidos';
import Produtos from './pages/produtos/Produtos';
import SecondPageTemplate from './pageTemplates/SecondPageTemplate';
import DetalheProduto from './pages/detalheProduto/DetalheProduto';
import DetalheCliente from './pages/detalheCliente/DetalheCliente';
import DetalheFornecedor from './pages/detalheFornecedor/DetalheFornecedor';

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
            <Route path="/fornecedores/:id" element={<DetalheFornecedor />} />
          </Routes>
        </SecondPageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
