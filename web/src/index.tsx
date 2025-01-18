import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Socials from "./components/Socials";
import TechIcon from "./components/TechIcon";
import CursorTrail from "./components/CursorTrail";

const TypewriterText = () => {
	const [text, setText] = useState("");
	const fullText = "Innovate, Engineer, Create.";
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		if (isTyping) {
			if (text.length < fullText.length) {
				const timeout = setTimeout(() => {
					setText(fullText.slice(0, text.length + 1));
				}, 100); // Adjust typing speed here
				return () => clearTimeout(timeout);
			} else {
				setIsTyping(false);
				// Reset after a delay
				setTimeout(() => {
					setText("");
					setIsTyping(true);
				}, 2000); // Wait before restarting
			}
		}
	}, [text, isTyping]);

	return (
		<div className="relative inline-block">
			<span className="text-xl font-bold font-mono">{text}</span>
			<motion.span
				className="absolute ml-1 -mr-1 font-mono"
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.8, repeat: Infinity, ease: "steps(1)" }}>
				|
			</motion.span>
		</div>
	);
};

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
				className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none z-999"
				whileHover={{ scale: 1.2 }}
				transition={{ duration: 0.5 }}>
				<h1 className="text-4xl font-bold font-mono">Nicholas Wilson</h1>
				<div className="py-2">
					<TypewriterText />
				</div>
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
			<div className="flex justify-center items-center pt-[140%] z-50">
				<Socials />
			</div>
		</div>
	);
};

export default App;
