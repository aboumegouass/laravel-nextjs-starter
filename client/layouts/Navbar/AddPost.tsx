import { PrimaryButton } from '@/components/Button/Button'
import React, { useState } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ReactComponent from './ProseMirror/Extension'
import MenuBar from '../Editor/MenuBar'
import FooterBar from '../Editor/FooterBar'
import { useRouter } from 'next/router'
import { PlusCircle, X } from 'react-feather';
import { motion } from 'framer-motion'
function AddPost(props) {
    const [isShowAddPost, setisShowAddPost] = useState(false)
    console.log(props);
    const HideAddPostHandle = () => {
        props.onChange(false);
    }
    const router = useRouter()
    const editor = useEditor({
        extensions: [
            ReactComponent,
            StarterKit,
        ],
        content: `<p>skjds dskd sdkh</p>`,
    })
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="add-post-container">
            <div className="add-post-container-inner">
                <div className="container">
                    <motion.div initial={{ y: 80, opacity: 0 }} animate={{  y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="app-add-post">
                        <div className="app-header d-flex">
                            <h1 className="title"><PlusCircle /> إضافة سؤال</h1>
                            <button className="static-butt" onClick={HideAddPostHandle}><X /></button>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="form-wrap">
                                    <label className="block-aside" htmlFor="form_title">عنوان السؤال</label>
                                    <input type="text" placeholder="عنوان السؤال" id="form_title" className="form-input xs" />
                                    <p className="form-note">يجب ان توضح السؤال لتتمكن من الحصول على إجابة</p>
                                </div>
                                <div className="form-wrap mt-2">
                                    <label className="block-aside" htmlFor="form_category">اختر المجتمع</label>
                                    <select id="form_category" className="form-input xs">
                                        <option value="0">تصميم المواقع</option>
                                        <option value="1">برمجة الموقع</option>
                                        <option value="2">ريادة الأعمال</option>
                                        <option value="3">تسويق</option>
                                    </select>
                                </div>

                                <hr />
                                <div className="form-wrap">
                                    <PrimaryButton additionalClasses="butt-sm">إضافة</PrimaryButton>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="form-wrap">
                                    <label className="block-aside" htmlFor="form_content">نص السؤال</label>
                                    <div className="app-editor-content">

                                        <MenuBar editor={editor} />
                                        <EditorContent editor={editor} />
                                        <FooterBar editor={editor} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AddPost
