import { Route, Routes } from 'react-router-dom';
import DisplayFullResult from './DisplayFullResult/DisplayFullResult';
import DisplayResult from './DisplayResult/DisplayResult';
import InsertResult from './InsertResult/InsertResult';

function App() {
  return (
   <>
    <Routes>
        <Route path='/' element={<InsertResult/>} />
        <Route path='/result' element={<DisplayResult/>} />
        <Route path='/fullresult/:id' element={<DisplayFullResult/>} />
    </Routes>
   </>
  );
}

export default App;
