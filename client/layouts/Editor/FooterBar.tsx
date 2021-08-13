import React from 'react'
function FooterBar({editor}) {
    //console.log(editor.getCharacterCount());
    return (
        <div className="editor-footer-bar">
            <div className="d-flex">
                <ul className="footer-bar-left">
{/*                      <li>
                       <strong> عدد الحروف:</strong> {editor.getCharacterCount() ? editor.getCharacterCount() : ''}
                    </li>
                    <li>
                        <strong> عدد الكلمات:</strong> {editor.state.doc.textContent.split(' ').length ? editor.state.doc.textContent.split(' ').length - 1 : ''}
                    </li>
                    <li>
                        <strong> عدد الفقرات:</strong> {editor.state.doc.childCount ? editor.state.doc.childCount : ''}
                    </li> */}
                </ul>
                <ul className="footer-bar-right"></ul>
            </div>
        </div>
    )
}

export default FooterBar
