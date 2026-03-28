"use client";

import { useEffect } from "react";

export default function RevealObserver() {
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const threshold = isMobile ? 0.05 : 0.15;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        // Optionally unobserve after revealing
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the bottom
            }
        );

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        // For dynamic content, we can use a MutationObserver to watch for new .reveal elements
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        if (node.classList.contains("reveal")) {
                            observer.observe(node);
                        }
                        node.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
                    }
                });
            });
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
