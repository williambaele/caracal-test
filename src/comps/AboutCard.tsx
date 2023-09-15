import classnames from 'classnames';
import Image from 'next/image';

import Col from './Layout/Col';
import Container from './Layout/Container';

type ColProps = {
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const AboutCard = ({ className }: ColProps) => {
	return (
		<div className="relative h-[500px] rounded-xl">
			<Col colStart={[1, 1, 1, 1, 1]} colEnd={[26, 26, 26, 26, 26]}>
				<Image src="/images/Frame-1068.png" layout="fill" alt="Hero banner image" className="z-0 object-cover rounded-xl" />
				<Container className="relative z-10">
					<Col colStart={[3, 3, 3, 3, 3]} colEnd={[26, 26, 26, 26, 26]}>
						<div className="absolute p-3 bg-blue-500 rounded-full cursor-pointer top-4 right-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" className="bi bi-arrow-right" viewBox="0 0 16 16">
								<path
									fill-rule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
								/>
							</svg>
						</div>
						<div className="flex items-end h-[500px] pb-6">
							<div className="flex flex-col space-y-4">
								<h3 className="text-3xl font-bold text-white">Notre engagement sociétal</h3>
								<p className="text-sm text-gray-300">Malesuada nisi, nisl eleifend sed nulla vel scelerisque dictum orci. Rutrum ut elit rhoncus, cursus lacus elit tempus.</p>
							</div>
						</div>
					</Col>
				</Container>
			</Col>
		</div>
	);
};

export default AboutCard;
