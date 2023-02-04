import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Education from './Education';

const Resume = () => {
	return (
		<StyledResume>
			<About />
			<Experience />
			<Education />
		</StyledResume>
	);
};
export default Resume;

const StyledResume = styled.div``;
