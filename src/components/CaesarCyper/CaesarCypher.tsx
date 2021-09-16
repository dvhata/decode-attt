import React from "react";

export default function CaesarCypher() {
  const [textInput, setTextInput] = React.useState("");
  const [keyInput, setKeyInput] = React.useState(0);
  //const [textAfterEncode,setTextAfterEncode] = React.useState("")

  /* const handleSubmit = React.useCallback((e) => {
    setTextInput(e.target.value);
    console.log(e.target.value);
  }, []);
 */

  const handleChangeInputKey = React.useCallback((e) => {
    let temp: number = parseInt(e.target.value);
    console.log(temp);
    setKeyInput(temp);
  }, []);

  function handleSetTextAfterEncode() {
    showNewCode();
    const temp: string = textInput;
    return temp;
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
      <h3>Your alphabet: {alphabet} </h3>
      <input
        type="text"
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Enter your text"
      />
      <input onChange={handleChangeInputKey} placeholder="Enter your key" />
      {/* <button value={textInput} onClick={handleSubmit}>
        Encode
      </button> */}
      <div>
        <h3>Your new code: {code}</h3>
      </div>
      <div>
        <h2>Your output here</h2>
        <input value={keyInput}></input>
      </div>
    </div>
  );
}
