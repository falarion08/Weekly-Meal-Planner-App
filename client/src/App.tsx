import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Register from './Register';

import LocalAssistance from './LocalAssistance';
import BasicNutrition from './BasicNutrition';
import BudgetRecepies from './BudgetRecepies';
import SupportContact from './SupportContact';
import MealPlanner from './MealPlanner';
import ShoppingList from './ShoppingList';
import NotesTips from './NotesTips';
import LeftOvers from './LeftOvers';

function App() {
  return (
    <div className="bg-white-500 min-h-screen"> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path ="/login" element={<Login/>}/>
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/assistance" element={<LocalAssistance/>}/>
          <Route path = "/nutrition" element={<BasicNutrition/>} />
          <Route path = "/recepies" element={<BudgetRecepies/>} />
          <Route path = "/support" element= {<SupportContact/>} />
          <Route path = "/planner" element = {<MealPlanner/>}/>
          <Route path = "/shoppingList" element ={<ShoppingList/>}/>
          <Route path = "/notesTips" element={<NotesTips/>}/>
          <Route path = "/leftOvers" element={<LeftOvers/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;