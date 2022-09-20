import './App.css';
import { Button , Spinner , Input} from '@chakra-ui/react'
import DisplayJohn, {Johnsprofile} from './components/DisplayJohn';

function App() {
  return (
    <div className='app'>
      <h1>Hello Mr.Oat</h1>
      <div className='button'>
      <Button colorScheme={'blue'} size= 'sm'>Button!</Button>
      <Button colorScheme={'red'} size= 'lg'>Button!</Button>
      <Button colorScheme={'green'} size= 'xl'>Button!</Button>
      </div>
      
      <div className='spiner'>
        <Spinner color='red.500' size={'sm'}></Spinner>
        <Spinner color='blue' size={'xl'}></Spinner>
        <Spinner color='green' size={'lg'}></Spinner>
      </div>

      <div className='input'>
        <Input size={'lg'} type ='text' placeholder='Text'></Input>
        <Input size={'lg'} type ='number' placeholder='Number'></Input>
        <Input size={'lg'} type ='password' placeholder='password'></Input>
      </div>

      <div className='Ex-2'>
        <DisplayJohn/>
        <Johnsprofile/>
      </div>
      
    </div>
  );
}

export default App;
