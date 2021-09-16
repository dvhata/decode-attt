import React from "react";

export default function CaesarCypher() {
  const [textInput, setTextInput] = React.useState("");
  const [keyInput, setKeyInput] = React.useState(0);

  const handleChangeInputText = React.useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const handleChangeInputKey = React.useCallback((e) => {
    let temp: number = parseInt(e.target.value);
    console.log(temp);
    setKeyInput(temp);
  }, []);

  var output = "";
  function handleSetTextAfterEncode() {
    showNewCode();
    // Go through each character
    for (var i = 0; i < textInput.length; i++) {
      // Get the character we'll be appending
      var c = textInput[i];
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = textInput.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + keyInput) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + keyInput) % 26) + 97);
        }
      }
      output += c;
    }
    return output;
  }

  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let code: string = "";
  function showNewCode() {
    code += alphabet.slice(keyInput, 26) + alphabet.slice(0, keyInput);
    return code;
  }

  const newInput = handleSetTextAfterEncode();

  return (
    <div>
      <h2>CaesarCypher</h2>
      <h3>Your alphabet: {alphabet} </h3>
      <input
        type="text"
        onChange={handleChangeInputText}
        placeholder="Enter your text"
      />
      <input onChange={handleChangeInputKey} placeholder="Enter your key" />
      <div>
        <h3>Your new code: {code}</h3>
      </div>
      <div>
        <h2>Your output here</h2>
        <input value={output}></input>
      </div>
    </div>
  );
}
