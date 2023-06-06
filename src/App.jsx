import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './compnents/Context';


function App() {
const {pessoa} = useContext(ThemeContext)



  return (
    <>
    <div className='container'>
      <p>Nome : {pessoa.nome}</p>
      <p>Idade: {pessoa.idade}</p>
      <p>Altura: {pessoa.altura}</p>
      <p>Divida Ativa: {pessoa.dividaAtiva === true ? 'Sim' : 'Não'}</p>
      <p>Salário bruto: {pessoa.salarioBruto}</p>
      {pessoa.dividaAtiva &&(
          <p>Total da dívida: {pessoa.divida}</p>
      )}
      <p>Salário líquido: {pessoa.salarioLiquido(pessoa.salarioBruto,pessoa.divida)}</p>
    </div>

    </>
  )
}

export default App
