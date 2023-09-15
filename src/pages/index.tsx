import type { NextPage } from 'next';
import Head from 'next/head';

import About from '../comps/About';
import AdvantagesSection from '../comps/AdvantagesSection';
import Contact from '../comps/Contact';
import Footer from '../comps/Footer';
import Hero from '../comps/Hero';
import SliderCenters from '../comps/SliderCenters';
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
