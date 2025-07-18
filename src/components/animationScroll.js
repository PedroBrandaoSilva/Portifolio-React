import { useEffect, useRef, useState } from 'react';

export default function useScrollAnimation(threshold) {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target); // só desativa se apareceu
				}
			},
			{ threshold },
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, [threshold]);

	return [elementRef, isVisible];
}
