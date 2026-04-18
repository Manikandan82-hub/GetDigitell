"use client";

import { useEffect } from "react";

export function ScrollSpy() {
  useEffect(() => {
    const sectionIds = [
      "home",
      "pricing",
      "about",
      "services",
      "portfolio",
      "contact",
    ];

    let isUpdating = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            const newHash = id === "home" ? "" : `#${id}`;

            if (!isUpdating) {
              isUpdating = true;

              const newUrl =
                window.location.pathname + window.location.search + newHash;

              window.history.replaceState(null, "", newUrl);

              setTimeout(() => {
                isUpdating = false;
              }, 100);
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
