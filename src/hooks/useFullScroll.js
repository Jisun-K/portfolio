import { useEffect, useState } from 'react';

export default function useFullScroll() {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        // let currentSection = 0;
        const sections = document.querySelectorAll('.section');

        function scrollToSection(index) {
            if (index < 0 || index >= sections.length) return;
            sections[index].scrollIntoView({ behavior: 'smooth' });
        };

        function handleScroll(event) {
            event.preventDefault();
            let newSection = currentSection;

            if (event.deltaY > 0) {
                // Scroll down
                newSection++;
            } else {
                // Scroll up
                newSection--;
            }

            if (newSection >= 0 && newSection < sections.length) {
                setCurrentSection(newSection);  // Update state
            }
            scrollToSection(newSection);
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        // // Cleanup on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSection]);

    return currentSection;
}

// export default useFullScroll;