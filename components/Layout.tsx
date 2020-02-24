const layoutStyle = {
  backgroundColor: '#333',
  color: 'white'
}
  
const Layout = props => (
  <html>
    <head>
      <title>WWE</title>
    </head>
    <body style={layoutStyle}>
      <div>
        {props.children}
      </div>
    </body>
  </html>
)
  
export default Layout