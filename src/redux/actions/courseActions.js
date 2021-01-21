import { CREATE_COURSE } from "../constants/constants";

export const createCourse = (course) => {
	return {
		type: CREATE_COURSE,
		course,
	};
};
