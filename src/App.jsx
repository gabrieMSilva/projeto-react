
import './App.css';
import { CarouselContents } from './components/CarouselContents';

import { ContentsCard } from './components/ContentsCard';
import { Forms } from './components/Forms';
import { Header } from './components/Header';
import { Main } from './components/Main';



function App() {
  return (
    <div>

      
      <Header/>
      <Main/>
      <ContentsCard/>
      <CarouselContents/>
      <Forms/>

    </div>
    
    
  );
}

export default App;
