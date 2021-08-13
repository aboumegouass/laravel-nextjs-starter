import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import { useState } from 'react'

function InsertCode({nodeViewProps}) {
    const [languages, setlanguages] = useState([])
    return (
        <>
            <NodeViewWrapper class="code-block">
                <select v-model="selectedLanguage">
                    <option value="null">auto</option>
                    <option value='css'>css</option>
                </select>
                <pre><NodeViewContent as="code" /></pre>
            </NodeViewWrapper>
        </>
    )
}

export default InsertCode
