import Home from './Components/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import PersonalInfo from './Components/PersonalInfo';
import Experience from './Components/Experience';
import Education from './Components/Education';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resume/personal-info' element={<PersonalInfo />} />
				<Route path='/resume/experience' element={<Experience />} />
				<Route path='/resume/education' element={<Education />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
