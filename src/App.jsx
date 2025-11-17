
function Stool({ bottom, left, right }) {
  return(
    <img src="/planter/images/stool.png" alt="stool" className={`absolute h-30`} style={{bottom, left, right}}/>
  );
}

function Plant({ stage, bottom, left, right }) {
  return(
    <img src={`/planter/images/plants/${stage}.png`} alt={`${stage} plant`} className={`absolute h-30`} style={{bottom, left, right}} />
  );
}

function App() {

  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <div className="max-h-[360px] w-full max-w-[500px] aspect-3/5 bg-[#c0aa8a] rounded-2xl p-4 bg-[url('/planter/images/background.png')] bg-cover relative">

        <img src="/planter/images/window.png" alt="window" className="absolute top-0 left-25 h-40"/>

        <Stool bottom={16} left={24}/>
        <Plant bottom={112} left={24} stage="teen" />

        <Stool bottom={40} left={160}/>
        <Plant bottom={136} left={144} stage="baby" />
        <Plant bottom={136} left={180} stage="child" />

        <Stool bottom={24} right={24}/>
        <Plant bottom={124} right={24} stage="adult" />

      </div>
    </div>
  )
}

export default App
