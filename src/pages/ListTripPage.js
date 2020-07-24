import React, {useState, useEffect} from 'react';

import { useHistory } from "react-router-dom";

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
const List = styled.ul`
background-color:#ffee58;
opacity: 0.94;

`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/kessia-mello/trips"

function ListTripPage (){
    const[listTrip, setListTrip] = useState([])
    const[detailsTrip, setDetailsTrip] = useState([])
    const history = useHistory();

    const getTrips =()=>{
        axios.get(`${baseUrl}`)
        .then((response=>{
            setListTrip(response.data.trips)
        })).catch(err =>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getTrips()
    },[])

    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token === null) {
        history.push("/");
      }
    }, [history]);

    const getTripDetail =()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/kessia-mello/trip/:id}`)
        .then((response=>{
            setDetailsTrip(response.data.trip)
        })).catch(err =>{
            console.log(err)
        })
    }

  
    const logout = () => {

      window.localStorage.clear();
            history.push("/");
    };
    /*const goToHomePage = () => {
        history.push("/");
      };*/
    const goToCreatePage = () => {
        history.push("/Create");
    }; 
    const trips = listTrip.map((trip)=>
        <li>{trip.name}, {trip.date}, {trip.planet}, {trip.durationInDays} dias de viagem."{trip.description}" <button>Detalhe</button></li>

        
    );
    return(
        <div>
            <Header>
            <ImageLogo src={Logo}></ImageLogo>
            <Navegation onClick={goToCreatePage}>Criar Viagem</Navegation>
            <Navegation onClick={logout}>Sair</Navegation>
            </Header>
            <hr />
            <List>{trips}</List>
           
        </div>
    )
}
export default ListTripPage;