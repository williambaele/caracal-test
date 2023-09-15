import classnames from 'classnames';
import Image from 'next/image';
import Container from './Layout/Container';
import Col from './Layout/Col';
import Header from './Header';
http: type ColProps = {
	children: React.ReactNode;
	className?: string;
};

const styles = classnames('grid', 'w-full', 'grid-cols-container');

const SliderCenters = ({ className }: ColProps) => {
	return (
		<>
			<div className="bg-[#07205F] w-full py-10 md:hidden">
				<Container>
					<Col colStart={[3, null, 18, null, 14]} colEnd={[25, null, 24, null, 27]}>
						<div className="flex flex-col space-y-10">
							<div className="flex flex-col space-y-2">
								<div className="flex items-center gap-4">
									<div className="w-8 border-t border-gray-300"></div>
									<p className="text-[#287DE4] text-sm">TORTOR</p>
								</div>
								<h2 className="text-2xl text-white">Ultrices neque, vitae egestas pellentesque mattis</h2>
							</div>
							{/*CARD */}
							<div className="flex flex-col bg-white rounded-2xl">
								<div className="relative h-40">
									<Image src="/images/cardImg.png" layout="fill" className="rounded-t-2xl" alt="Logo Deltrian SVG" />
								</div>
								<div className="p-4 space-y-2">
									<div className="flex gap-4">
										<div className="flex items-center gap-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00A8EA" class="bi bi-globe-americas" viewBox="0 0 16 16">
												<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
											</svg>
											<p className="text-[#00A8EA] text-xs">Filtration</p>
										</div>
										<p className="text-xs text-gray-400">26.05.2022</p>
									</div>
									<h2 className="text-xl font-bold">At lacus porttitor orci cum eu lacus sit</h2>
									<p className="text-gray-400">How do you create compelling presentations that wow your colleagues and impress your managers ?</p>
									<div className="flex justify-end py-4">
										<div className="border-b border-[#287DE4] px-2">LIRE PLUS</div>
									</div>
								</div>
							</div>
							{/* END CARD */}
							<div className="flex justify-center pt-10">
								<div className="border-b border-[#287DE4] px-2 text-white">SED NEQUE CURSUS</div>
							</div>
						</div>
					</Col>
				</Container>
			</div>

			{/* DESKTOP VERSION*/}
			<div className="bg-[#07205F] w-full py-10 hidden md:block">
				<Container>
					<Col colStart={[3, 3, 3, 3, 3]} colEnd={[25, null, 24, null, 27]}>
						<div className="flex flex-col space-y-6">
							<p className="text-[#287DE4]">TORTOR</p>
							<div className="flex justify-between w-full ">
								<h2 className="text-3xl text-white">
									Ultrices neque, vitae <br /> egestas pellentesque mattis
								</h2>
								<div className="flex items-end justify-center">
									<div className="border-b border-[#287DE4] px-2 text-white text-xs cursor-pointer">
										<p>SED NEQUE CURSUS</p>
									</div>
								</div>
							</div>
							{/*CARD */}
							<div className="grid grid-cols-3 gap-4">
								<div className="flex flex-col bg-white rounded-2xl">
									<div className="relative h-40">
										<Image src="/images/cardImg.png" layout="fill" className="rounded-t-2xl" alt="Logo Deltrian SVG" />
									</div>
									<div className="p-4 space-y-2">
										<div className="flex gap-4">
											<div className="flex items-center gap-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00A8EA" class="bi bi-globe-americas" viewBox="0 0 16 16">
													<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
												</svg>
												<p className="text-[#00A8EA] text-sm">Filtration</p>
											</div>
											<p className="text-gray-400">26.05.2022</p>
										</div>
										<h2 className="text-xl font-bold">At lacus porttitor orci cum eu lacus sit</h2>
										<p className="text-gray-400">How do you create compelling presentations that wow your colleagues and impress your managers ?</p>
										<div className="flex justify-end py-4">
											<div className="border-b border-[#287DE4] px-2">LIRE PLUS</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col bg-white rounded-2xl">
									<div className="relative h-40">
										<Image src="/images/cardImg.png" layout="fill" className="rounded-t-2xl" alt="Logo Deltrian SVG" />
									</div>
									<div className="p-4 space-y-2">
										<div className="flex gap-4">
											<div className="flex items-center gap-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00A8EA" class="bi bi-globe-americas" viewBox="0 0 16 16">
													<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
												</svg>
												<p className="text-[#00A8EA] text-sm">Filtration</p>
											</div>
											<p className="text-gray-400">26.05.2022</p>
										</div>
										<h2 className="text-xl font-bold">At lacus porttitor orci cum eu lacus sit</h2>
										<p className="text-gray-400">How do you create compelling presentations that wow your colleagues and impress your managers ?</p>
										<div className="flex justify-end py-4">
											<div className="border-b border-[#287DE4] px-2">LIRE PLUS</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col bg-white rounded-2xl">
									<div className="relative h-40">
										<Image src="/images/cardImg.png" layout="fill" className="rounded-t-2xl" alt="Logo Deltrian SVG" />
									</div>
									<div className="p-4 space-y-2">
										<div className="flex gap-4">
											<div className="flex items-center gap-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00A8EA" class="bi bi-globe-americas" viewBox="0 0 16 16">
													<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
												</svg>
												<p className="text-[#00A8EA] text-sm">Filtration</p>
											</div>
											<p className="text-gray-400">26.05.2022</p>
										</div>
										<h2 className="text-xl font-bold">At lacus porttitor orci cum eu lacus sit</h2>
										<p className="text-gray-400">How do you create compelling presentations that wow your colleagues and impress your managers ?</p>
										<div className="flex justify-end py-4">
											<div className="border-b border-[#287DE4] px-2">LIRE PLUS</div>
										</div>
									</div>
								</div>
							</div>
							{/* END CARD */}
						</div>
						<div className="flex w-full gap-3 py-6 ">
							<Image src="/images/leftArrow.png" width={40} height={40} alt="Left arrow" className="cursor-pointer" />
							<Image src="/images/rightArrow.png" width={40} height={40} alt="Logo Deltrian SVG" className="cursor-pointer" />
						</div>
					</Col>
				</Container>
			</div>
		</>
	);
};

export default SliderCenters;
