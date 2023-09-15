import classnames from 'classnames';
import Image from 'next/image';
import Col from './Layout/Col';

type ColProps = {
	children: React.ReactNode;
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Header = ({ className }: ColProps) => {
	const menu = ['Accueil', 'Filtration', 'Protective', 'Lighting', 'News', 'Á propos', 'Air quality'];

	return (
		<>
			<header className="hidden md:block">
				<Col colStart={[3, 3, 3, 3, 3]} colEnd={[24, 24, 24, 24, 26]}>
					<div className="flex items-center justify-between">
						<Image src="/images/white.svg" width={100} height={100} alt="Logo Deltrian SVG" />
						<div className="flex items-center gap-4">
							<ul className="flex gap-6">
								{menu.map((item, index) => (
									<li key={index} className="text-white">
										{item}
									</li>
								))}
							</ul>
							<div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50/20">
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#FFFFFF" className="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</div>
							<button className="w-fit bg-[#287DE4] rounded-full p-2 text-white text-xs">BESOIN D'AIDE ?</button>
						</div>
					</div>
				</Col>
			</header>
			<header className="md:hidden">
				<Col colStart={[3, 3, 3, 3, 3]} colEnd={[24, 24, 24, 24, 26]}>
					<div className="flex items-center justify-between h-14">
						<Image src="/images/white.svg" width={150} height={150} alt="Logo Deltrian SVG" />
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" className="bi bi-list-nested" viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
					</div>
				</Col>
			</header>
		</>
	);
};

export default Header;
