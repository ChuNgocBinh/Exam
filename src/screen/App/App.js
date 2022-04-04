import styles from './app.module.sass'
import Header from './header/index';
import Content from './content/index';
import '../../styles/main.sass';

function App() {
  return (
    <div className={styles.app}>
      <h1>2nd largest  of Transactions:</h1>
      <p>1.10 ETH</p>
      <div>
        <Header/>
      </div>
      <div>
        <Content/>
      </div>

    </div>
  );
}

export default App;
