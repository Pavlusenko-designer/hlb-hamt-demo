/* ════════════════════════════════════════════════════════
   HLB HAMT – Main JS
   ════════════════════════════════════════════════════════ */

/* ─── What We Do: tab data ───────────────────────────────── */
const wwdData = {
    audit: {
        title: 'AUDIT & ASSURANCE',
        desc: [
            'We recognize that accurate and transparent financial information is the foundation of informed decision-making, stakeholder confidence, and regulatory compliance. Our Audit & Assurance services go beyond traditional audits, delivering tailored insights that strengthen your organization\'s financial integrity and performance.',
            'With a deep understanding of evolving regulations and industry best practices, we act as your trusted partner, assertively helping you navigate today\'s complex financial landscape.'
        ],
        cols: [
            {
                title: 'Audit & Assurance',
                items: ['Financial Statement Audit', 'Internal Audit Services', 'In Country Value Program (ICV)', 'IFRS Advisory Services', 'Home Owner\'s Association (HOA)', 'AML/CFT AUP Audit', 'ESG Audit', 'IT Audit']
            },
            {
                title: 'Advisory',
                items: ['Risk Advisory Services', 'Forensic and Fraud Investigation', 'Due Diligence', 'Business Valuation', 'Mergers & Acquisition', 'AML/CFT Policies and Procedures']
            }
        ]
    },
    advisory: {
        title: 'ADVISORY',
        desc: [
            'Our Advisory team delivers data-driven strategies that help businesses navigate complexity, manage risk, and seize opportunities for growth. We combine deep industry knowledge with a globally connected perspective.',
            'Whether you need guidance on transactions, restructuring, or risk management, our advisors provide actionable insights tailored to your specific business objectives.'
        ],
        cols: [
            {
                title: 'Transaction Advisory',
                items: ['Due Diligence', 'Business Valuation', 'Mergers & Acquisitions', 'Financial Modelling', 'IPO Advisory', 'Post-Merger Integration']
            },
            {
                title: 'Risk & Forensics',
                items: ['Risk Advisory Services', 'Forensic and Fraud Investigation', 'Litigation Support', 'AML/CFT Policies', 'Compliance Reviews', 'Regulatory Advisory']
            }
        ]
    },
    accounting: {
        title: 'ACCOUNTING & OUTSOURCING',
        desc: [
            'Our Accounting & Outsourcing services are designed to streamline your financial operations, reduce costs, and deliver real-time visibility into your business performance through best-in-class technology.',
            'From bookkeeping to full CFO-level support, we provide scalable solutions that adapt to your evolving needs while ensuring full compliance with UAE and international standards.'
        ],
        cols: [
            {
                title: 'Accounting Services',
                items: ['Bookkeeping & Ledger Management', 'Financial Reporting (IFRS/GAAP)', 'Management Accounts', 'Accounts Payable & Receivable', 'Bank Reconciliation', 'Fixed Asset Management']
            },
            {
                title: 'Outsourcing',
                items: ['Payroll Processing & Administration', 'CFO Advisory Services', 'Virtual Finance Department', 'Cash Flow Management', 'Budget & Forecasting', 'ERP Accounting Support']
            }
        ]
    },
    risk: {
        title: 'RISK ASSURANCE & ADVISORY',
        desc: [
            'Effective risk management is central to business resilience. Our Risk Assurance & Advisory team helps organizations identify, evaluate, and mitigate risks while strengthening governance frameworks.',
            'We bring a holistic approach to risk—covering financial, operational, technology, and regulatory dimensions—so your organization can operate with confidence.'
        ],
        cols: [
            {
                title: 'Risk Assurance',
                items: ['Internal Controls Review', 'Enterprise Risk Management', 'SOC Reporting', 'Compliance Management', 'Business Continuity Planning', 'Regulatory Compliance Review']
            },
            {
                title: 'Cybersecurity',
                items: ['Cybersecurity Risk Assessment', 'IT General Controls Review', 'Data Privacy & GDPR', 'Penetration Testing', 'Security Audits', 'ISO 27001 Advisory']
            }
        ]
    },
    consulting: {
        title: 'CONSULTING',
        desc: [
            'Our Consulting practice helps businesses unlock value through strategic thinking, operational improvement, and digital innovation. We partner with leadership teams to translate strategy into measurable results.',
            'Our consultants bring diverse industry experience and a global perspective, ensuring recommendations are practical, impactful, and aligned to your organization\'s vision.'
        ],
        cols: [
            {
                title: 'Strategy & Operations',
                items: ['Strategic Planning', 'Business Process Improvement', 'Change Management', 'Performance Management', 'Operating Model Design', 'Organizational Restructuring']
            },
            {
                title: 'Project Services',
                items: ['Project Management', 'PMO Setup & Support', 'Program Management', 'Cost Optimization', 'Market Entry Strategy', 'Feasibility Studies']
            }
        ]
    },
    tax: {
        title: 'TAX & REGULATORY SERVICES',
        desc: [
            'Navigating the UAE\'s evolving tax landscape requires specialist knowledge. Our Tax & Regulatory team provides comprehensive guidance on Corporate Tax, VAT, and international tax obligations.',
            'With deep expertise in UAE regulations and international tax treaties, we help you optimize your tax position while ensuring full compliance with the Federal Tax Authority requirements.'
        ],
        cols: [
            {
                title: 'Direct Tax',
                items: ['Corporate Tax Advisory & Compliance', 'Transfer Pricing', 'International Tax Planning', 'Tax Due Diligence', 'Tax Structuring', 'Pillar Two (BEPS 2.0) Advisory']
            },
            {
                title: 'Indirect Tax & Regulatory',
                items: ['VAT Compliance & Advisory', 'VAT Health Check', 'Economic Substance Regulations', 'Ultimate Beneficial Owner (UBO)', 'Country-by-Country Reporting', 'FTA Audit Support']
            }
        ]
    },
    business: {
        title: 'BUSINESS SERVICES & CORPORATE COMPLIANCE',
        desc: [
            'Setting up and running a business in the UAE involves navigating complex regulatory requirements. Our Business Services team provides end-to-end support from company formation through to ongoing corporate compliance.',
            'We act as a trusted partner throughout your business journey, ensuring your entity remains fully compliant with UAE laws while you focus on growth.'
        ],
        cols: [
            {
                title: 'Corporate Services',
                items: ['Company Formation & Registration', 'Corporate Secretarial Services', 'Registered Agent Services', 'Liquidation & Deregistration', 'Branch & Representative Office', 'Free Zone Setup']
            },
            {
                title: 'PRO & HR Services',
                items: ['PRO Services', 'Visa & Immigration Support', 'HR & Employment Advisory', 'Payroll Compliance', 'Labour Law Advisory', 'Business Licensing']
            }
        ]
    },
    tech: {
        title: 'TECHNOLOGY CONSULTING',
        desc: [
            'Digital transformation is reshaping every industry. Our Technology Consulting team helps organizations harness the power of technology to drive efficiency, innovation, and competitive advantage.',
            'As a certified SAP partner and authorised reseller for leading technology platforms, we deliver end-to-end implementation and support services tailored to your business needs.'
        ],
        cols: [
            {
                title: 'ERP & Digital',
                items: ['SAP Business One Implementation', 'SAP ERP Customization', 'ERP Migration & Upgrade', 'Digital Transformation Strategy', 'Cloud Solutions & Migration', 'System Integration']
            },
            {
                title: 'Automation & Analytics',
                items: ['Robotic Process Automation (RPA)', 'Data Analytics & Visualization', 'Business Intelligence', 'Automation Anywhere', 'Alteryx Solutions', 'Cybersecurity Services']
            }
        ]
    },
    esg: {
        title: 'SUSTAINABILITY & ESG',
        desc: [
            'Sustainability is no longer optional—it\'s a business imperative. Our Sustainability & ESG team helps organizations build credible sustainability strategies, measure impact, and communicate transparently with stakeholders.',
            'Aligned with global frameworks such as GRI, SASB, TCFD, and the UAE Net Zero 2050 agenda, we guide you from ESG baseline assessment through to integrated reporting.'
        ],
        cols: [
            {
                title: 'ESG Strategy',
                items: ['ESG Baseline Assessment', 'Sustainability Strategy Development', 'ESG Due Diligence', 'Materiality Assessment', 'Carbon Footprint Assessment', 'Net Zero Roadmap']
            },
            {
                title: 'Reporting & Assurance',
                items: ['ESG / Sustainability Reporting', 'ESG Audit & Assurance', 'GRI / SASB / TCFD Reporting', 'UN SDG Alignment', 'Responsible Investment Advisory', 'Stakeholder Engagement']
            }
        ]
    }
};

