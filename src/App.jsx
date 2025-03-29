import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import {Dashboard} from './components/Dashboard'
import { SendMoney } from './components/SendMoney';
import { Mainpage } from './components/Mainpage';
function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Mainpage/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/send' element={<SendMoney/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;