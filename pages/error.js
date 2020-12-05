import { useState } from 'react';

import NavBar from './navBar'
import MenuBar from './menuBar'
import ProductContainer from './productContainer'
import SearchBar from './searchBar'

var parts = [
  {
    name: "Placa Potência 220V",
    avatar: "https://th.bing.com/th/id/OIP.nW16fVygLmQddZvdgJ0rQwHaHa?w=199&h=199&c=7&o=5&pid=1.7",
    code: "W10446925",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "BWC10AB, BWC10BB, BWC11AB, BWC10AB, BWC10BB, BWC11AB, BWC10BB, BWC11AB",
    cost: "160,00",
    subName: "potencia",
},
{
    name: "Placa Interface Bivolt",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNp_6rZ7G-qz1sKdQiLt4UZWO2MudPCKK6jQ&usqp=CAU",
    code: "W10605809",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "BWC10AB, BWC10BB, BWC11AB",
    cost: "260,00",
    subName: "",
},
{
    name: "Válvula Dupla 220V",
    avatar: "https://th.bing.com/th/id/OIP.X42IINi8Stm5S84SWisCDgHaHa?pid=Api&rs=1",
    code: "W10201539",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "Vários",
    cost: "35,00",
    subName: "Valvula Dupla 220V",
},
{
    name: "Atuador de Freio 220V",
    avatar: "https://cdn.awsli.com.br/300x300/725/725357/produto/56179801/4880067af3.jpg",
    code: "W10518617",
    brand: "Brastemp/Consul",
    subject: "Máquina de Lavar",
    model: "Vários",
    cost: "50,00",
    subName: "",
}
]

let searchList = []
    
let searchParts = "placa"

searchParts = searchParts.toUpperCase()

for (var slice in parts) {
    if (parts[slice].name.toUpperCase().includes(searchParts) 
    || parts[slice].model.toUpperCase().includes(searchParts) 
    || parts[slice].code.toUpperCase().includes(searchParts)
    || parts[slice].brand.toUpperCase().includes(searchParts)
    || parts[slice].subject.toUpperCase().includes(searchParts)
    || parts[slice].subName.toUpperCase().includes(searchParts)) {

    searchList.push(parts[slice])
    }     
}


console.log(searchList)

function Home() {
  return (
    <div className="container">
      <SearchBar/>
      <NavBar/>
      <MenuBar/>
      <ProductContainer parts={searchList}/>
    </div>
  )
}


export default Home