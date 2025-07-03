document.addEventListener('DOMContentLoaded', function() {
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  function loadGoogleAnalytics() {
    if (window.gaLoaded) return;
    window.gaLoaded = true;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-EG6TFMHTSF"; // Înlocuiește cu ID-ul tău
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EG6TFMHTSF'); // Înlocuiește cu ID-ul tău
    `;
    document.head.appendChild(script2);
  }

  // Verifică dacă s-a dat consimțământ
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    banner.classList.remove('hidden');
  } else if (consent === 'accepted') {
    loadGoogleAnalytics();
  }

  acceptBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.add('hidden');
    loadGoogleAnalytics();
  });

  declineBtn.addEventListener('click', function() {
    localStorage.setItem('cookieConsent', 'declined');
    banner.classList.add('hidden');
    // Nu încărcăm GA
  });
});
