import { useState } from "react";
import Shop from './Shop.jsx'
import Garden from './Garden.jsx'

function App() {
  const [location, setLocation] = useState("shop");

  return (
    <div className="flex min-h-screen w-screen items-center justify-center"> {/* full screen */}
      {(location === "shop") ? <Shop setLocation={setLocation} /> : <Garden setLocation={setLocation} />}
    </div>
  )
}

export default App
