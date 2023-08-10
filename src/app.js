
import '@nutui/nutui-react-taro/dist/style.css'  // 全量引入nutui样式文件
import { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
