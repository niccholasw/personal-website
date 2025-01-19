import { motion } from "motion/react";

interface TechIconProps {
	src: string;
	alt: string;
	width?: string;
	height?: string;
}

const TechIcon = ({ src, alt, width = "50", height = "50" }: TechIconProps) => {
	return (
		<motion.div
			className="hidden xl:block rounded-lg justify-center items-center"
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				scale: 1.25,
				transition: {
					duration: 1.5,
				},
			}}
			viewport={{
				amount: 0.8,
				margin: "-250px 0px -250px 0px", //top/right/bottom/left
			}}>
			<div>
				<img src={src} alt={alt} width={width} height={height} />
			</div>
		</motion.div>
	);
};

export default TechIcon;
