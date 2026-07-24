import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 16,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
