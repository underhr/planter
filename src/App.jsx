
function Stool({ bottom, left, right }) {
  return(
    <img src="./images/stool.png" alt="stool" className={`absolute bottom-${bottom} left-${left} right-${right} h-30`}/>
  );
}

function Plant({ stage, bottom, left, right }) {
  return(
    <img src={`./images/plants/${stage}.png`} alt={`${stage} plant`} className={`absolute bottom-${bottom} left-${left} right-${right} h-30`} />
  );
}

function App() {

  return (
    <div className="flex min-h-screen w-screen items-center justify-center">
      <div className="max-h-[360px] w-full max-w-[500px] aspect-3/5 bg-[#c0aa8a] rounded-2xl p-4 bg-[url('./images/background.png')] bg-cover relative">

        <img src="./images/window.png" alt="window" className="absolute top-0 left-25 h-40"/>

        <Stool bottom={4} left={6}/>
        <Plant bottom={28} left={6} stage="teen" />

        <Stool bottom={10} left={40}/>
        <Plant bottom={34} left={36} stage="baby" />
        <Plant bottom={34} left={45} stage="child" />

        <Stool bottom={6} right={6}/>
        <Plant bottom={31} right={6} stage="adult" />

      </div>
    </div>
  )
}

export default App
