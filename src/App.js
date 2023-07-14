import './App.css';
import './Hello.css'

import Text from './components/text/Hello';
import Card1 from './components/card/Card1';
import Card2 from './components/card/Card2';
import Card3 from './components/card/Card3';
import Card4 from './components/card/Card4';
import Card5 from './components/card/Card5';

import GetDate, {ShowDate} from './components/date/Date';

console.log(GetDate())  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='list-item'>

          <Card1/>

          <Card2 num='2' message="Hello World! 🥳" date={GetDate()}></Card2>

          <Card3 num='3'>
            <Text/>
          </Card3>

          <Card4 num='4'><Text/><ShowDate/></Card4>
          
          <Card5 num='5' date={<ShowDate/>}/>

        </ul>
      </header>
    </div>
  );
}

export default App;
