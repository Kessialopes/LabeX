import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

import Logo from '../imge/logo-spacet.png';

const Header = styled.header`
display: flex;
width: 100%;
height:15vh;
background-color: #212121;
color: #ffee58;
font-family: 'Russo One', sans-serif;
margin: 0;
justify-content: space-between;

`
const ImageLogo = styled.img`
width: 10vw;
height: 15vh;
margin: auto 0px;
`
const Navegation = styled.h3`
cursor: pointer;
`
const Wellcome = styled.div`
background-color: white;
text-align: center;`

const Form = styled.form`
display: flex;
background-color: #ffff8b;
flex-direction: column;
margin: auto;
padding: 2px;
width: 40vw;
height: 50vh;
border-radius: 3px;
opacity: 0.9;
`
const Input = styled.input`
width:20vw ;
`
const Botao = styled.button`
margin: auto;
width:5vw ;
background-color: #ffee58;
border-radius: 4px;
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kessia-mello/trips"


function SubscriptionPage (){
    const [trips, setTrips] = useState([])
    const [form, setForm] = useState({
      name:'',
      age:0,
      aplicattionText:'',
      profession:'',
      country:'',
      trip: null
    })
    const history = useHistory();

    useEffect(()=>{
      getTrips()
  },[])

    const goToHomePage = () => {
        history.push("/");
      };
    
      const goToLoginPage = () => {
        history.push("/Login");
      };

      const onChangeInput =(e)=>{
        const newValue = e.target.value
        const fieldName = e.target.name

        setForm({...form,[fieldName]: newValue})
      }
      const getTrips =()=>{
        axios.get(`${baseUrl}`)
        .then((response=>{
            setTrips(response.data.trips)
        })).catch(err =>{
            console.log(err)
        })
    }
    return(
    <>
          <Header>
          <ImageLogo src={Logo}></ImageLogo>
          <Navegation onClick={goToHomePage}>Home</Navegation>
          <Navegation onClick={goToLoginPage}>Login</Navegation>
          </Header>
          <hr />
          <Wellcome>
              <h1>Embarque nessa aventura!</h1> 
          </Wellcome>
          <Form>
            <label>Nome:
            <Input 
            type= 'text'
            name={'name'}
            value={form['name']}
            onChange={onChangeInput}
            />
            </label>
            <label>Idade:
            <Input 
            type='number'
            name={'age'}
            value={form['age']}
            
            />
            </label>
            <label>Profissão:
            <Input
            type='text'
            name={'profession'}
            value={form['profession']}
            />
            </label>
            <label>Por que você deve viajar conosco?
            <Input
            type='text'
            name={'aplicattionText'}
            value={form['aplicattionText']}
            />
            </label>
            <label>Qual seu país?</label>
            <select 
            name={'country'}
            value={form['country']}
            onChange={onChangeInput}
            >
              <option></option>
              <option>Brasil</option>
              <option>Inglaterra</option>
              <option>Ucrania</option>
              <option>Nova Zelandia</option>
              <option>Austria</option>
              <option>Haiti</option>
              <option>Paquistão</option>
              <option>China</option>

            </select>
            <label>viagens: </label>
            <select
            name={'trip'}
            value={form['trip']}
            onChange={onChangeInput}
            >
              {trips.map((trip)=>{
                return <option value={trip}>{trip.name}</option>
              })}
            </select>
            
            <Botao>Enviar</Botao>
          </Form>
      </>
    )

}
export default SubscriptionPage;