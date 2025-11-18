import Toolkit from './Toolkit.jsx'
import Plant from './Plant.jsx'

export default function Garden({ setLocation }) {
    return(
      <div className={`max-h-[360px] w-full max-w-[500px] aspect-3/5 bg-[#c0aa8a] rounded-2xl p-4 bg-cover relative cursor`} style={{backgroundImage: `url('/planter/images/garden-bg.png')`}}> {/* game screen */}

        <img src={`/planter/images/garden-btn.png`} alt={`garden button`} className="absolute top-0 left-3 h-25" onClick={() => setLocation('shop')}/>

        <Toolkit />

      </div>
    );
}