document.querySelector('.cta-btn').addEventListener('click', () => {
    window.open('https://calendly.com/ignitedoc/1-1-intense-growth-consultation', '_blank');
});

document.querySelector('a[href="https://calendly.com/ignitedoc/1-1-intense-growth-consultation"]').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://calendly.com/ignitedoc/1-1-intense-growth-consultation', '_blank');
});

document.getElementById('subscribe-btn').addEventListener('click', () => {
    const emailInput = document.getElementById('newsletter-email');
    const snackbar = document.getElementById('snackbar');

    if (emailInput.value) {
        snackbar.textContent = 'Subscribed';
        snackbar.className = 'show';

        setTimeout(() => {
            snackbar.className = snackbar.className.replace('show', '');
        }, 3000);

        emailInput.value = '';
    }
});
