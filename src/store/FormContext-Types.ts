interface Experience {
	position: string;
	employer: string;
	start_date: string;
	due_date: string;
	description: string;
}

interface Education {
	institute: string;
	degree: string;
	due_date: string;
	description: string;
}

interface Resume {
	name: string;
	surname: string;
	email: string;
	phone_number: string;
	experiences: Experience[];
	educations: Education[];
	image: string;
	about_me: string;
}

export interface FormCtx {
	forms: string[];
	currentForm: {
		get: number;
		set: React.Dispatch<React.SetStateAction<number>>;
	};
	resumeData: Resume;
	setResumeData: React.Dispatch<React.SetStateAction<Resume>>;
}
