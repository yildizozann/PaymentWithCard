import "./styles.css";
import React, { useState } from "react";
import {
  CardAnimation,
  CardNumber,
  CardName,
  Expire,
  Header,
  Security,
  Submit,
  Footer
} from "./component";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardSecurity, setCardSecurtiy] = useState("");
  const [flip, setFlip] = useState(true);
  const [expire, setExpire] = useState({
    month: "",
    year: ""
  });
  function handleSetExpire(event) {
    const { name, value } = event.target;

    // setExpire({...expire,month:value})
    //if (name === "expireMM") setExpire({ ...expire, month: value });
    //if (name === "expireYY") setExpire({ ...expire, year: value });

    setExpire((prevValue) => {
      if (name === "expireMM") {
        return {
          month: value,
          year: prevValue.year
        };
      } else if (name === "expireYY") {
        return {
          month: prevValue.month,
          year: value
        };
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <div className="main-block">
        <div className="left-block">
          <CardNumber cardNumber={cardNumber} onNumber={setCardNumber} />
          <CardName cardName={cardName} onName={setCardName} />
          <div className="left-bottom">
            <Expire expire={expire} handleSetExpire={handleSetExpire} />
            <Security
              cardSecurity={cardSecurity}
              onSecurity={setCardSecurtiy}
              flipped={flip}
              onsetFlip={setFlip}
            />
          </div>
        </div>
        <CardAnimation
          nameText={cardName}
          numberText={cardNumber}
          month={expire.month}
          year={expire.year}
          security={cardSecurity}
          flipped={flip}
          onsetFlip={setFlip}
        />
      </div>
      <Submit />
      <Footer />
    </div>
  );
}
export default App;
