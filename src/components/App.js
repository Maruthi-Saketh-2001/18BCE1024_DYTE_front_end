import React, {useState} from "react";
import Editor from './Editor';

function App() {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  //Combining HTMl,CSS and javascript
  const elem=`
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `
  //Top pane for writing code in UI, Editor component for designing the code editor part.
  //Using props since the design og three editors (HTML, CSS, JS) are same.
  //Fields that are passed: 1) Language (HTML,CSS,JS); 2) Name to be displayed;
  //3) content; 4) onChange to listen the input change and modify in pane (real time)

  //Bottom pane to view the output
  return (
    <>
    <div className="pane top_pane">
    <Editor className="edit_body" lang="xml" name="HTML" value={html} onChange1={setHtml}/>
    <Editor className="edit_body" lang="css" name="CSS" value={css} onChange1={setCss}/>
    <Editor className="edit_body" lang="javascript" name="JS" value={js} onChange1={setJs}/>
    </div>
    <div className="bottom_pane">
    <iframe
    srcDoc={elem} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%"
    />
    </div>
    </>
  )
}

export default App;
