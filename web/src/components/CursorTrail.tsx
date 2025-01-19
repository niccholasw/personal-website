import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorTrail = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
	const trailLength = 20;

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX - 6, y: e.clientY - 6 });
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	// Use a `requestAnimationFrame` loop to update the trail smoothly
	useEffect(() => {
		let animationFrameId: number;

		const updateTrail = () => {
			setTrail((prev) => {
				const newTrail = [...prev, mousePosition];
				if (newTrail.length > trailLength) {
					return newTrail.slice(1);
				}
				return newTrail;
			});

			animationFrameId = requestAnimationFrame(updateTrail);
		};

		updateTrail();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [mousePosition]);

	return (
		<div className="hidden md:block pointer-events-none fixed inset-0 z-49">
			{trail.map((point, index) => (
				<motion.div
					key={index}
					className="absolute w-3 h-3 rounded-full bg-white z-100"
					style={{
						left: point.x,
						top: point.y,
					}}
					initial={{ scale: 1, opacity: 0 }}
					animate={{
						scale: ((trail.length - index) / trail.length) * 1, // Adjust scale for better effect
						opacity: 1 - index / trail.length,
					}}
					transition={{
						duration: 0.1,
						ease: "easeOut",
					}}
				/>
			))}
		</div>
	);
};

export default CursorTrail;
