import Superstar from '../components/Superstar'

const Match = (props) => {
  const regex = /(__[A-Za-z0-9_]*)/g
  const matchWords = (props.match.match || "").split(regex)
  const resultWords = (props.match.result || "").split(regex)

  // const matchText = props.match.match.replace(g, <Superstar identifier="x">)
  return (
    <div style={{margin:'4%', wordBreak:'break-all'}}>
      <h3 style={{borderBottom: '1px solid'}}>{props.number}. {props.match.title}</h3>
      <p>
        {matchWords.map((word) => {
          if (word.startsWith("__")) {
            return (<Superstar identifier={word} superstars={props.superstars}/>)
          } else {
            return (word)
          }
        })}
      </p>
      <p>→
        {resultWords.map((word) => {
          if (word.startsWith("__")) {
            return (<Superstar identifier={word} superstars={props.superstars}/>)
          } else {
            return (word)
          }
        })}
      </p>
    </div>
  )
}
  
export default Match