const about = document.getElementById('about');
const contact = document.getElementById('contact');
const closers = document.querySelectorAll('#close');

const aboutInfo = document.getElementById('about-info');
const contactInfo = document.getElementById('contact-info');

about.addEventListener('click', () => {
  contactInfo.classList.add('hidden');
  if (aboutInfo.classList.contains('hidden')) {
    aboutInfo.classList.remove('hidden');
  } else {
    aboutInfo.classList.add('hidden');
  }
});

contact.addEventListener('click', () => {
  aboutInfo.classList.add('hidden');
  if (contactInfo.classList.contains('hidden')) {
    contactInfo.classList.remove('hidden');
  } else {
    contactInfo.classList.add('hidden');
  }
});

closers.forEach((close) => {
  close.addEventListener('click', () => {
    if (!aboutInfo.classList.contains('hidden')) {
      aboutInfo.classList.add('hidden');
    } else if (!contactInfo.classList.contains('hidden')) {
      contactInfo.classList.add('hidden');
    }
  });
});
