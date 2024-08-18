
import './App.css';
import { CarouselContents } from './components/CarouselContents';
import { ComentsCards } from './components/ComentsCards';
import { ContentsCard } from './components/ContentsCard';
import { Header } from './components/Header';
import { Main } from './components/Main';


function App() {
  return (
    <div className='bg-slate-200 '>

      
      <Header/>
      <Main/>
      <ContentsCard/>
      <CarouselContents/>
      

    </div>
    
    
  );
}

export default App;
