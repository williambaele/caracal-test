import classnames from 'classnames';
import Container from './Layout/Container';
import Col from './Layout/Col';
import AboutCard from './AboutCard';
type ColProps = {
	children: React.ReactNode;
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Footer = ({ className }: ColProps) => {
	const numbersPoints = [
		{
			numb: '55+',
			description: 'Tortor parturient justo, scelerisque auctor pelleue laoreet tempus.',
		},
		{
			numb: '1122',
			description: 'Tortor parturient justo, scelerisque auctor pellque laoreet tempus.',
		},
	];

	const certifications = ['ISO 16890', 'EUROVENT', 'ISO 9001', 'ISO 14001', 'Q1 - FORD', 'IECEX 02'];
	return (
		<>
			{/* MOBILE VERSION */}
			<div className="w-full py-10 bg-white md:hidden">
				<Container>
					<Col colStart={[3, null, 2, 1, 1]} colEnd={[25, null, 24, null, 24]}>
						<div className="space-y-6">
							<div>
								<p className="w-full text-[#287DE4]">TORTOR</p>
								<h3 className="text-2xl font-bold">Avec plus de 55 ans d'expérience, nous sommes le garant d'un air plus propre.</h3>
							</div>
							<div className="py-4 space-y-10">
								{numbersPoints.map((item, index) => (
									<div key={index} className="flex items-center gap-4">
										<div className="border-b-4 border-[#287DE4] w-fit px-2 pb-1">
											<p className="text-2xl font-bold">{item.numb}</p>
										</div>
										<p className="text-xs text-gray-600">{item.description}</p>
									</div>
								))}
							</div>
							<p className="text-2xl">Spécialisé dans la filtration de l'air, nous proposons des solutions technologiques avancées pour tous les secteurs d'activité.</p>
							<p className="text-xl text-gray-600">
								Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus. Venenatis lobortis adipiscing proin tortor ullamcorper commodo, pulvinar sed cras. Aliquam id
								euismod eu vestibulum duis enim laoreet platea. Sodales eu gravida commodo, amet sit.
							</p>
							<div className="flex justify-center">
								<button className="border border-[#287DE4] rounded-full w-fit px-16 py-5 mx-auto">NOTRE HISTOIRE</button>
							</div>
							<div className="flex items-end justify-center">
								<div className="border-b border-[#287DE4] px-2  cursor-pointer text-lg">
									<p>NOTRE ADN</p>
								</div>
							</div>
							<AboutCard />
							<div className="py-6 space-y-4">
								<p className="w-full text-[#287DE4]">TORTOR</p>
								<h3 className="text-2xl font-bold">Sit urna vehicula laoreet maecenas urna sed sit.</h3>
							</div>

							{certifications.map((item, index) => (
								<div key={index} className="border border-[#AECBE3] rounded-full px-10 py-4 flex gap-4 w-56 justify-center items-center">
									{item}
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
										<path
											fill-rule="evenodd"
											d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
										/>
									</svg>
								</div>
							))}
							<div className="w-1/4 border-t-4 border-[#287DE4]"></div>
							<p className="text-2xl">Egestas gravida fringilla ipsum feugiat elementum odio sed. Et justo, tempus nisi elit, eu consectetur.</p>
							<p className="text-lg text-gray-600">
								Urna tellus nisi cras cras habitasse sagittis, arcu adipiscing velit. Ultricies mi elementum etiam ridiculus pharetra. Accumsan eu eget lectus risus tellus eu. Aliquam
								ornare eleifend eget orci. Facilisi cursus urna aliquam tempus, egestas sit. Luctus lacus lacus quam augue sed egestas ac venenatis.
							</p>
						</div>
					</Col>
				</Container>
			</div>

			{/* DESKTOP VERSION */}
			<div className="hidden w-full py-20 bg-white md:block">
				<Container>
					<Col colStart={[2, 2, 2, 2, 2]} colEnd={[null, null, 24, null, 26]}>
						<div className="grid w-full h-full grid-cols-2 gap-10">
							<div className="">
								<p className="w-full text-[#287DE4]">TORTOR</p>
								<h3 className="text-2xl font-bold">Avec plus de 55 ans d'expérience, nous sommes le garant d'un air plus propre.</h3>
								<div className="py-8 space-y-10">
									{numbersPoints.map((item, index) => (
										<div key={index} className="flex items-center gap-4">
											<div className="border-b-4 border-[#287DE4] w-fit px-2 pb-1">
												<p className="text-2xl font-bold">{item.numb}</p>
											</div>
											<p className="text-xs text-gray-600">{item.description}</p>
										</div>
									))}
								</div>
							</div>
							<div className="flex flex-col pt-28">
								<p className="text-lg">Spécialisé dans la filtration de l'air, nous proposons des solutions technologiques avancées pour tous les secteurs d'activité.</p>
								<p className="text-gray-600 text-md">
									Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus. Venenatis lobortis adipiscing proin tortor ullamcorper commodo, pulvinar sed cras. Aliquam
									id euismod eu vestibulum duis enim laoreet platea. Sodales eu gravida commodo, amet sit.
								</p>
								<div className="flex items-center gap-6 py-10">
									<button className="border border-[#287DE4] rounded-full px-6 py-4">NOTRE HISTOIRE</button>

									<div className="border-b border-[#287DE4] px-2 cursor-pointer text-lg">
										<p>NOTRE ADN</p>
									</div>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center w-full h-20 bg-[#07205F]">card slider here</div>
						<div className="grid w-full h-full grid-cols-2 gap-10 my-10">
							<div>
								<p className="w-full text-[#287DE4]">TORTOR</p>
								<h3 className="text-2xl font-bold">Sit urna vehicula laoreet maecenas urna sed sit.</h3>
								<div className="pt-10 space-y-4">
									<div className="flex h-10 gap-4">
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											ISO 16890
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											EUROVENT
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
									</div>
									<div className="flex justify-end h-10 gap-4">
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											ISO 16890
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											EUROVENT
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
									</div>
									<div className="flex h-10 gap-4">
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											ISO 16890
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
										<div className="border border-[#AECBE3] rounded-full py-4 flex gap-4 w-40 justify-center items-center">
											EUROVENT
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
												<path
													fill-rule="evenodd"
													d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-col space-y-4 pt-28">
								<div className="w-1/5 border-t-4 border-[#287DE4]"></div>
								<p className="text-lg">Egestas gravida fringilla ipsum feugiat elementum odio sed. Et justo, tempus nisi elit, eu consectetur.</p>
								<p className="text-gray-600 text-md">
									Tortor parturient justo, scelerisque auctor pellentesque laoreet tempus. Venenatis lobortis adipiscing proin tortor ullamcorper commodo, pulvinar sed cras. Aliquam
									id euismod eu vestibulum duis enim laoreet platea. Sodales eu gravida commodo, amet sit.
								</p>
							</div>
						</div>
					</Col>
				</Container>
			</div>
		</>
	);
};

export default Footer;
