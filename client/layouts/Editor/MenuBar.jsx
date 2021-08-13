import React from 'react'

const MenuBar = ({ editor }) => {

    if (!editor) {
        return null
    }
    return (
        <>
            <div className="content-toolbars">
                <button className=''>
                    <i className="bi bi-plus"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    <i className="bi bi-type-bold"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    <i className="bi bi-type-italic"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    <i className="bi bi-type-strikethrough"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'is-active' : ''}
                >
                    <i className="bi bi-code"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'is-active' : ''}
                >
                    <i className="bi bi-card-text"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    <i className="bi bi-list-ul"></i>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    {editor.isActive('codeBlock') ? <i className="bi bi-terminal-fill"></i> : <i className="bi bi-terminal"></i>}
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'is-active' : ''}
                >
                    {editor.isActive('blockquote') ? <i className="bi bi-chat-quote-fill"></i> : <i className="bi bi-chat-quote"></i>}
                </button>
            </div>
        </>
    )
}
export default MenuBar;