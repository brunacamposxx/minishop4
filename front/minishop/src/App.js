import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clientes from './pages/Clientes';
import HomePage from './pages/HomePage';
import Fornecedores from './pages/Fornecedores';
import Pedidos from './pages/Pedidos';
import Produtos from './pages/Produtos';
import SecondPageTemplate from './pageTemplates/SecondPageTemplate';

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
          </Routes>
        </SecondPageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
