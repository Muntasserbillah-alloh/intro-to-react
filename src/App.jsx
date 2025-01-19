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
              colorPrimary: "#3AA39F",
              colorLink: "#3AA39F",
              borderRadius: 2,
              fontFamily: "proxima, Arial",
            },
            components:{
              Button:{
                defaultBorderColor: "#3AA39F",
                colorText: "#3AA39F"
              }
            }
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