/* ─── What We Do: render ─────────────────────────────────── */
function renderWWDContent(tabKey) {
    const data = wwdData[tabKey];
    const target = document.getElementById('wwdTabContent');
    if (!data || !target) return;

    const colsHtml = data.cols.map(col => `
        <div class="wwd-tc-col">
            <div class="wwd-tc-col-title">${col.title}</div>
            <ul>
                ${col.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    const descHtml = data.desc.map(p => `<p>${p}</p>`).join('');

    target.innerHTML = `
        <div class="wwd-tc-title">${data.title}</div>
        <div class="wwd-tc-desc">${descHtml}</div>
        <div class="wwd-tc-cols">${colsHtml}</div>
    `;
}

/* ─── What We Do: tab switching ──────────────────────────── */
function initWWDTabs() {
    const tabs = document.querySelectorAll('.wwd-tab');
    const content = document.getElementById('wwdTabContent');

    if (!tabs.length || !content) return;

    // render default
    renderWWDContent('audit');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderWWDContent(tab.dataset.tab);
        });
    });
}

/* ─── Hero tabs: smooth scroll ───────────────────────────── */
function initHeroTabs() {
    const tabs = document.querySelectorAll('.hero-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const target = document.getElementById(tab.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ─── Testimonials carousel ──────────────────────────────── */
function initTestimonials() {
    function setupCarousel({ slidesSelector, slideSelector, prevId, nextId, dotsId, hoverPauseSelector }) {
        const slides = document.querySelector(slidesSelector);
        const slideEls = document.querySelectorAll(slideSelector);
        const prevBtn = document.getElementById(prevId);
        const nextBtn = document.getElementById(nextId);
        const dotsWrap = document.getElementById(dotsId);

        if (!slides || !slideEls.length || !prevBtn || !nextBtn || !dotsWrap) return;

        let current = 0;
        const total = slideEls.length;
        const hasGSAP = typeof window.gsap !== 'undefined';

        dotsWrap.innerHTML = '';

        slideEls.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        });

        function goTo(idx) {
            current = (idx + total) % total;
            if (hasGSAP) {
                window.gsap.to(slides, {
                    xPercent: -(current * 100),
                    duration: 0.72,
                    ease: 'power3.out',
                    overwrite: true
                });
            } else {
                slides.style.transform = `translateX(-${current * 100}%)`;
            }
            dotsWrap.querySelectorAll('.testi-dot').forEach((d, i) => {
                d.classList.toggle('active', i === current);
            });

            if (hasGSAP) {
                const activeSlide = slideEls[current];
                const motionTargets = activeSlide.querySelectorAll(
                    '.testi-figma-quote, .testi-figma-meta, .testi-figma-role, .testi-figma-logo, .testi-logo-mark'
                );

                if (motionTargets.length) {
                    window.gsap.fromTo(
                        motionTargets,
                        { y: 18, autoAlpha: 0 },
                        {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.56,
                        stagger: 0.035,
                        ease: 'power3.out',
                        overwrite: true
                    }
                    );
                }
            }
        }

        prevBtn.addEventListener('click', () => goTo(current - 1));
        nextBtn.addEventListener('click', () => goTo(current + 1));

        const hoverPauseEl = slides.closest(hoverPauseSelector);
        let autoTimer = setInterval(() => goTo(current + 1), 6000);

        hoverPauseEl?.addEventListener('mouseenter', () => clearInterval(autoTimer));
        hoverPauseEl?.addEventListener('mouseleave', () => {
            autoTimer = setInterval(() => goTo(current + 1), 6000);
        });

        goTo(0);
    }

    setupCarousel({
        slidesSelector: '.testi-slides',
        slideSelector: '.testi-slide',
        prevId: 'testiPrev',
        nextId: 'testiNext',
        dotsId: 'testiDots',
        hoverPauseSelector: '.testi-card'
    });

    setupCarousel({
        slidesSelector: '.testi-figma-slides',
        slideSelector: '.testi-figma-slide',
        prevId: 'testiFigmaPrev',
        nextId: 'testiFigmaNext',
        dotsId: 'testiFigmaDots',
        hoverPauseSelector: '.testi-figma-card'
    });
}

function initHistoryTimeline() {
    const viewport = document.querySelector('.wwa-history-viewport');
    const scrollWrap = document.querySelector('.wwa-history-scroll');
    const track = scrollWrap?.querySelector('.wwa-history-track');
    const prevBtn = document.getElementById('historyPrev');
    const nextBtn = document.getElementById('historyNext');

    if (!viewport || !scrollWrap || !track || !prevBtn || !nextBtn) return;

    let currentAnimationFrame = null;
    let currentOffset = 0;
    let currentTween = null;

    const getStep = () => {
        const milestone = track.querySelector('.wwa-milestone');
        if (!milestone) return Math.max(scrollWrap.clientWidth * 0.85, 320);

        const rect = milestone.getBoundingClientRect();
        const trackStyle = window.getComputedStyle(track);
        const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '0');
        return (rect.width + gap) * 1.6;
    };

    const getMaxOffset = () => Math.max(track.scrollWidth - scrollWrap.clientWidth, 0);

    const applyOffset = (offset) => {
        currentOffset = Math.max(0, Math.min(offset, getMaxOffset()));
        track.style.transform = `translate3d(${-currentOffset}px, 0, 0)`;
    };

    const updateButtons = () => {
        const maxOffset = getMaxOffset();
        const atStart = currentOffset <= 2;
        const atEnd = currentOffset >= maxOffset - 2;
        const hasOverflow = maxOffset > 4;

        viewport.classList.toggle('is-end', atEnd);
        prevBtn.classList.toggle('is-disabled', hasOverflow && atStart);
        nextBtn.classList.toggle('is-disabled', hasOverflow && atEnd);
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    };

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScrollTo = (target) => {
        const start = currentOffset;
        const maxOffset = getMaxOffset();
        const destination = Math.max(0, Math.min(target, maxOffset));
        const distance = destination - start;

        if (Math.abs(distance) < 1) {
            applyOffset(destination);
            updateButtons();
            return;
        }

        if (typeof window.gsap !== 'undefined') {
            currentTween?.kill();

            const state = { value: start };
            currentTween = window.gsap.to(state, {
                value: destination,
                duration: 0.82,
                ease: 'power3.out',
                overwrite: true,
                onUpdate: () => {
                    applyOffset(state.value);
                    updateButtons();
                },
                onComplete: () => {
                    currentTween = null;
                }
            });
            return;
        }

        if (currentAnimationFrame) cancelAnimationFrame(currentAnimationFrame);

        const duration = 700;
        const startTime = performance.now();

        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            applyOffset(start + distance * eased);
            updateButtons();

            if (progress < 1) {
                currentAnimationFrame = requestAnimationFrame(tick);
            } else {
                currentAnimationFrame = null;
            }
        };

        currentAnimationFrame = requestAnimationFrame(tick);
    };

    const scrollByStep = (direction) => {
        animateScrollTo(currentOffset + getStep() * direction);
    };

    prevBtn.addEventListener('click', () => scrollByStep(-1));
    nextBtn.addEventListener('click', () => scrollByStep(1));
    window.addEventListener('resize', () => {
        applyOffset(currentOffset);
        updateButtons();
    });
    applyOffset(0);
    updateButtons();
}

/* ─── Accreditations: pause on hover (CSS handles animation) */
// Already handled via CSS .accred-track:hover { animation-play-state: paused }

/* ─── Navbar: hide/show on scroll ───────────────────────────*/
function initNavbar() {
    let lastY = 0;
    const navbar = document.querySelector('.navbar');
    const navbarInner = document.querySelector('.navbar-inner');
    const hasGSAP = typeof window.gsap !== 'undefined';
    const getScrollTarget = () => window.innerWidth > 1024 ? navbar : navbarInner;

    if (!navbar) return;

    const showNavbar = () => {
        const target = getScrollTarget();
        if (hasGSAP) {
            window.gsap.to(target, {
                yPercent: 0,
                autoAlpha: 1,
                duration: 0.28,
                ease: 'power2.out',
                overwrite: true
            });
        } else {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
        }
        navbar.style.pointerEvents = '';
    };

    const hideNavbar = () => {
        const target = getScrollTarget();
        if (hasGSAP) {
            window.gsap.to(target, {
                yPercent: -100,
                autoAlpha: 0,
                duration: 0.28,
                ease: 'power2.out',
                overwrite: true
            });
        } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(-100%)';
        }
        navbar.style.pointerEvents = 'none';
    };

    if (hasGSAP) {
        window.gsap.set(navbar, { clearProps: 'transform,opacity,visibility' });
        if (navbarInner) {
            window.gsap.set(navbarInner, { clearProps: 'transform,opacity,visibility' });
        }
        window.gsap.set(getScrollTarget(), { yPercent: 0, autoAlpha: 1 });
    }

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const isMobileOpen = navbar.classList.contains('is-mobile-open');
        const hideThreshold = window.innerWidth > 1024 ? 120 : 72;

        if (isMobileOpen || y <= 8) {
            showNavbar();
        } else if (y > hideThreshold && y > lastY) {
            hideNavbar();
        } else {
            showNavbar();
        }

        lastY = y;
    });

    window.addEventListener('resize', () => {
        if (hasGSAP) {
            window.gsap.set(navbar, { clearProps: 'transform,opacity,visibility' });
            if (navbarInner) {
                window.gsap.set(navbarInner, { clearProps: 'transform,opacity,visibility' });
            }
        } else {
            navbar.style.opacity = '';
            navbar.style.transform = '';
            if (navbarInner) {
                navbarInner.style.opacity = '';
                navbarInner.style.transform = '';
            }
        }
        showNavbar();
    });

    if (!hasGSAP) {
        navbar.style.transition = 'opacity .3s, transform .3s';
    }

    if (hasGSAP && navbarInner) {
        document.querySelectorAll('.nav-item').forEach((item) => {
            const panel = item.querySelector('.nav-mega');
            if (!panel) return;

            const intro = panel.querySelector('.nav-mega-intro');
            const groups = panel.querySelectorAll('.nav-mega-group');

            const animatePanel = () => {
                window.gsap.fromTo(
                    [intro, ...groups],
                    { y: 18, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.48,
                        stagger: 0.03,
                        ease: 'power3.out',
                        overwrite: true
                    }
                );
            };

            item.addEventListener('mouseenter', animatePanel);
            item.addEventListener('focusin', animatePanel);
        });
    }
}

/* ─── Smooth scroll for anchor links ────────────────────────*/
function initMobileNav() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.nav-toggle');
    const panel = document.getElementById('navMobilePanel');
    const items = document.querySelectorAll('.nav-item');

    if (!navbar || !toggle || !panel) return;

    const isMobile = () => window.innerWidth <= 1024;

    const closeMenu = () => {
        navbar.classList.remove('is-mobile-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        items.forEach((item) => item.classList.remove('is-open'));
    };

    const openMenu = () => {
        navbar.classList.add('is-mobile-open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const scrollToTarget = (href) => {
        if (!href || !href.startsWith('#')) return;
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };

    toggle.addEventListener('click', () => {
        if (navbar.classList.contains('is-mobile-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    items.forEach((item) => {
        const link = item.querySelector('.nav-link');
        const mega = item.querySelector('.nav-mega');
        if (!link) return;

        link.addEventListener('click', (event) => {
            if (!isMobile()) return;

            if (mega) {
                event.preventDefault();
                const shouldOpen = !item.classList.contains('is-open');
                items.forEach((other) => {
                    if (other !== item) other.classList.remove('is-open');
                });
                item.classList.toggle('is-open', shouldOpen);
            } else {
                event.preventDefault();
                const href = link.getAttribute('href');
                closeMenu();
                scrollToTarget(href);
            }
        });
    });

    panel.querySelectorAll('.nav-mega-group a, .nav-actions a').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (!isMobile()) return;

            const href = link.getAttribute('href') || '';
            if (href.startsWith('#')) {
                event.preventDefault();
                closeMenu();
                scrollToTarget(href);
                return;
            }

            closeMenu();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
        if (!isMobile()) closeMenu();
    });
}

function initPageMotion() {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const page = document.body;

    if (!gsap || !ScrollTrigger || !page.classList.contains('theme-dark')) return;

    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set([
            '.navbar-inner',
            '.hero-support',
            '.hero-headline',
            '.hero-sub',
            '.hero-cta',
            '.hero-scroll-cue',
            '.section-badge',
            '.wwa-intro-alt-left > :not(.wwa-intro-alt-bg)',
            '.wwa-stat-card',
            '.accred-track-wrap',
            '.wwd-grid-heading',
            '.wwd-reveal-card',
            '.insights-bento-head > *',
            '.insight-bento-card',
            '.wwa-history-head > *',
            '.wwa-history-controls',
            '.wwa-history-track',
            '.wwa-milestone',
            '.gp-card--stats > *',
            '.gp-card--quote > *',
            '.approved-left > *',
            '.approved-group-card',
            '.testi-figma-left > *',
            '.testi-figma-card',
            '.connect-copy > *',
            '.connect-form-card',
            '.form-group',
            '.connect-submit'
        ], { clearProps: 'all', autoAlpha: 1 });
        return;
    }

    const fromIn = (vars = {}) => ({
        autoAlpha: 0,
        y: 28,
        duration: 0.84,
        ease: 'power3.out',
        ...vars
    });

    gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.navbar-inner', { autoAlpha: 0, y: -18, duration: 0.72 })
        .from('.hero-support', { autoAlpha: 0, y: 22, duration: 0.62 }, '-=0.35')
        .from('.hero-headline', { autoAlpha: 0, y: 34, duration: 0.9 }, '-=0.18')
        .from('.hero-sub', { autoAlpha: 0, y: 22, duration: 0.62 }, '-=0.46')
        .from('.hero-cta', { autoAlpha: 0, y: 18, duration: 0.54, clearProps: 'opacity,visibility,transform' }, '-=0.38')
        .from('.hero-scroll-cue', { autoAlpha: 0, y: 16, duration: 0.52, clearProps: 'opacity,visibility,transform' }, '-=0.12');

    gsap.to('.hero-content', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.7
        }
    });

    const whoIntro = document.querySelector('.who-we-are-intro');
    if (whoIntro) {
        gsap.timeline({
            scrollTrigger: {
                trigger: whoIntro,
                start: 'top 78%',
                once: true
            }
        })
            .from('.wwa-intro-alt-left > :not(.wwa-intro-alt-bg)', fromIn({ stagger: 0.045 }), 0)
            .from('.wwa-stat-card', fromIn({ stagger: 0.05, y: 32 }), 0.12);

        gsap.to('.wwa-intro-alt-bg', {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
                trigger: whoIntro,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8
            }
        });
    }

    const accred = document.querySelector('.accreditations');
    if (accred) {
        gsap.timeline({
            scrollTrigger: {
                trigger: accred,
                start: 'top 80%',
                once: true
            }
        })
            .from('.accreditations .section-badge', fromIn())
            .from('.accred-track-wrap', fromIn({ y: 22, duration: 0.78 }), '-=0.4');
    }

    const whatWeDo = document.querySelector('.what-we-do');
    if (whatWeDo) {
        const cards = gsap.utils.toArray('.what-we-do .wwd-reveal-card');
        const rows = [cards.slice(0, 3), cards.slice(3, 6), cards.slice(6, 9)];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: whatWeDo,
                start: 'top 76%',
                once: true
            }
        });

        tl.from('.what-we-do .section-badge', fromIn())
            .from('.what-we-do .wwd-grid-heading', fromIn({ y: 22 }), '-=0.46');

        rows.forEach((row, index) => {
            tl.from(row, fromIn({ stagger: 0.045, y: 26, duration: 0.72 }), index === 0 ? '-=0.32' : '-=0.46');
        });
    }

    const insights = document.querySelector('.insights');
    if (insights) {
        const orderedCards = [
            document.querySelector('.insight-bento-card--featured'),
            ...gsap.utils.toArray('.insight-bento-card:not(.insight-bento-card--featured)')
        ].filter(Boolean);

        gsap.timeline({
            scrollTrigger: {
                trigger: insights,
                start: 'top 78%',
                once: true
            }
        })
            .from('.insights-bento-head > *', fromIn({ stagger: 0.045 }))
            .from(orderedCards, fromIn({ stagger: 0.05, y: 32, duration: 0.78 }), '-=0.34');

        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            gsap.utils.toArray('.insight-bento-card').forEach((card) => {
                const img = card.querySelector('.insight-bento-media img');
                if (!img) return;

                const xTo = gsap.quickTo(img, 'x', { duration: 0.45, ease: 'power3.out' });
                const yTo = gsap.quickTo(img, 'y', { duration: 0.45, ease: 'power3.out' });

                card.addEventListener('pointermove', (event) => {
                    const rect = card.getBoundingClientRect();
                    const px = (event.clientX - rect.left) / rect.width - 0.5;
                    const py = (event.clientY - rect.top) / rect.height - 0.5;
                    xTo(px * 12);
                    yTo(py * 12);
                });

                card.addEventListener('pointerleave', () => {
                    xTo(0);
                    yTo(0);
                });
            });
        }
    }

    const history = document.querySelector('.wwa-history');
    if (history) {
        const milestones = gsap.utils.toArray('.wwa-milestone');
        gsap.timeline({
            scrollTrigger: {
                trigger: history,
                start: 'top 78%',
                once: true
            }
        })
            .from('.wwa-history-head > *', fromIn({ stagger: 0.045 }))
            .from('.wwa-history-controls', fromIn({ y: 18, duration: 0.6 }), '-=0.42')
            .from('.wwa-history-track', { autoAlpha: 0, x: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
            .from(milestones, {
                autoAlpha: 0,
                y: (index) => index % 2 === 0 ? -16 : 16,
                duration: 0.56,
                stagger: 0.04,
                ease: 'power3.out'
            }, '-=0.5');
    }

    const globalPresence = document.querySelector('.global-presence');
    if (globalPresence) {
        gsap.timeline({
            scrollTrigger: {
                trigger: globalPresence,
                start: 'top 78%',
                once: true
            }
        })
            .from('.gp-card--stats > .section-badge, .gp-card--stats > .gp-heading', fromIn({ stagger: 0.045 }), 0)
            .from('.gp-stat', fromIn({ stagger: 0.045, y: 22, duration: 0.7 }), 0.18)
            .from('.gp-awards img', { autoAlpha: 0, y: 14, stagger: 0.035, duration: 0.5, ease: 'power3.out' }, 0.34)
            .from('.gp-logo, .gp-quote-icon, .gp-frosted-card p, .gp-frosted-card .btn', fromIn({ stagger: 0.045, y: 18, duration: 0.64 }), 0.12);

        gsap.to('.gp-quote-icon', {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: {
                trigger: globalPresence,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8
            }
        });
    }

    const approved = document.querySelector('.approved');
    if (approved) {
        const trustCards = gsap.utils.toArray('.approved-group-card');
        gsap.timeline({
            scrollTrigger: {
                trigger: approved,
                start: 'top 78%',
                once: true
            }
        })
            .from('.approved-left > *', fromIn({ stagger: 0.045 }), 0)
            .from(trustCards, fromIn({ stagger: 0.05, y: 24, duration: 0.72 }), 0.18)
            .from('.approved-bank-logo, .approved-bank-more', { autoAlpha: 0, y: 10, stagger: 0.03, duration: 0.42, ease: 'power3.out' }, 0.5);
    }

    const testimonials = document.querySelector('.testimonials');
    if (testimonials) {
        gsap.timeline({
            scrollTrigger: {
                trigger: testimonials,
                start: 'top 78%',
                once: true
            }
        })
            .from('.testi-figma-left > *', fromIn({ stagger: 0.045 }), 0)
            .from('.testi-figma-card', fromIn({ y: 24, duration: 0.78 }), 0.14);
    }

    const connect = document.querySelector('.connect-section');
    if (connect) {
        gsap.timeline({
            scrollTrigger: {
                trigger: connect,
                start: 'top 78%',
                once: true
            }
        })
            .from('.connect-copy > *', fromIn({ stagger: 0.045 }), 0)
            .from('.connect-photo, .connect-info-pill', fromIn({ stagger: 0.045, y: 20, duration: 0.72 }), 0.14)
            .from('.connect-form-card', fromIn({ y: 20, duration: 0.72 }), 0.1)
            .from('.form-group', fromIn({ stagger: 0.035, y: 14, duration: 0.42 }), 0.24)
            .from('.connect-submit', fromIn({ y: 14, duration: 0.42 }), 0.3);
    }

    ScrollTrigger.refresh();
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            if (e.defaultPrevented) return;
            const id = link.getAttribute('href').slice(1);
            if (!id) return;
            const el = document.getElementById(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initMobileCenterCards() {
    const mobileQuery = window.matchMedia('(max-width: 900px)');
    const cardGroups = [
        '.what-we-do .wwd-reveal-card',
        '.insights .insight-bento-card'
    ];
    let ticking = false;

    const clearActive = () => {
        cardGroups.forEach((selector) => {
            document.querySelectorAll(selector).forEach((card) => {
                card.classList.remove('is-center-active');
            });
        });
    };

    const updateActiveCards = () => {
        ticking = false;

        if (!mobileQuery.matches) {
            clearActive();
            return;
        }

        const viewportCenter = window.innerHeight * 0.5;

        cardGroups.forEach((selector) => {
            const cards = Array.from(document.querySelectorAll(selector));
            let closestCard = null;
            let closestDistance = Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
                card.classList.remove('is-center-active');
                if (!isVisible) return;

                const cardCenter = rect.top + rect.height * 0.5;
                const distance = Math.abs(cardCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestCard = card;
                }
            });

            if (closestCard) {
                closestCard.classList.add('is-center-active');
            }
        });
    };

    const requestUpdate = () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(updateActiveCards);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', requestUpdate);
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(requestUpdate);
    }

    requestUpdate();
}

/* ─── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initWWDTabs();
    initHeroTabs();
    initTestimonials();
    initHistoryTimeline();
    initNavbar();
    initMobileNav();
    initPageMotion();
    initSmoothScroll();
    initMobileCenterCards();
    initCardLinks();
    initContactForm();
});

function initCardLinks() {
    document.querySelectorAll('.approved-group-card[data-card-href]').forEach((card) => {
        const href = card.getAttribute('data-card-href');
        if (!href) return;

        card.addEventListener('click', (event) => {
            if (event.target.closest('a')) return;
            window.location.href = href;
        });

        card.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            if (event.target.closest('a')) return;
            event.preventDefault();
            window.location.href = href;
        });
    });
}

function initContactForm() {
    const phoneInput = document.querySelector('.uae-phone-input');
    if (!phoneInput) return;

    const formatUAEPhone = (value) => {
        const digits = value.replace(/\D/g, '');
        let normalized = digits;

        if (normalized.startsWith('00')) normalized = normalized.slice(2);
        if (normalized.startsWith('971')) normalized = normalized.slice(3);
        if (normalized.startsWith('0')) normalized = normalized.slice(1);

        normalized = normalized.slice(0, 9);

        const part1 = normalized.slice(0, 2);
        const part2 = normalized.slice(2, 5);
        const part3 = normalized.slice(5, 9);

        let formatted = '+971';
        if (part1) formatted += ` ${part1}`;
        if (part2) formatted += ` ${part2}`;
        if (part3) formatted += ` ${part3}`;

        return formatted;
    };

    phoneInput.addEventListener('focus', () => {
        if (!phoneInput.value.trim()) {
            phoneInput.value = '+971 ';
        }
    });

    phoneInput.addEventListener('input', () => {
        phoneInput.value = formatUAEPhone(phoneInput.value);
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim() === '+971') {
            phoneInput.value = '';
        }
    });
}
