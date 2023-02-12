import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import { Resume as ResumeTypes } from '../../store/FormContext-Types';

const Resume = ({ data }: { data: ResumeTypes }) => {
	return (
		<StyledResume>
			<About data={data} />
			<Experience data={data} />
			<Education data={data} />
		</StyledResume>
	);
};
export default Resume;

const StyledResume = styled.div``;
