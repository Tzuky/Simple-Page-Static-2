// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav shadow on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Scroll reveal
const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            e.target.style.transitionDelay = (i % 4) * 60 + 'ms';
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const formStatus = document.getElementById('formStatus');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const accessKey = contactForm.querySelector('input[name="access_key"]');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!accessKey || accessKey.value === 'YOUR_WEB3FORMS_ACCESS_KEY') {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Формата ще бъде активирана скоро.';
            return;
        }

        const data = Object.fromEntries(new FormData(contactForm));
        if (data.botcheck) return;

        formStatus.className = 'form-status';
        formStatus.textContent = '';
        submitButton.disabled = true;
        submitButton.textContent = 'Изпращане...';

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (result.success) {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Благодарим! Ще се свържем с вас скоро.';
                contactForm.reset();
            } else {
                throw new Error(result.message || 'Грешка при изпращане');
            }
        } catch (error) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Нещо се обърка. Моля, опитайте отново или ни пишете на hello@pagefive.net.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Изпрати запитване';
        }
    });
}
