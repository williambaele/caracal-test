import '../styles/global.css';

import localFont from '@next/font/local';
import type { AppProps } from 'next/app';

const jetbrains = localFont({
	src: [
		{
			path: '../../public/fonts/GT-Haptik-Regular-2.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GT-Haptik-Regular-2.ttf',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--jetbrains',
});

const karla = localFont({
	src: [
		{
			path: '../../public/fonts/GT-Haptik-Regular-2.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--karla',
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={`${karla.variable} ${jetbrains.variable} font-karla`}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
