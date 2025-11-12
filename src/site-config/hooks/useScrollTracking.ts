import { useEffect, useState } from 'react';

/**
 * Custom hook to track the currently visible section based on scroll position.
 */
export function useScrollTracking() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = document.querySelectorAll('[id^="theme-"]');
      let currentSection = "";

      // Find which section is currently in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Section is considered active if its top is within the top 30% of viewport
        if (rect.top <= window.innerHeight * 0.3 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Set initial active section
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return activeSection;
}
