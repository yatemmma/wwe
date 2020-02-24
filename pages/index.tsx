import Layout from '../components/Layout'
import Superstar from '../components/Superstar'
import SuperstarIcon from '../components/SuperstarIcon'
import Match from '../components/Match'
import events from '../data/events.json'
import superstars from '../data/superstars.json'

const layoutStyle = {
  margin: '2%',
  padding: '2%',
  border: '1px solid #DDD'
}

const toggleNextElement = (elementId: string) => {
  const target = document.getElementById(elementId)
  target.hidden = !target.hidden
}

export default function Index() {
  return (
    <Layout>
      {events.map((event, j) => {
        const eventKey = "event" + j

        const stars = {};
        (event.matches || []).forEach((match) => {
          const matches1 = (match.match || "").match(/(__[A-Za-z0-9_]*)/g) || []
          const matches2 = (match.result || "").match(/(__[A-Za-z0-9_]*)/g) || []
          matches1.concat(matches2).forEach((key) => {
            stars[key] = key
          })
        })
        
        return (
          <div style={layoutStyle}>
            <h2 style={{cursor:'pointer'}} onClick={() => toggleNextElement(eventKey)}>
              {event.title}

              
                {Object.keys(stars).map((superstar) => {
                  return (<SuperstarIcon identifier={superstar} superstars={superstars}/>)
                })}
              
            </h2>
            <div id={eventKey} hidden>
              <p>{event.place}</p>
              <p>commentary: 
                {(event.ringside || []).map((superstar: any) => {
                  return (
                    <Superstar identifier={superstar} superstars={superstars} />
                  )
                })}
              </p>
              {(event.matches || []).map((match, i) => {
                return (
                  <Match match={match} number={i+1} superstars={superstars} />
                )
              })}
            </div>
          </div>
        )
      })}
    </Layout>
  )
}
