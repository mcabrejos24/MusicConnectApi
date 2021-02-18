import { useState } from "react";
import "../assets/styles/components/contact-input-bar.scss";

export default function ContactInputBar(props) {
  const { service } = props;
  const { setContactReady } = props;

  const [provider, setProvider] = useState('select');
  const [phoneInput, setPhoneInput] = useState(false);

  let filter = [];
  const keypadZero = 48;
  for (let i = 0; i <= 9; i++) {
    filter.push(i + keypadZero);
  }
  filter.push("Backspace");
  filter.push("ArrowLeft");
  filter.push("ArrowRight");
  filter.push("Del");
  filter.push("Meta");

  function changeToEmail() {
    document.querySelector(".emailButton").classList.add("activated");
    document.querySelector(".textButton").classList.remove("activated");
    const contactInput = document.querySelector(".contactInput");
    contactInput.setAttribute("type", "email");
    contactInput.setAttribute("placeholder", "Enter Email");
    contactInput.classList.remove("textInput");
    contactInput.classList.add("emailInput");
    contactInput.value = "";
    let inputElementWrapper = document.querySelector(`.contact-input-wrapper`);
    inputElementWrapper.classList.remove("input-contains");
    inputElementWrapper.classList.remove("input-does-not-contain");
    setContactReady(false);
    setPhoneInput(false);
  }

  function changeToText() {
    document.querySelector(".textButton").classList.add("activated");
    document.querySelector(".emailButton").classList.remove("activated");
    const contactInput = document.querySelector(".contactInput");
    contactInput.setAttribute("type", "tel");
    contactInput.setAttribute(
      "placeholder",
      "Enter Phone Number (US support only)"
    );
    contactInput.classList.remove("emailInput");
    contactInput.classList.add("textInput");
    contactInput.value = "";
    let inputElementWrapper = document.querySelector(`.contact-input-wrapper`);
    inputElementWrapper.classList.remove("input-contains");
    inputElementWrapper.classList.remove("input-does-not-contain");
    setContactReady(false);
  }

  function checkInput(event) { // onKeyDown
    const target = event.target;
    if (!target || !target.type) {
      console.error(
        "Error: could not find target or target value from contact bar."
      );
      return;
    }

    if (target.type === "tel") {
      if (
        filter.indexOf(event.key.charCodeAt(0)) < 0 &&
        filter.indexOf(event.key) < 0
      ) {
        event.preventDefault();
        alert("Whoops that's not a digit! please enter a digit to continue."); // tell user to enter a number
      }
    }
  }

  function formatAndValidate(event) { // onKeyUp
    const target = event.target;
    if (!target || !target.type) {
      console.error(
        "Error: could not find target or target value from contact bar."
      );
      return;
    }

    if (target.type === "tel") {
      target.value = formatTel(target);
      validatePhone(target.value);
    } else if (target.type === "email") {
      validateEmail(target.value);
    } else {
      console.error("Error: target type is not tel or email");
    }
  }

  function formatTel(target) {
    let value = target.value;
    if (value.length > 14) return value.slice(0, -1); // stops taking input at 14 characters
    value = value.replaceAll("-", "");
    value = value.replaceAll("(", "");
    value = value.replaceAll(")", "");
    value = value.replaceAll(" ", "");

    if (value.length > 3 && value.length <= 6) {
      value = "(" + value.slice(0, 3) + ") " + value.slice(3);
    } else if (value.length > 6) {
      value =
        "(" +
        value.slice(0, 3) +
        ") " +
        value.slice(3, 6) +
        "-" +
        value.slice(6);
    }
    return value;
  }

  function validatePhone(num) {
    let inputElementWrapper = document.querySelector(`.contact-input-wrapper`);
    if (!num) {
      // resets style
      inputElementWrapper.classList.remove("input-contains");
      inputElementWrapper.classList.remove("input-does-not-contain");
      return;
    }
    const inputIsNum = /\(\d{3}\)[ ]?\d{3}[-]?\d{4}/.test(num); // check length and make sure it matches type
    if (inputIsNum) {
      setPhoneInput(true);
      inputElementWrapper.classList.add("input-contains");
      if (inputElementWrapper.classList.contains("input-does-not-contain"))
        inputElementWrapper.classList.remove("input-does-not-contain");
      if(provider !== 'select') setContactReady(true);
    } else {
      setContactReady(false);
      setPhoneInput(false);
      inputElementWrapper.classList.add("input-does-not-contain");
      if (inputElementWrapper.classList.contains("input-contains"))
        inputElementWrapper.classList.remove("input-contains");
    }
  }

  function validateEmail(email) {
    let inputElementWrapper = document.querySelector(`.contact-input-wrapper`);
    if (!email) { // resets style
      inputElementWrapper.classList.remove("input-contains");
      inputElementWrapper.classList.remove("input-does-not-contain");
      return;
    }
    
    // Check to see if email is in the correct format ex: email@someEmail.com, school@live.unc.edu, etc.
    const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:)*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:|\\)+)\])/;
    const inputIsEmail = emailFormat.test(email.toLowerCase());

    if (inputIsEmail) {
      setContactReady(true);
      inputElementWrapper.classList.add("input-contains");
      if (inputElementWrapper.classList.contains("input-does-not-contain"))
        inputElementWrapper.classList.remove("input-does-not-contain");
    } else {
      setContactReady(false);
      inputElementWrapper.classList.add("input-does-not-contain");
      if (inputElementWrapper.classList.contains("input-contains"))
        inputElementWrapper.classList.remove("input-contains");
    }
  }

  function onProviderChange({target}) {
    setProvider(target.value);

    if(target.value !== 'select' && phoneInput) {
      setContactReady(true);
    } else {
      setContactReady(false);
      
    }
    
  }

  return (
    <div className="contact-input-bar">
      <div className="contact-button-wrapper">
        <button className="emailButton activated" onClick={changeToEmail}>
          Email
        </button>{" "}
        /{" "}
        <button className="textButton" onClick={changeToText}>
          Text
        </button>
      </div>

      <div className="contact-input-wrapper">
        <input
          onKeyDown={checkInput}
          onKeyUp={formatAndValidate}
          name={service === "apple" ? "spotify" : "apple"} // sets name to service that the other user will receive
          type="email"
          className="contactInput emailInput"
          placeholder="Enter Email"
        />
      </div>
      
      <div className="phone-provider-wrapper">
        <label for="providers">Choose your provider: </label>
        <select name="providers" id="providers" value={provider} onChange={onProviderChange}>
          <option value="select">Select an option</option>
          <option value="att">AT&T</option>
          <option value="boostmobile">Boost Mobile</option>
          <option value="c-spire">C-Spire</option>
          <option value="consumercellular">Consumer Cellular</option>
          <option value="cricket">Cricket</option>
          <option value="googlefi">Google Fi</option>
          <option value="metropcs">Metro PCS</option>
          <option value="mintmobile">Mint Mobile</option>
          <option value="pageplus">Page Plus</option>
          <option value="redpocket">Red Pocket</option>
          <option value="republicwireless">Republic Wireless</option>
          <option value="simplemobile">Simple Mobile</option>
          <option value="sprint">Sprint</option>
          <option value="tmobile">T-Mobile</option>
          <option value="ting">Ting</option>
          <option value="tracfone">Tracfone</option>
          <option value="uscellular">U.S. Cellular</option>
          <option value="verizon">Verizon</option>
          <option value="virginmobile">Virgin Mobile</option>
          <option value="xfinitymobile">Xfinity Mobile</option>
        </select>
      </div>
    </div>
  );
}
