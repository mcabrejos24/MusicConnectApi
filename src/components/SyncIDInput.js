import { useState } from "react";

export default function SyncIDInput(props) {
  const { syncReady } = props;

  const [syncID, setSyncID] = useState(false);
  const [inputState, setInputState] = useState("");

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

  function checkInput(event) {
    // onKeyDown
    const target = event.target;
    if (!target || !target.type) {
      console.error(
        "Error: could not find target or target type from syncID input."
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

  function formatSyncID(event) {
    const target = event.target;
    setSyncID(false);
    if (!target || (!target.value && event.key !== "Backspace" && event.key !== "Del")) {
      console.error(
        "Error: could not find target or target value from syncID input."
      );
      return;
    }

    if (target.value.length > 7) {
      // stops taking input at 6 characters
      target.value = target.value.slice(0, -1);
      return;
    }
    target.value = target.value.replace("-", "");
    // format numbers from style to style: 000000 => 000-000
    if (target.value.length > 3) {
      target.value = target.value.slice(0, 3) + "-" + target.value.slice(3);
    }

    validateSync(target.value);
  }

  function validateSync(value) {
    if (!value) {
      // resets border style
      setInputState("");
      return;
    }
    // check length and make sure it matches digit format
    const inputIsNum = /\d{3}[-]?\d{3}/.test(value);

    // check to see if complete: 000 vs 000-000
    // update input border styles accordingly
    // set values if check passes
    // setSyncID(inputIsNum);
    if (inputIsNum) {
      setInputState("input-contains");
      setSyncID(value);
    } else {
      setInputState("input-does-not-contain");
    }
  }

  function submitSyncID() {
    if (!syncID) {
      console.error("Cannot find syncID value.");
      syncReady(false);
      return;
    }
    // send syncID to back end and check if it exists, for now log it
    // if it does then check what the service was for the other user
    // return back the service that should be used for this user
    // pass it in to syncValid
    // we are simulating a spotify return value below | alternative: "apple"
    // console.log(syncID);
    const syncValid = "spotify"; 
    if (!syncValid)
      alert(
        "Sync ID you provided does not exist. Please go back and use one of the other two options."
      );
    syncReady(syncValid);
  }

  return (
    <div className="sync-id">
      <p className="sync-id-description">Enter your Sync ID below</p>
      <input
        onKeyDown={checkInput}
        onKeyUp={formatSyncID}
        type="tel"
        className={`sync-id-input ${inputState}`}
        placeholder="ex: 123-456"
      />
      <button className="sync-id-submit-button" onClick={submitSyncID} disabled={syncID ? false : true}>
        Submit
      </button>
    </div>
  );
}
