import './styles/styles.scss';
import Header from './components/Header'
import Feed from './components/Feed'
import Stocks from './components/Stocks'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__container">
        <Feed />
        <Stocks />
      </div>
    </div>
  );
}

export default App;
