import './App.css';
import './Hello.css'

import Text from './components/text/Hello';
import Card from './components/cards/Card';
import Card1 from './components/cards/Card1';
import Card2 from './components/cards/Card2';
import Card3 from './components/cards/Card3';
import Card4 from './components/cards/Card4';
import Card5 from './components/cards/Card5';
import Card6 from './components/cards/Card6';

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

          <Card6 num='6' date={GetDate()}/>

          <Card num='7' message="Hello World! 😁" date={GetDate()}></Card>

          <Card num='' message="Hello World! 📸"/>

          <Card message="Hello World! 📅" date={GetDate()}></Card>

          <Card num='10' date={GetDate()}></Card>

        </ul>
      </header>
    </div>
  );
}

export default App;
