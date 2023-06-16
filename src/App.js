import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Trainees from './pages/Trainees';
import Academy from './pages/Academy';
import Trainers from './pages/Trainers';
import Footer from './components/Footer';
import Result from './pages/Result';

function App() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Header />
      <div className='overflow-y-scroll flex-1 bg-slate-200'>
        <div className='max-w-xl mx-auto my-7 top-4 bottom-4'>
          <Routes>
            <Route path='/' element={<Trainees />} />
            <Route path='/trainees' element={<Trainees />} />
            <Route path='/academy' element={<Academy />} />
            <Route path='/trainers' element={<Trainers />} />
            <Route path='/result/:traineeID' element={<Result />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
