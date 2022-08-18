import React, {useRef } from 'react'
import SignaturePad from 'react-signature-canvas';

function App() {

  let sigPad = useRef({}) as React.MutableRefObject<any>;;
  let data = '';

function clear (){
  sigPad.current.clear();
}
function save(){
  data=sigPad.current.toDataURL()
}

function show(){
  sigPad.current.fromDataURL(data);
}

  return (
    <div >
      <button onClick={clear}>Clear</button>
      <button onClick={save}>Save</button>
      <button onClick={show}>Show</button>
 <SignaturePad
 ref={sigPad}
 penColor="black"
 />
 
  </div>
  )
}

export default App
