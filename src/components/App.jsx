import React from "react";
import Dictonary from "./Dictonary";
import emojipedia from "../emojipedia";
import Footer from "./Footer";

function emojiInfo(emojiTerm) {
  return (
    <Dictonary
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>EMOJIPEDIA</span>
      </h1>
      
      <dl className="dictionary">{emojipedia.map(emojiInfo)}</dl>
      <Footer />
    </div>
  );
}

export default App;
