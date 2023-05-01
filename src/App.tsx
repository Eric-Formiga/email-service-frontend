import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button,Spacer } from "@chakra-ui/react"
import { useState } from 'react'
import { useIdentityMutation } from './hooks/useIdentityMutation'

function App() {
  const {mutate} = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setfirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () =>{
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <form >
      <div className='name-form-container'>
        <PrimaryInput label='Primeiro nome' value={firstName} onChange={event => setfirstName(event.target.value)} name='firstName' placeholder='Anderson'/>
        <PrimaryInput label='Sobrenome' value={secondName} onChange={event => setSecondName(event.target.value)} name='secondName' placeholder='Silva' />
      </div>
      <Spacer height="4" />
      <PrimaryInput label='Digite seu email' value={email} onChange={event => setEmail(event.target.value)} name='Email' placeholder='Digite seu email' />
      <Spacer height="4" />
      <Button colorScheme='green' width="100%" onClick={submit}> enviar</Button>
      </form>
      <Spacer width="6" maxWidth="6"/>
      <div className='product-details'>
        <h2>Assinatura Mensal</h2>
        <Spacer width="4" />
      <p>Você irá pagar</p>
      <Spacer width="4" />
      <span>R$250,00</span>
      <Spacer width="4" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia libero non explicabo natus inventore provident?</p>
      </div>
    </div>
  )
}

export default App
