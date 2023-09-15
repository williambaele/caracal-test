import classnames from 'classnames';
import Image from 'next/image';
import Container from './Layout/Container';
import Col from './Layout/Col';

type ColProps = {
	children: React.ReactNode;
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const AdvantagesSection = ({ className }: ColProps) => {
	const cards = [
		{
			name: 'Filtration',
			description: 'Lorem ipsum',
			path: '/',
			image: <Image src="/images/Filtration.svg" width={90} height={90} loading="lazy" alt="Hero banner image" />,
		},
		{
			name: 'Protective',
			description: 'Lorem ipsum',
			path: '/',
			image: <Image src="/images/Protective.svg" width={90} height={90} loading="lazy" alt="Hero banner image" />,
		},
		{
			name: 'Lighting',
			description: 'Lorem ipsum',
			path: '/',
			image: <Image src="/images/Lighting.svg" width={90} height={90} loading="lazy" alt="Hero banner image" />,
		},
	];

	return (
		<>
			<div className="bg-[#07205F] w-full py-10 md:hidden">
				<Container>
					<Col colStart={[3, null, 18, null, 14]} colEnd={[25, null, 24, null, 27]}>
						<ul className="inline w-full mx-auto space-y-4">
							{cards.map((card, index) => (
								<div key={index} className="grid grid-cols-3 gap-4 p-6 bg-[#05194C] rounded-lg items-center">
									{card.image}
									<h3 className="text-xl font-bold text-white">{card.name}</h3>
									<div className="flex justify-center arrow-mobile">
										<Image src="/images/arrow.png" className="cursor-pointer normal-arrow-mobile" width={40} height={40} loading="lazy" alt="arrow redirection" />
										<Image src="/images/arrowDown.png" className="hidden cursor-pointer hover-arrow-mobile" width={40} height={40} loading="lazy" alt="arrow redirection (hover)" />
									</div>
								</div>
							))}
						</ul>
					</Col>
				</Container>
			</div>
			<div className="bg-[#07205F] w-full py-10 hidden md:block">
				<Container>
					<Col colStart={[null, null, 2, 1, 1]} colEnd={[null, null, 24, null, 26]}>
						<div className="flex items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-dash-lg" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
							</svg>
							<p className="text-sm font-light text-white">TORTOR</p>
						</div>
					</Col>

					<Col colStart={[null, null, 2, 2, 2]} colEnd={[null, null, 24, null, 26]}>
						<div className="py-6 space-y-10">
							<h2 className="w-1/2 text-3xl font-bold text-white">Partout, au quotidien, vous méritez de respirer un air purifié.</h2>
							<div className="grid grid-cols-3 gap-4">
								{cards.map((card, index) => (
									<div key={index} className="space-y-6 cursor-pointer flex flex-col items-center justify-center py-10 bg-[#05194C] hover:bg-[#FFC600] hover:scale-105 rounded-lg">
										{card.image}
										<h3 className="text-lg font-bold text-white">{card.name}</h3>
										<a href={card.path}>
											<div className="arrow">
												<Image src="/images/arrow.png" className="normal-arrow" width={32} height={32} loading="lazy" alt="arrow redirection" />
												<Image src="/images/arrowDown.png" className="hidden hover-arrow" width={32} height={32} loading="lazy" alt="arrow redirection (hover)" />
											</div>
										</a>
									</div>
								))}
							</div>
						</div>
					</Col>
				</Container>
			</div>
		</>
	);
};

export default AdvantagesSection;
