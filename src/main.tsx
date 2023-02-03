import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import FormContextProvider from './store/formContext';

const theme = {
	colors: {
		inputBorder: '#BCBCBC',
		offBlack: '#1a1a1a',
		formBtn: ' #6B40E3',
		formBtnHover: '#7949FF;',
	},
	fontSize: {
		label: '16px',
		formBtn: '14px',
	},
	fontWeight: {
		label: 500,
	},
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<FormContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FormContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
