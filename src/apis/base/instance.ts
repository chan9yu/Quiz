import axios, { CreateAxiosDefaults } from 'axios';

import { API_URL } from '../../constants';

export const createInstance = (path?: string, config?: CreateAxiosDefaults) => {
	const instance = axios.create({
		baseURL: `${API_URL}${path}`,
		...config
	});

	return instance;
};
