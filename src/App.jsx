import { useState } from "react";
import Shop from './Shop.jsx'
import Garden from './Garden.jsx'

function App() {
  const [location, setLocation] = useState("shop");
  const [money, setMoney] = useState(50);

  return (
    <div className="flex min-h-screen w-screen items-center justify-center"> {/* full screen */}
      {(location === "shop") ? <Shop setLocation={setLocation} money={money} setMoney={setMoney} /> : <Garden setLocation={setLocation} money={money} setMoney={setMoney} />}
    </div>
  )
}

export default App
