/* ===========================
   YFP — Youth For Palestine
   Main JavaScript (jQuery + Vanilla JS)
   =========================== */

$(document).ready(function () {

    // =========================================
    // 1. Navbar scroll effect
    // =========================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('scrolled');
        } else {
            $('#navbar').removeClass('scrolled');
        }
    });

    // =========================================
    // 2. Smooth scroll for nav links
    // =========================================
    $('a[href^="#"]').on('click', function (e) {
        var target = $($(this).attr('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate(
                {
                    scrollTop: target.offset().top - 70,
                },
                600
            );

            // Close mobile navbar after click
            var navbarCollapse = $('#navbarNav');
            if (navbarCollapse.hasClass('show')) {
                navbarCollapse.collapse('hide');
            }
        }
    });

    // =========================================
    // 3. Scroll reveal animation (Intersection Observer)
    // =========================================
    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: unobserve after revealing for performance
                    // observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
    });

    // =========================================
    // 4. Counter animation (trigger once when impact section is visible)
    // =========================================
    var counted = false;

    function triggerCounters() {
        if (counted) return;

        var $impactSection = $('#impact');
        if (!$impactSection.length) return;

        var top = $impactSection.offset().top;
        var scroll = $(window).scrollTop() + $(window).height();

        if (scroll > top + 100) {
            counted = true;

            $('.counter').each(function () {
                var $this = $(this);
                var target = $this.data('target');

                $({ Counter: 0 }).animate(
                    { Counter: target },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $this.text(Math.ceil(now));
                        },
                    }
                );
            });
        }
    }

    // Check on scroll
    $(window).scroll(function () {
        triggerCounters();
    });

    // Check on page load (in case section is already visible)
    triggerCounters();

    // =========================================
    // 5. Volunteer form — show success message
    // =========================================
    $('#volunteerForm').on('submit', function (e) {
        e.preventDefault();
        $(this).slideUp(300, function () {
            $('#formSuccess').slideDown(300);
        });
    });

});
