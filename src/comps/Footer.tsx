import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Col from './Layout/Col';
import Container from './Layout/Container';

type ColProps = {
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Footer = ({ className }: ColProps) => {
	const desktopMenu = [
		{
			name: 'FILTRATION',
			subMenu: ['Expertise', 'Secteurs', 'Produits', 'Contact'],
		},
		{
			name: 'PROTECTIVE',
			subMenu: ['Expertise', 'Secteurs', 'Produits', 'Contact'],
		},
		{
			name: 'LIGHTING',
			subMenu: ['Expertise', 'Secteurs', 'Produits', 'Contact'],
		},
		{
			name: 'ACCUEIL',
			subMenu: ['Carrières', 'Contact'],
		},
		{
			name: 'A PROPOS',
			subMenu: ['Histoire', 'Locations', 'Management team', 'Valeurs, vision, missions', 'Innovations & certifications', 'CSR', 'Perspective'],
		},
		{
			name: 'ACTUALITÉS',
			subMenu: ['News', 'Press', 'Guide', 'Réalisations', 'WhitePaper'],
		},
	];
	return (
		<>
			<div className="bg-[#07205F] w-full py-10  md:hidden">
				<Container>
					<Col colStart={[3, null, 2, 1, 1]} colEnd={[25, null, 24, null, 24]}>
						<div className="w-full space-y-6">
							<h3 className="text-2xl font-bold text-white">
								Inscrivez-vous pour toutes nos actualités et astuces concerant tout types de secteur lié à la filtration<span className="text-[#FFC600]">.</span>
							</h3>

							<div className="relative flex">
								<input type="email" className="text-white w-full p-4 border-2 border-[#287DE4] bg-[#07205F] rounded-sm pr-10" placeholder="Votre adresse e-mail" />
								<div className="absolute top-0 bottom-0 right-0 flex items-center justify-center pr-4">
									<Image src="/images/link.png" width={28} height={28} objectPosition="center" loading="lazy" alt="Icon" />
								</div>
							</div>

							<div className="flex gap-2 text-xs text-white">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-app text-[#287DE4] cursor-pointer" viewBox="0 0 16 16">
									<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
								</svg>
								<p className="text-white">
									I took note of the privacy policy <span className="font-large">Deltrian Privacy Policy</span>
								</p>
							</div>
							<div className="flex items-center gap-4 p-3 px-4 border border-[#287DE4] rounded-3xl w-fit">
								<Image src="/images/Flag_of_Belgium.svg.png" width={28} height={28} className="rounded-full" loading="lazy" alt="BE flag" />
								<p className="text-white text-md">BE - Français</p>
							</div>

							<div className="pt-4 text-xs text-gray-300 border-t border-gray-500">
								<div className="grid grid-cols-3">
									<p>Cookie settings</p>
									<p>Terms & Conditions</p>
									<p>Privacy policy</p>
								</div>
							</div>

							<div className="flex justify-between text-xs text-gray-300">
								<p>2022 Deltrian. All rights reserved.</p>
								<Image src="/images/Group.png" width={50} height={50} className="rounded-full" loading="lazy" alt="BE flag" />
							</div>
						</div>
					</Col>
				</Container>
			</div>
			<div className="bg-[#05194C] w-full hidden md:block">
				<Container>
					<Col colStart={[2, 2, 2, 2, 2]} colEnd={[null, null, 24, null, 26]}>
						<div className="flex justify-between py-10">
							<h3 className="w-1/2 font-bold text-white text-md">
								Inscrivez-vous pour toutes nos actualités et astuces concerant tout types de secteur liés à la filtration<span className="text-[#FFC600]">.</span>
							</h3>
							<div className="w-1/3 space-y-6">
								<div className="relative flex">
									<input type="email" className="text-white w-full p-4 border-2 border-[#287DE4] bg-[#07205F] rounded-sm pr-10" placeholder="Votre adresse e-mail" />
									<div className="absolute top-0 bottom-0 right-0 flex items-center justify-center pr-4">
										<Image src="/images/link.png" width={24} height={24} objectPosition="center" loading="lazy" alt="Icon" />
									</div>
								</div>
								<div className="flex gap-2 text-xs text-white">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-app text-[#287DE4] cursor-pointer" viewBox="0 0 16 16">
										<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
									</svg>
									<p className="text-white">
										I took note of the privacy policy <span className="font-large">Deltrian Privacy Policy</span>
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Container>
			</div>
			<div className="bg-[#07205F] w-full hidden md:block">
				<Container>
					<Col colStart={[2, 2, 2, 2, 2]} colEnd={[null, null, 24, null, 26]}>
						<div className="flex justify-between pt-10">
							{desktopMenu.map((item, index) => (
								<div key={index} className="space-y-4 text-white">
									<h3 className="font-bold">{item.name}</h3>
									<ul>
										{item.subMenu.map((item, index) => (
											<Link key={index} href="/">
												<li className="text-sm font-light text-gray-400">{item}</li>
											</Link>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className="flex justify-end pb-10">
							<div className="flex items-center gap-4 p-3 px-4 border border-[#287DE4] rounded-3xl w-fit">
								<Image src="/images/Flag_of_Belgium.svg.png" width={28} height={28} className="rounded-full" loading="lazy" alt="BE flag" />
								<p className="text-white text-md">BE - Français</p>
							</div>
						</div>
					</Col>
				</Container>
				<div className="w-full h-full text-xs text-gray-300 border-t">
					<Container>
						<Col colStart={[2, 2, 2, 2, 2]} colEnd={[null, null, 24, null, 26]}>
							<div className="flex items-center justify-between h-full py-10">
								<Image src="/images/white.svg" width={100} height={200} alt="Logo Deltrian SVG" />
								<div className="flex gap-4 text-gray-400">
									<p>Cookie settings</p>
									<p>Terms & Conditions</p>
									<p>Privacy policy</p>
									<Link href="https://www.caracal.agency/">
										<p>WEBSITE BY CARACAL AGENCY</p>
									</Link>
								</div>
							</div>
						</Col>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Footer;
