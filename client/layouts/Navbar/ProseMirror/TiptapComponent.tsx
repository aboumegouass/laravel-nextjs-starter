import React, { useState, useRef } from 'react'
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import Code from './Code'
import { motion } from 'framer-motion'

const TiptapComponent = () => {
  const [insertCodeActive, setInsertCodeActive] = useState(false)

  const [CodeText, setCodeText] = useState(`var x = 20;`)
  const [langType, setlangType] = useState('js')

  const ShowInsertCode = () => {
    setInsertCodeActive(true)
  }
  const langsRef = useRef();
  const codeContentRef = useRef();

  const insertCode = () => {
    console.log(langsRef.current, codeContentRef);
  }
  return (
    <NodeViewWrapper className="react-component-with-content">
      <button onClick={ShowInsertCode}>
        <i className="bi bi-image"></i>
      </button>
      {insertCodeActive && (<motion.div initial={{ y: 100, opacity: 0 }} exit={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="app-insert-code">
        <div className="app-popup-header">
          <h1 className="title">إدراج نص الكود </h1>
          <button className="static-butt save-info primary" onClick={insertCode}><i className="bi bi-save"></i> إدراج الكود</button>
          <button className="static-butt close-panel-butt" onClick={() => setInsertCodeActive(false)}><i className="bi bi-x"></i></button>
        </div>
        <div className="app-popup-content">
          <div className="form-wrap">
            <select ref={langsRef} onChange={(e) => setlangType(e.target.value)} className="form-input xs">
              <option value="js">JavaScript</option>
              <option value="php">PHP</option>
              <option value="python">Python</option>
              <option value="Java">Java</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
            </select>
          </div>
          <div className="form-wrap">
            <textarea ref={codeContentRef} onChange={(e) => setCodeText(e.target.value)} className="form-input xs" />
          </div>
        </div>
      </motion.div>)}
      <div dir="ltr">
        <Code code={CodeText} language={langType} />
        <NodeViewContent className="content" />
      </div>
    </NodeViewWrapper>
  )
}
export default TiptapComponent