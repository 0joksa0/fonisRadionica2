import React from "react";
import "./formStyle.css";
import "../../App.css";
import Logo from "../../images/LOGO.png";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const Form = () => {

  let query = useQuery();

  const handleSubmit = (e) => { 
    e.preventDefault();
    const form = document.getElementById("myform");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const payment = document.getElementById("payment");
    const size = document.querySelector('input[name="size"]:checked');

    const data = {
      name: name.value,
      email: email.value,
      payment: payment.value,
      size: size.value,
      product: query.get("product")
    };

    console.log(data);
  };

  var product = "";
  if(query.get("product") != null) {
     product = query.get("product").toUpperCase()}
  

  return (
    <div className="form">
      <img src={Logo} alt=""  className="formImg"/> 

      <form id="myform">
        <label name="Product" id="Product">{product}</label>
        <label htmlFor="name">Ime i prezime</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Unesite ime i prezime"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Unesite email"
        />
        <label htmlFor="payment">Nacin placanja</label>
        <select name="payment" id="payment">
          <option value="card">Kartica</option>
          <option value="cash">Gotovina</option>
        </select>
        <div className="radioButtons">
          <label htmlFor="s">S</label>
          <input type="radio" name="size" id="s" value="s" />
          <label htmlFor="m">M</label>
          <input type="radio" name="size" id="m" value="m" />
          <label htmlFor="l">L</label>
          <input type="radio" name="size" id="l" value="l" />
          <label htmlFor="xl">XL</label>
          <input type="radio" name="size" id="xl" value="xl" />
        </div>
        <button type="submit" onClick={handleSubmit}>Poruci</button>
      </form>
    </div>
  );
};

export default Form;
