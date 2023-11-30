

import './Shop.css'
import duksSlika from '../../images/duksSlika.png'
import majicaSlika from '../../images/majicaSlika.png'
import soljaSlika from '../../images/solje.jpg'
import  {ShopItem}  from '../../modals/shopItem/ShopItem.jsx'



const data = [
    {
        photo: duksSlika,
        name: "FONIS dukser",
        link: "./form.html?product=duks"
    },
    {
        photo: majicaSlika,
        name: "FONIS majica",
        link: "./form.html?product=majica"
    },
    {
        photo: soljaSlika,
        name: "S2S solja",
        link: "./form.html?product=solja"
    }
];


export const Shop = () => {
    
return (
    
    <div className="shop" id="shop" >
        <h1>SHOP</h1>
        <h3>Trenutno dostupno</h3>
        <div className="shopItems">
            {data.map((item) => {
                return <ShopItem  data ={item} />
            })}
        </div>
    </div>
  )
}
