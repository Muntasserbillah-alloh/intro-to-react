import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import store from '../configure-store'
import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
            token: {
              colorPrimary: "#ff9800",
              colorLink: "#ff9800",
              borderRadius: 2,
              fontFamily: "Arial",
            },
        }}
      >
        <Suspense fallback="loading...">
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </Provider>
  );
}
export default App
