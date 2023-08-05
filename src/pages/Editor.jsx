import React from 'react'
import { Header } from '../components'
import {HtmlEditor, IMAGE, Image, Inject, LINK, Link, QuickToolbar,RichTextEditorComponent, Toolbar, ToolbarAction} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
const Editor = () => {
  return (
    <div className='m-2 md:m-10 mt-24
    p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData/>
      <Inject services={[HtmlEditor,Image,QuickToolbar,Toolbar,Link]}/>
      </RichTextEditorComponent>
      </div>
  )
}
export default Editor
