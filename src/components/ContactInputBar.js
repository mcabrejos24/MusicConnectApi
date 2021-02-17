import '../assets/styles/components/contact-input-bar.scss';
import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export default function ContactInputBar(props) {
    const { service } = props;
    const [playlistValue, setPlaylistValue] = useState("");

    let filter = [];
    const keypadZero = 48;
    for(let i=0; i<=9; i++) {
        filter.push(i+keypadZero);
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
        contactInput.setAttribute("type", "email")
        contactInput.setAttribute("placeholder", "Enter Email");
        contactInput.classList.remove("textInput");
        contactInput.classList.add("emailInput");
        contactInput.value = "";

    }

    function changeToText() {
        document.querySelector(".textButton").classList.add("activated");
        document.querySelector(".emailButton").classList.remove("activated");
        const contactInput = document.querySelector(".contactInput");
        contactInput.setAttribute("type", "tel")
        contactInput.setAttribute("placeholder", "Enter Phone Number (US support only)");
        contactInput.classList.remove("emailInput");
        contactInput.classList.add("textInput");
        contactInput.value = "";
    }

    function checkInput(event) { // onKeyDown
        const target = event.target;
        if (!target || !target.type) { console.error('Error: could not find target or target value from contact bar.'); return; }

        if (target.type === 'tel') {
            if(filter.indexOf(event.key.charCodeAt(0)) < 0 && filter.indexOf(event.key) < 0) {
                event.preventDefault();
                alert("Whoops that's not a digit! please enter a digit to continue."); // tell user to enter a number
            }
        }
    }

    function formatAndValidate(event) { // onKeyUp
        const target = event.target;
        if (!target || !target.type) { console.error('Error: could not find target or target value from contact bar.'); return; }

        if (target.type === 'tel') {
            target.value = formatTel(target);
            validatePhone(target.value);
        } else if (target.type === 'email') {
            validateEmail(target.value);
        } else {
            console.error('Error: target type is not tel or email');
        }
    }

    function formatTel(target) {
        let value = target.value;
        if(value.length > 14) return value.slice(0, -1); // stops taking input at 14 characters
        value = value.replaceAll("-","");
        value = value.replaceAll("(","");
        value = value.replaceAll(")","");
        value = value.replaceAll(" ","");

        if(value.length > 3 && value.length <= 6) {
            value = "(" + value.slice(0,3) + ") " + value.slice(3);
        } 
        else if(value.length > 6) {
            value = "(" + value.slice(0,3) + ") " + value.slice(3,6) + "-" + value.slice(6);
        }
        return value;
    }

    function validatePhone(num){
        let inputElementWrapper = document.querySelector(`.contact-input-wrapper`);
        if (!num) { // resets style
            inputElementWrapper.classList.remove('input-contains');
            inputElementWrapper.classList.remove('input-does-not-contain');
            return;
        }
        const inputIsNum = /\(\d{3}\)[ ]?\d{3}[-]?\d{4}/.test(num); // check length and make sure it matches type
        if(inputIsNum) {
            inputElementWrapper.classList.add('input-contains');
            if (inputElementWrapper.classList.contains('input-does-not-contain')) inputElementWrapper.classList.remove('input-does-not-contain');
        } else {
            inputElementWrapper.classList.add('input-does-not-contain');
            if (inputElementWrapper.classList.contains('input-contains')) inputElementWrapper.classList.remove('input-contains');
        }
    }

    function validateEmail(email) {
        console.log(email);
    }

    return (
            <div className="contact-input-bar">
                <div className="contact-button-wrapper">
                    <button className="emailButton activated" onClick={ changeToEmail }>Email</button> / <button className="textButton" onClick={ changeToText }>Text</button>
                </div>

                <div className="contact-input-wrapper">
                    <input 
                        onKeyDown={ checkInput }
                        onKeyUp={ formatAndValidate }
                        name = {service === 'apple' ? 'spotify' : 'apple'} // sets name to service that the other user will receive          
                        type="email"      
                        className="contactInput emailInput"
                        placeholder="Enter Email"
                    />
                </div>
            </div>
    );
}
