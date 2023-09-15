import classnames from 'classnames';
import Image from 'next/image';

import Header from './Header';
import Col from './Layout/Col';
import Container from './Layout/Container';

type ColProps = {
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Hero = ({ className }: ColProps) => {
	return (
		<>
			{/* MOBILE VERSION */}
			<div className="relative h-screen md:hidden">
				<Col colStart={[1, 1, 1, 1, 1]} colEnd={[26, 26, 26, 26, 26]}>
					<Image src="/images/Hero.jpg" layout="fill" alt="Hero banner image" className="z-0 object-cover" />
					<Container className="relative z-10">
						<Col colStart={[3, 3, 3, 3, 3]} colEnd={[26, 26, 26, 26, 26]}>
							<Header />
							<div className="flex  h-[calc(100vh-56px)] py-20 ">
								<div className="grid content-between space-y-10 ">
									<h1 className="text-5xl font-bold text-white">
										Every day, everywhere, <br /> you deserve to breathe clean air<span className="text-[#FFC600]">.</span>
									</h1>
									<button className="w-full bg-[#287DE4] rounded-full py-6  text-white">DÉCOUVREZ NOS EXPERTISES</button>
								</div>
							</div>
						</Col>
					</Container>
				</Col>
			</div>

			{/* DESKTOP VERSION */}
			<div className="relative hidden h-screen pt-4 md:block">
				<Col colStart={[1, 1, 1, 1, 1]} colEnd={[26, 26, 26, 26, 26]}>
					<Image src="/images/Hero.jpg" layout="fill" alt="Hero banner image" className="z-0 object-cover" />
					<Container className="relative z-10">
						<Col colStart={[3, 3, 3, 3, 3]} colEnd={[26, 26, 26, 26, 26]}>
							<Header />
							<div className="flex items-end h-screen py-20">
								<div className="flex flex-col space-y-10">
									<h1 className="text-5xl font-bold text-white">
										Every day, everywhere, <br /> you deserve to breathe clean air<span className="text-[#FFC600]">.</span>
									</h1>
									<button className="w-fit bg-[#287DE4] rounded-full p-4 text-white">DÉCOUVREZ NOS EXPERTISES</button>
								</div>
							</div>
						</Col>
					</Container>
				</Col>
			</div>
		</>
	);
};

export default Hero;
