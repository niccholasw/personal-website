import { motion } from "framer-motion";
import Socials from "./components/Socials";
import TechIcon from "./components/TechIcon";
import CursorTrail from "./components/CursorTrail";

const App = () => {
	const techIcons = [
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			alt: "Java",
			position: "pt-[39%] pl-[30%]",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			alt: "React",
			position: "pt-[42%] pl-[80%]",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			alt: "Python",
			position: "pt-[60%] pl-[87%]",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			alt: "JavaScript",
			position: "pt-[63%] pl-[35%]",
		},
		{
			src: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/laravel.svg",
			alt: "Laravel",
			position: "pt-[52.5%] pl-[10%]",
		},
		{
			src: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/mongodb.svg",
			alt: "Mongo-DB",
			position: "pt-[75%] pl-[18.5%]",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			alt: "TypeScript",
			position: "pt-[50%] pl-[70%]",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
			alt: "Node.js",
			position: "pt-[70%] pl-[60%]",
		},
		{
			src: "https://cdn.jsdelivr.net/npm/devicons@1.8.0/!SVG/php.svg",
			alt: "Php",
			position: "pt-[74%] pl-[80%]",
		},
	];

	return (
		<div className="h-[300vh] w-full bg-gradient-to-b from-pink-200 to-purple-200">
			<CursorTrail />
			{/* header */}
			<motion.div
				className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none z-40"
				whileHover={{ scale: 1.2 }}
				transition={{ duration: 0.5 }}>
				<h1 className="text-4xl font-bold font-mono">Nicholas Wilson</h1>
				<h1 className="text-xl font-bold font-mono py-2">
					Innovate, Engineer, Create
				</h1>
			</motion.div>
			{/* tech stack icons */}
			<div className="relative">
				{techIcons.map((icon, index) => (
					<div key={index} className={`absolute ${icon.position}`}>
						<TechIcon src={icon.src} alt={icon.alt} width="80" height="80" />
					</div>
				))}
			</div>
			{/* footer */}
			<div className="h-4/5 pl-1/2">
				<Socials />
			</div>
		</div>
	);
};

export default App;
