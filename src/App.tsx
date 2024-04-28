import { useState } from 'react';
import './App.css'
import { levels, calulateImc, LevelsProps } from './helpers/imc'
import Card from './components/card'
import Result from './components/result';


function App() {
  const [campoAltura, setCampoAltura] = useState<number>(0);
  const [campoPeso, setCampoPeso] = useState<number>(0);
  const [resultado, setResultado] = useState<object>({});
  const [aviso, setAviso] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
 
  function calcularIMC(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (campoPeso && campoAltura) {
      setAviso(false);
      setError(false);
      setResultado(calulateImc(campoAltura, campoPeso))
      if(calulateImc(campoAltura, campoPeso).error){
        setError(true);
      }
    }else {
      setAviso(true);
    }
  }
  return (
    <>
      <header>
        <img src={'/assets/logo.svg'} className='logo' />
        <span className='title'>Calcule seu IMC</span>
      </header>
      <div className='grid'>
        {levels.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <form className='form' onSubmit={calcularIMC}>
        <input type='number' placeholder='Digite sua altura: ex.: 1.80 (em centimetros)' maxLength={4} min="1" max="3" step="0.01" value={campoAltura > 0 ? campoAltura : ''} onChange={(e) => setCampoAltura(parseFloat(e.target.value))}/>
        <input type='number' placeholder='Digite seu peso: ex.: 60.2 (em KG)' maxLength={5} min="1" max="500" step="0.01" value={campoPeso > 0 ? campoPeso : ''} onChange={(e) => setCampoPeso(parseFloat(e.target.value))}/>
        <button type="submit">Calcular</button>
      </form>
      {aviso == true && <div className='warning'>Preencha corretamente</div>}
      {('levelCopy' in resultado) && <div className='resultado'><Result result={resultado.levelCopy as LevelsProps} /></div>}
      {error == true && <div className='error'>Não foi possível calcular seu IMC.</div>}
      <div className='imc-description'>
        O Índice de Massa Corporal (IMC) é uma das principais ferramentas, adotada inclusive pela Organização Mundial de Saúde (OMS), para calcular o chamado “peso ideal”. Obtido a partir do peso e da altura do indivíduo, o IMC também aponta níveis de magreza e obesidade, que são usados para nortear o trabalho de profissionais de saúde e de educadores físicos.
      </div>
    </>
  )
}

export default App
