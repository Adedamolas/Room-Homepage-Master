 import {useState} from 'react'
 import cardImage from "../assets/card.jpg";
 import '../App.css'
 
function Navbar(){
 const [count, setCount] = useState(0)
 const name = 'room'
 const navLinks = [
    {
        name: "home",
        id: 1,
        path: '/'
    },
    {
        name: "shop",
        path: '/main.tsx',
        id: 2,
    },
    {
        name: "about",
        path: '/main.tsx',
        id: 3,
    },
    {
        name: "contact", 
        path: '/main.tsx',
        id: 4,
    }
 ] 
 const headerlinks = navLinks.map(navLinks =>
    <li key = {navLinks.id}> 
        {navLinks.name}
    </li>
 );
 function handleClick(){
    alert('It actually worked')
 }

 return(
    <>
     <nav>
        <div style={{width:'80%', display:'flex', flexDirection:'row'}}>
            <h2>{name}</h2>
            <ul> 
                {headerlinks}
            </ul>
        </div>
        <div>
        </div>
     </nav>
    </>
 )
}

export default Navbar