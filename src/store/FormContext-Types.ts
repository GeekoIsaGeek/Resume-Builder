export interface Experience {
	position: {
		value: string;
		valid: boolean;
	};
	employer: {
		value: string;
		valid: boolean;
	};
	start_date: {
		value: string;
		valid: boolean;
	};
	due_date: {
		value: string;
		valid: boolean;
	};
	description: {
		value: string;
		valid: boolean;
	};
}

export interface Education {
	institute: {
		value: string;
		valid: boolean;
	};
	degree: {
		value: string;
		valid: boolean;
	};
	due_date: {
		value: string;
		valid: boolean;
	};
	description: {
		value: string;
		valid: boolean;
	};
}

export interface Resume {
	name: {
		value: string;
		valid: boolean;
	};
	surname: {
		value: string;
		valid: boolean;
	};
	email: {
		value: string;
		valid: boolean;
	};
	phone_number: {
		value: string;
		valid: boolean;
	};
	experiences: Experience[];
	educations: Education[];
	image: {
		value: string;
		valid: boolean;
	};
	about_me: {
		value: string;
		valid: boolean;
	};
}

export interface FormCtx {
	forms: string[];
	currentForm: {
		get: number;
		set: React.Dispatch<React.SetStateAction<number>>;
	};
	resumeData: Resume;
	setResumeData: React.Dispatch<React.SetStateAction<Resume>>;
	validationFailed: boolean;
	setValidationFailed: React.Dispatch<React.SetStateAction<boolean>>;
	isDone: boolean;
	setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
	degrees: Degree[];
	setDegrees: React.Dispatch<React.SetStateAction<Degree[]>>;
}

export interface Degree {
	id: number;
	title: string;
}
