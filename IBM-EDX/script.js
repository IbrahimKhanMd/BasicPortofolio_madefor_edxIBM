const testimonialForm = document.getElementById('testimonial-form');
const recommendationsSection = document.getElementById('recommendations');

testimonialForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const testimonialText = document.getElementById('testimonial-text').value;
  const testimonialAuthor = document.getElementById('testimonial-author').value;

  if (testimonialText && testimonialAuthor) {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.classList.add('testimonial');

    const testimonialParagraph = document.createElement('p');
    testimonialParagraph.textContent = `"${testimonialText}"`;
    testimonialDiv.appendChild(testimonialParagraph);

    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = `- ${testimonialAuthor}`;
    testimonialDiv.appendChild(authorParagraph);

    recommendationsSection.insertBefore(testimonialDiv, testimonialForm);

    document.getElementById('testimonial-text').value = '';
    document.getElementById('testimonial-author').value = '';

    showThankYouPopup();
  }
});

function showThankYouPopup() {
  const popup = document.createElement('div');
  popup.classList.add('thank-you-popup');
  popup.textContent = 'Thank you for your testimonial!';

  const body = document.body;
  body.appendChild(popup);

  setTimeout(function() {
    body.removeChild(popup);
  }, 3000); // Hide the popup after 3 seconds
}