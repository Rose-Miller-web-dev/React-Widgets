import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import Translate from "./components/translate"

import global_en from "./translation/en/global.json"
import global_es from "./translation/es/global.json"
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';
import SpeechRec from './components/speechRec';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resourses: {
    en: {
      global: global_en
    },

    es: {
      global: global_es
    }
  }
})

function App() {

  return (

    <>
      <SpeechRec />
    </>
    
  )
}

export default App;
