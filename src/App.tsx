import Home from './components/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import BuiltResume from './components/BuiltResume';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resume/personal-info' element={<PersonalInfo />} />
				<Route path='/resume/experience' element={<Experience />} />
				<Route path='/resume/education' element={<Education />} />
				<Route path='/resume/preview' element={<BuiltResume />}></Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
