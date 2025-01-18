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
              colorPrimary: "#34a0a4",
              colorLink: "#34a0a4",
              borderRadius: 2,
              fontFamily: "Arial",
            },
            components:{
              Button:{
                defaultBorderColor: "#34a0a4",
                colorText: "#34a0a4"

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
