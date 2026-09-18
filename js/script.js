/* =========================================================
   PARRILLA Y PASTA SUR 22
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    const menuToggle =
        document.querySelector("#menuToggle");

    const mainNav =
        document.querySelector("#mainNav");

    const navLinks =
        document.querySelectorAll(".main-nav a");

    const revealElements =
        document.querySelectorAll(".reveal");

    const menuCategoryLinks =
        document.querySelectorAll(".menu-categories a");

    const menuCategories =
        document.querySelectorAll(".menu-category");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");

            mainNav.classList.toggle("open");

            const isOpen =
                mainNav.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /*
         * Cerrar menú al seleccionar una opción
         */

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                mainNav.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
    ===================================================== */

    const handleHeaderScroll = () => {

        if (!header) {
            return;
        }

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };

    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        { passive: true }
    );

    handleHeaderScroll();


    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    if (revealElements.length > 0) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }


    /* =====================================================
       MENU - SECCIÓN ACTIVA
    ===================================================== */

    if (
        menuCategoryLinks.length > 0 &&
        menuCategories.length > 0
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        const currentId =
                            entry.target.id;

                        menuCategoryLinks.forEach(link => {

                            const linkTarget =
                                link.getAttribute("href");

                            if (
                                linkTarget ===
                                `#${currentId}`
                            ) {

                                menuCategoryLinks
                                    .forEach(item => {
                                        item.classList.remove(
                                            "active"
                                        );
                                    });

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    });

                },
                {
                    rootMargin:
                        "-25% 0px -60% 0px"
                }
            );


        menuCategories.forEach(section => {

            sectionObserver.observe(section);

        });

    }


    /* =====================================================
       BOTONES DE CATEGORÍAS
    ===================================================== */

    menuCategoryLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuCategoryLinks.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });


    /* =====================================================
       CERRAR MENÚ SI SE HACE CLICK FUERA
    ===================================================== */

    document.addEventListener("click", event => {

        if (
            !mainNav ||
            !menuToggle
        ) {
            return;
        }

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =====================================================
       ESC PARA CERRAR MENÚ
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") {
                return;
            }

            if (
                mainNav &&
                mainNav.classList.contains("open")
            ) {

                mainNav.classList.remove("open");

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =====================================================
       AÑADIR REVEAL AUTOMÁTICAMENTE
       A ELEMENTOS IMPORTANTES
    ===================================================== */

    const automaticRevealSelectors = [
        ".section-heading",
        ".specialty-card",
        ".about-content",
        ".about-image",
        ".events-content",
        ".contact-card",
        ".menu-category",
        ".menu-event-cta .container"
    ];


    automaticRevealSelectors.forEach(selector => {

        document
            .querySelectorAll(selector)
            .forEach(element => {

                element.classList.add("reveal");

            });

    });


    /*
     * Las animaciones se agregaron después de crear
     * el IntersectionObserver inicial, así que creamos
     * otro observer para esos elementos.
     */

    const automaticRevealElements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );


    if (automaticRevealElements.length > 0) {

        const automaticObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            automaticObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        automaticRevealElements.forEach(element => {

            automaticObserver.observe(element);

        });

    }


    /* =====================================================
       LOG
    ===================================================== */

    console.log(
        "Parrilla y Pasta Sur 22 - Sitio cargado correctamente."
    );

});