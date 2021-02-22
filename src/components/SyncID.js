import { useEffect, useState } from "react";
import "../assets/styles/components/sync-id.scss";

export default function MusicCard2(props) {
  const { syncReady } = props;

  const [syncID, setSyncID] = useState(false);

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

  useEffect(() => {
    let syncIDButton = document.querySelector(`.sync-id-submit-button`);

    if (syncID) {
      syncIDButton.disabled = false;
    } else {
      syncIDButton.disabled = true;
    }
  }, [syncID]);

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

  function formatSyncID({ target }) {
    if (!target) {
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
    target.value = target.value.replaceAll("-", "");

    if (target.value.length > 3) {
      target.value = target.value.slice(0, 3) + "-" + target.value.slice(3);
    }

    validateSync(target.value);
  }

  function validateSync(value) {
    let syncIdInput = document.querySelector(`.sync-id-input`);

    if (!value) {
      // resets style
      syncIdInput.classList.remove("input-contains");
      syncIdInput.classList.remove("input-does-not-contain");
      setSyncID(false);
      return;
    }
    const inputIsNum = /\d{3}[-]?\d{3}/.test(value); // check length and make sure it matches type
    setSyncID(inputIsNum);
    if (inputIsNum) {
      syncIdInput.classList.add("input-contains");
      if (syncIdInput.classList.contains("input-does-not-contain"))
        syncIdInput.classList.remove("input-does-not-contain");
    } else {
      syncIdInput.classList.add("input-does-not-contain");
      if (syncIdInput.classList.contains("input-contains"))
        syncIdInput.classList.remove("input-contains");
    }
  }

  function submitSyncID() {
    const syncIdInput = document.querySelector(`.sync-id-input`)?.value;
    if (!syncIdInput) {
      console.error("Cannot find syncID value.");
      syncReady(false);
      return;
    }

    const syncValid = "spotify"; // send syncID to back end and get back some value, if that value is true then continue
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
        className="sync-id-input"
        placeholder="ex: 123-456"
      />
      <button className="sync-id-submit-button" onClick={submitSyncID}>
        Submit
      </button>
    </div>
  );
}
