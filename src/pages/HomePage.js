import React from 'react';
import {useHistory} from 'react-router-dom';

import styled from 'styled-components';
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
const Wellcome = styled.div`
background-color: white;
text-align: center;


`
const Navegation = styled.h3`
cursor: pointer;
`
const Containerbtn = styled.div`
display: flex;
justify-content: center;
align-items:center;
background-color: white;
opacity: 0.9;
width: 40vw;
height:30vh;
margin: auto;

`
const Navegationbtn = styled.h2`
cursor: pointer;
border: 1px solid black;
`





function HomePage (){

const history = useHistory();

const goToLoginPage = () => {
    history.push("/Login");
  };

  const goToSubscriptionPage = () => {
    history.push("/Subscription");
  };
    return(
        <div>
            <Header>
                <ImageLogo src={Logo}></ImageLogo>
                <Navegation onClick={goToLoginPage}>Login</Navegation>
                
            </Header>
            <hr />
            <Wellcome>
               <h1>Bem vindo(a), à Space T !</h1> 
            </Wellcome>
            <Containerbtn>
            <h3>Quer viajar conosco?</h3>
             <Navegationbtn onClick={goToSubscriptionPage}>Inscreva-se</Navegationbtn>
             </Containerbtn> 
        </div>
        
    )
}
export default HomePage;