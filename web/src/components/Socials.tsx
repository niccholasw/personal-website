import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const Socials = () => {
	return (
		<motion.div
			className="w-52 h-12 bg-purple-500 rounded-lg flex justify-center items-center gap-6"
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
				scale: 1.25,
				transition: {
					duration: 1.25,
				},
			}}
			viewport={{
				amount: 0.8,
				// margin: "-4%",
				// once: true,
			}}>
			<a
				href="https://github.com/niccholasw"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white hover:text-gray-200 transition-colors">
				<Github size={24} />
			</a>
			<a
				href="https://www.linkedin.com/in/nicholaswww/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white hover:text-gray-200 transition-colors">
				<Linkedin size={24} />
			</a>
		</motion.div>
	);
};

export default Socials;
