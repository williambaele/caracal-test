import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../comps/Hero';
import AdvantagesSection from '../comps/AdvantagesSection';
import Footer from '../comps/Footer';
import Contact from '../comps/Contact';
import SliderCenters from '../comps/SliderCenters';

import About from '../comps/About';
const Page: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero className="w-full h-screen" />
			<AdvantagesSection />
			<About />
			<SliderCenters />
			<Contact />
			<Footer />
		</div>
	);
};

export default Page;
