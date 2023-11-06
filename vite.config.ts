import react, { BabelOptions } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';


const babelOptions: BabelOptions = {
	plugins: ['babel-plugin-styled-components']
};

const userConfig = defineConfig({
	base: '/quiz_app',
	server: {
		host: 'localhost',
		port: 3035
	},
	plugins: [react({ babel: babelOptions })],
});

export default userConfig;
