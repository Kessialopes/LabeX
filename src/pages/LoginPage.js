import React, {useState, useEffect} from 'react';
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
margin: 0;
justify-content: space-between;
font-family: 'Russo One', sans-serif;


`
const ImageLogo = styled.img`
width: 10vw;
height: 15vh;
margin: auto 0px;
`

const Navegation = styled.h3`
cursor: pointer;
`
const FormLogin = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: black;
opacity: 0.8;
margin: 100px 420px ;
width: 40vw;
height: 40vh;
color: white;
border-radius: 10px;
`
const Loginbtn = styled.button`
border: none;
margin: 10px;
background-color:#ffee58;
padding: 5px 15px;
border-radius: 5px;
`

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kessia-mello"

function LoginPage (){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("")

    const history = useHistory();
     
    useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/ListTrip");
    }
    }, [history]);

    const handleEmailUser =(e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordUser =(e)=>{
        setPassword(e.target.value);
    };
    const login = async (e) => {
        e.preventDefault();
        const loginBody = {
          email: email,
          password: password
        }
        try {
          const response = await axios.post(`${baseUrl}/login`, loginBody)
    
          window.localStorage.setItem("token", response.data.token);
            alert("Login efetuado com sucesso")
        history.push("/ListTrip");

        } catch (err) {
        console.log(err)
        alert("Oops! Algo deu errado, tente novamente.")
        }
  }

    const goToHomePage = () => {
        history.push("/");
      };

    return(
        <>
            <Header>
            <ImageLogo src={Logo}></ImageLogo>
            <Navegation onClick={goToHomePage}>Home</Navegation>
            </Header>
            <hr />
            <FormLogin onSubmit={login}>
                <label>
                    Email: <input value={email} name="email" type="email" onChange={handleEmailUser}/>
                </label>
                <label>
                    Senha: <input value={password} name="password" type="password" onChange={handlePasswordUser}/>
                </label>
                <Loginbtn>Entrar</Loginbtn>
            </FormLogin>
        </>
    )
}
export default LoginPage;