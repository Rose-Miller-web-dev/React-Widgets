import React from "react";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { DndContext } from "@dnd-kit/core";
import DndWrapper from "./components/dnd/DndWrapper";

function App() {

  return (
   <>
       <DndWrapper />
   </>
  )
}

export default App;
