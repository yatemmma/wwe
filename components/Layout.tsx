const layoutStyle = {
  backgroundColor: '#333',
  color: 'white',
  'line-height': '36px',
  margin: '0px',
  fontFamily: "‘San Francisco’, ‘Helvetica Neue’, HelveticaNeue, ‘Segoe UI’, Helvetica, ’游ゴシック Medium’, ‘Yu Gothic Medium’, ‘游ゴシック’, ‘Yu Gothic’, ‘游ゴシック体’, YuGothic, ‘Hiragino Kaku Gothic ProN’, HiraKakuProN-W3, ‘Noto Sans JP’, sans-serif;"
}
  
const Layout = props => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <title>WWE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style={layoutStyle}>
      <div>
        {props.children}
      </div>
    </body>
  </html>
)
  
export default Layout