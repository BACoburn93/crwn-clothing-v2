import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  const Shop = () => {
    return <h1>I am the Shop Page</h1>
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        {/* index means that we also get the Route with it when we render the parent as just what the parent renders as */}
      </Route>

    </Routes>
  );
};

export default App;
