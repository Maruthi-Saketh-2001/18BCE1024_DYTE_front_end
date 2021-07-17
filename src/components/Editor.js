import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from 'react-codemirror2'

export default function Editor(props){
  //Setting property values with local variables
  //1) lang: Denotes one of the 3 languages (HTML,CSS,JS)
  //2) name: To display on top of editor pane
  //3) Value: Existing content
  //4) onChange function: To modify data in pane
  const{lang,name,value,onChange1}=props

  //Displaying user input text in respective pane and in realtime
  function handleChange(editor,data,value){
    onChange1(value)
  }

  //Reading input file and displaying in the respective pane
  let fileReader;
  const handleFileRead = (e) => {
    const content = fileReader.result;
    onChange1(content)
    };
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  //Using codemirror which provides a code editor wo work on browser.
  return(
    <div className="edit_container">
    <div className="edit_title">
    {name}
    <input type="file" className="hid" id="files" accept=".html,.css,.js,.txt" onChange={e => handleFileChosen(e.target.files[0])}/>
    <label for="files" className="cursorClink">Select file</label>
    </div>
    <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className="code-mirror-wrapper"
      options={{
        lineWrapping:true,
        lint:true,
        mode:lang,
        lineNumbers: true,
        theme:'material'
      }}
      />
      </div>
  )
}
