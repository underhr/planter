import Toolkit from './Toolkit.jsx'
import Stool from './Stool.jsx'
import Plant from './Plant.jsx'


export default function Shop({ setLocation }) {
    return(
      <div className={`max-h-[360px] w-full max-w-[500px] aspect-3/5 bg-[#c0aa8a] rounded-2xl p-4 bg-cover relative cursor`} style={{backgroundImage: `url('/planter/images/shop-bg.png')`}}> {/* game screen */}

        <img src={`/planter/images/shop-btn.png`} alt={`shop button`} className="absolute top-0 left-3 h-25" onClick={() => setLocation('garden')}/>

        <img src="/planter/images/window.png" alt="window" className="absolute -top-6 left-30 h-40"/>

        <Toolkit />

        <Stool bottom={16} left={10}/>
        <Plant bottom={112} left={10} stage="adult" />

        <Stool bottom={40} left={120}/>
        <Plant bottom={136} left={120} stage="adult" />

        <img src="/planter/images/table.png" alt="table" className="absolute bottom-8 left-52 h-40"/>
        <Plant bottom={158} right={20} stage="adult" />
        <Plant bottom={158} right={140} stage="adult" />

      </div>
    );
}