export default function Stool({ bottom, left, right }) {
  return(
    <img src="/planter/images/stool.png" alt="stool" className={`absolute h-30`} style={{bottom, left, right}}/>
  );
}