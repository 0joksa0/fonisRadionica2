import React from "react";
import "./form.scss";
// import Logo from "../../images/Logo.png";

const Form = () => {
  return (
    <div className="form">
      {/* <img src={Logo} alt="" > </img> */}

      <form id="myform">
        <label name="Product" id="Product"></label>
        <label for="name">Ime i prezime</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Unesite ime i prezime"
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Unesite email"
        />
        <label for="payment">Nacin placanja</label>
        <select name="payment" id="payment">
          <option value="card">Kartica</option>
          <option value="cash">Gotovina</option>
        </select>
        <div class="radioButtons">
          <label for="s">S</label>
          <input type="radio" name="size" id="s" value="s" />
          <label for="m">M</label>
          <input type="radio" name="size" id="m" value="m" />
          <label for="l">L</label>
          <input type="radio" name="size" id="l" value="l" />
          <label for="xl">XL</label>
          <input type="radio" name="size" id="xl" value="xl" />
        </div>
        <button type="submit">Poruci</button>
      </form>
    </div>
  );
};

export default Form;
