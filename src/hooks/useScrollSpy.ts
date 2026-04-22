import { useEffect, useState } from "react";

type ScrollSpyOptions = {
  minVisibleRatio?: number;
};

function calculateVisibleRatio(rect: DOMRect) {
  const viewportHeight = window.innerHeight || 1;
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0),
  );

  return Math.max(0, Math.min(1, visibleHeight / viewportHeight));
}

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {},
) {
  const { minVisibleRatio = 0.5 } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const thresholds = Array.from({ length: 21 }, (_, index) => index / 20);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      setActiveSection(null);
      return;
    }

    const visibleRatios = new Map<string, number>();
    let currentSection: string | null = null;

    const resolveActiveSection = () => {
      let nextSection: string | null = null;
      let nextRatio = minVisibleRatio;

      for (const sectionId of sectionIds) {
        const ratio = visibleRatios.get(sectionId) ?? 0;

        if (ratio < minVisibleRatio) {
          continue;
        }

        if (
          ratio > nextRatio ||
          (ratio === nextRatio && nextSection === null)
        ) {
          nextSection = sectionId;
          nextRatio = ratio;
        }
      }

      const currentRatio = currentSection
        ? (visibleRatios.get(currentSection) ?? 0)
        : 0;

      if (!nextSection) {
        if (currentSection && currentRatio >= minVisibleRatio) {
          return;
        }

        currentSection = null;
        setActiveSection(null);
        return;
      }

      if (
        currentSection &&
        currentSection !== nextSection &&
        currentRatio >= minVisibleRatio &&
        nextRatio <= currentRatio + 0.08
      ) {
        return;
      }

      if (currentSection !== nextSection) {
        currentSection = nextSection;
        setActiveSection(nextSection);
      }
    };

    sections.forEach((section) => {
      visibleRatios.set(
        section.id,
        calculateVisibleRatio(section.getBoundingClientRect()),
      );
    });

    resolveActiveSection();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(
            entry.target.id,
            calculateVisibleRatio(entry.boundingClientRect),
          );
        }

        resolveActiveSection();
      },
      {
        threshold: thresholds,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const handleResize = () => {
      for (const section of sections) {
        visibleRatios.set(
          section.id,
          calculateVisibleRatio(section.getBoundingClientRect()),
        );
      }

      resolveActiveSection();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [minVisibleRatio, sectionIds]);

  return activeSection;
}
