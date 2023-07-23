import { useTranslation } from "react-i18next";
import React, { useState } from "react";
function App() {
  const { t, i18n } = useTranslation('translation1');
  const [hello, setHello] = useState("hello");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const handleButtonClick = () => {
    // Simulate dynamic data from API
    const randomData = Math.random();
    if (randomData < 0.33) {
      setHello("hello");
    } else if (randomData < 0.66) {
      setHello("olla");
    } else {
      setHello("what");
    }
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Change Data</button>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="jp">Japan</option>
      </select>
      <div>{t(hello)}</div>
    </div>
  );
}
export default App;
