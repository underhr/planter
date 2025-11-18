export default function Plant({ stage, bottom, left, right }) {
  return(
    <img src={`/planter/images/plants/${stage}.png`} alt={`${stage} plant`} className={`absolute h-30`} style={{bottom, left, right}} />
  );
}