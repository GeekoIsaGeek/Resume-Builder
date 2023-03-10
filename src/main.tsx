import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FormContextProvider from './store/formContext';

const theme = {
	colors: {
		inputBorder: '#BCBCBC',
		offBlack: '#1a1a1a',
		formBtn: ' #6B40E3',
		formBtnHover: '#7949FF;',
		previewTitle: ' rgba(249, 59, 29, 1)',
		previewIcon: '#898989',
		validationSucceed: ' #98E37E',
		validationFailed: '#EF5050',
	},
	fontSize: {
		label: '16px',
		formBtn: '14px',
		previewName: '34px',
		previewTitle: '18px',
	},
	fontWeight: {
		label: 500,
	},
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<FormContextProvider>
				<HashRouter>
					<App />
				</HashRouter>
			</FormContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
