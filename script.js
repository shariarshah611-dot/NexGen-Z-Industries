// ১. লোডার (১-১০০%)
window.addEventListener('load', () => {
    let percent = document.getElementById('percent');
    let bar = document.getElementById('progress-bar');
    let count = 0;
    
    let interval = setInterval(() => {
        count++;
        percent.innerText = count + "%";
        bar.style.width = count + "%";
        
        if(count === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
            }, 600);
        }
    }, 25);
});

// ২. সাইডবার টগল
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// ৩. স্মুথ স্ক্রলিং
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('sidebar').classList.remove('active');
    }
}

// ৪. অর্ডার ফরম (দামসহ)
function openOrderForm(productName, price) {
    document.getElementById('orderModal').style.display = 'block';
    document.getElementById('selectedProduct').value = "Product: " + productName;
    document.getElementById('selectedPrice').value = "Price: " + price;
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = 'none';
}

// ৫. WhatsApp মেসেজ সেন্ডিং
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // আপনার হোয়াটসঅ্যাপ নম্বর এখানে দিন (Country code সহ, যেমন: 88017XXXXXXXX)
    const myNumber = "8801302133194"; 

    const product = document.getElementById('selectedProduct').value;
    const price = document.getElementById('selectedPrice').value;
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const address = document.getElementById('userAddress').value;
    const payment = document.getElementById('paymentMethod').value;

    const message = `New Order Details:%0A%0A` +
                    `📦 ${product}%0A` +
                    `💰 ${price}%0A` +
                    `👤 Name: ${name}%0A` +
                    `📞 Phone: ${phone}%0A` +
                    `📍 Address: ${address}%0A` +
                    `💳 Payment: ${payment}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${message}`;
    
    // নতুন ট্যাবে হোয়াটসঅ্যাপ ওপেন হবে
    window.open(whatsappUrl, '_blank');
});

// ৬. FAQ লজিক
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;
        if (accordionBody.style.display === "block") {
            accordionBody.style.display = "none";
        } else {
            document.querySelectorAll('.accordion-body').forEach(body => body.style.display = "none");
            accordionBody.style.display = "block";
        }
    });
});