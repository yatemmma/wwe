const iconStyle = {
  'width': '24px',
  'height': '24px',
  'object-fit': 'cover',
  'vertical-align': 'middle',
  'border-radius': '12px',
  'margin-top': '-4px',
  'margin-left': '4px'
}

export const SuperstarIcon = (props) => {
  const key = props.identifier.substring(2)
  const superstar = props.superstars[key] || {}
  const image = superstar.image || 'no_image.jpg'

  return (<img src={'/'+image} style={iconStyle} />)
}

export default SuperstarIcon