import "../assets/styles/components/contact-input-bar.scss";

export default function ContactInputBar(props) {
  const { service } = props;

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
  }

  function checkInput(event) {
    // onKeyDown
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

  function formatAndValidate(event) {
    // onKeyUp
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
      inputElementWrapper.classList.add("input-contains");
      if (inputElementWrapper.classList.contains("input-does-not-contain"))
        inputElementWrapper.classList.remove("input-does-not-contain");
    } else {
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
    const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const inputIsEmail = emailFormat.test(email.toLowerCase());

    if (inputIsEmail) {
      inputElementWrapper.classList.add("input-contains");
      if (inputElementWrapper.classList.contains("input-does-not-contain"))
        inputElementWrapper.classList.remove("input-does-not-contain");
    } else {
      inputElementWrapper.classList.add("input-does-not-contain");
      if (inputElementWrapper.classList.contains("input-contains"))
        inputElementWrapper.classList.remove("input-contains");
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
    </div>
  );
}
