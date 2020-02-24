import Layout from '../components/Layout'
import Superstar from '../components/Superstar'
import Match from '../components/Match'
import events from '../data/events.json'
import superstars from '../data/superstars.json'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const toggleNextElement = (element: HTMLInputElement) => {
  const target = (element as HTMLInputElement).nextElementSibling as HTMLElement
  target.hidden = !target.hidden
}

export default function Index() {
  return (
    <Layout>
      {events.map((event) => {
        return (
          <div style={layoutStyle}>
            <h2 style={{cursor:'pointer'}} onClick={(e) => toggleNextElement(e.target as HTMLInputElement)}>{event.title}</h2>
            <div hidden>
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
