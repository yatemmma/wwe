const nameStyle = {
  'margin': '8px'
}

const iconStyle = {
  'width': '36px',
  'height': '36px',
  'object-fit': 'cover',
  'vertical-align': 'middle',
  'border-radius': '18px',
  'margin-top': '-8px',
  'margin-right': '4px'
}

const Superstar = (props) => {
  console.log(props.identifier)
  const key = props.identifier.substring(2)
  const superstar = props.superstars[key] || {}
  const image = superstar.image || 'no_image.jpg'

  return (
    <span style={nameStyle}>
      <img src={'/'+image} style={iconStyle} />
      {superstar.name}
    </span>
  )
}

export default Superstar