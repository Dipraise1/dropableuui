import GridEg from './../components/gridEg/index';
import HorizontalEg from './../components/horizontalEg/index';
import './../styles/App.css';
import GridSwap from './gridSwapEg';

function App() {
  return (
    <div className={['App'].join(' ')}>
      <div className='appContainer'>
        <div>
        <HorizontalEg />
        </div>
        
        <div className='grid-egs'>
          <div>
         
           
          </div>
          <div style={{marginTop: '48px'}}>
          
            <GridSwap />
            <GridEg />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
