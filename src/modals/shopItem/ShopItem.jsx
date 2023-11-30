import React from 'react'



export const ShopItem = ({data}) => {

    function poruci(){
        // location.href = data.link;
    }


  return (
    <div className="shopItem">
                <img src={data.photo} alt="MAJICA"/>
                <h4>{data.name}</h4>
                <button onClick={poruci} >Porucite</button>
            </div>
  )
}
