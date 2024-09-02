import { useEffect, useState } from 'react';

export default function useFullScroll(controllPage) {
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


        // Handle controllPage change
        if (controllPage !== undefined && controllPage !== currentSection) {
            setCurrentSection(controllPage);
            scrollToSection(controllPage);
        }


        // // Cleanup on component unmount
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSection, controllPage]);

    return currentSection;
}

// export default useFullScroll;