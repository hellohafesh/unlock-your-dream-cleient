
import { RouterProvider } from 'react-router-dom';
import { routes } from './AllRoutes/Routes/Routes';
import './App.css';

function App() {
  return (
    <div id="allapp">
      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;
