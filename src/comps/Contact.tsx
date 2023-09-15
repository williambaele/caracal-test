import classnames from 'classnames';
import Image from 'next/image';
import Container from './Layout/Container';
import Col from './Layout/Col';
import Link from 'next/link';

http: type ColProps = {
	children: React.ReactNode;
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const Contact = ({ className }: ColProps) => {
	return (
		<>
			<div className="bg-[#287DE4] w-full md:hidden">
				<div className="relative h-60">
					<Image src="/images/QuestionBanner.png" layout="fill" loading="lazy" alt="Contact banner image" />
				</div>
				<Container>
					<Col colStart={[3, 3, 3, 3, 3]} colEnd={[24, 24, 24, 24, 26]}>
						<div className="py-10">
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-white">
									Vous avez des questions ? Notre équipe est là pour vous aider<span className="text-[#FFC600]">.</span>
								</h3>
								<p className="text-lg text-white">Commodo, cras nibh id venenatis diam ornare. Lobortis id sollicitudin ac consequat libero.</p>
								<button className="w-full rounded-full bg-[#07205F] text-white py-6 font-light">CONTACTER NOTRE EXPERT</button>
								<div className="px-4 mx-auto border-b border-white w-fit">
									<p className="my-1 text-center text-white">VOIR NOS CAS D'USAGES</p>
								</div>
							</div>
						</div>
					</Col>
				</Container>
			</div>
			<div className="bg-[#287DE4] w-full hidden md:block">
				<div className="flex">
					<Container>
						<Col colStart={[2, 2, 2, 2, 2]} className="w-full">
							<div className="w-full py-20 space-y-10">
								<h3 className="text-2xl font-bold text-white">
									Vous avez des questions ? <br /> Notre équipe est là pour vous aider<span className="text-[#FFC600]">.</span>
								</h3>
								<p className="w-4/5 text-lg text-white">Commodo, cras nibh id venenatis diam ornare. Lobortis id sollicitudin ac consequat libero.</p>
								<div className="flex items-center gap-6">
									<button className="w-1/2 rounded-full bg-[#07205F] py-4 text-white font-light text-sm">CONTACTER NOTRE EXPERT</button>
									<div className="px-4 mx-auto border-b border-white w-fit h-fit">
										<p className="my-1 text-xs text-center text-white">VOIR NOS CAS D'USAGES</p>
									</div>
								</div>
							</div>
						</Col>
					</Container>
					<Col colStart={[12, 12, 12, 12, 12]} colEnd={[26, 26, 26, 26, 26]} className="w-full">
						<div className="relative h-full">
							<Image src="/images/QuestionBanner.png" layout="fill" loading="lazy" alt="Contact banner image" />
						</div>
					</Col>
				</div>
			</div>
		</>
	);
};

export default Contact;
