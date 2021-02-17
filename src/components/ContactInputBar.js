import '../assets/styles/components/contact-input-bar.scss';
import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export default function ContactInputBar(props) {
    const { service } = props;
    const [playlistValue, setPlaylistValue] = useState("");


    const debouncedSave = useCallback(
		debounce(nextTarget => {

            // checkPlaylist(nextTarget); 
            // pass in function here

        }, 1000),
		[], 
    );

    const handleChange = event => {
        const {target: nextTarget} = event;
     
        debouncedSave(nextTarget);
	};

    function changeToEmail() {
        document.querySelector(".emailButton").classList.add("activated");
        document.querySelector(".textButton").classList.remove("activated");
        const contactInput = document.querySelector(".contactInput");
        contactInput.setAttribute("type", "email")
        contactInput.setAttribute("placeholder", "Enter Email");
        // contactInput.removeAttribute("pattern");
        contactInput.classList.remove("textInput");
        contactInput.classList.add("emailInput");
        contactInput.value = "";

    }

    function changeToText() {
        document.querySelector(".textButton").classList.add("activated");
        document.querySelector(".emailButton").classList.remove("activated");
        const contactInput = document.querySelector(".contactInput");
        contactInput.setAttribute("type", "tel")
        contactInput.setAttribute("placeholder", "Enter Phone Number");
        // contactInput.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
        contactInput.classList.remove("emailInput");
        contactInput.classList.add("textInput");
        contactInput.value = "";
    }

    let filter = [];

    const keypadZero = 48;
    // const numpadZero = 96;
    for(let i=0; i<=9; i++) {
        filter.push(i+keypadZero);
        // filter.push(i+numpadZero);
    }

    filter.push("Backspace");
    filter.push("ArrowLeft");
    filter.push("ArrowRight");
    filter.push("Del");
    filter.push("Meta");

    function checkInput(event) { // onKeyDown
        const target = event.target;
        if (!target || !target.type) { console.error('Error: could not find target or target value from contact bar.'); return; }

        if (target.type === 'tel') {
            if(filter.indexOf(event.key.charCodeAt(0)) < 0 && filter.indexOf(event.key) < 0) {
                event.preventDefault();
                alert("Whoops that's not a digit! please enter a digit to continue.");
            }
        }
    }

    function formatAndValidate(event) {
        const target = event.target;
        if (!target || !target.type) { console.error('Error: could not find target or target value from contact bar.'); return; }

        if (target.type === 'tel') {
            event.target.value = formatTel(target);
            
        } else if (target.type === 'email') {
            // console.log(event.key); // just need to revert back
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
