function contactUs() {
    alert("Contact us button clicked!");
    // You can add more interactivity here as needed
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form submitted!");
    // You can add form submission logic here
});


const dots = document.querySelectorAll('.dot');
const services = document.querySelectorAll('.service-item');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        services.forEach(service => service.style.display = 'none');
        services[index].style.display = 'block';
    });
});

// Initial state
services.forEach((service, index) => {
    if (index !== 0) service.style.display = 'none';
});

function changeImage(imagePath) {
    document.getElementById('main-image').src = imagePath;
}

