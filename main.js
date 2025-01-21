const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Function to add the Contact link to the dropdown menu
function addContactToDropdown() {
  // Check if the Contact link already exists
  if (!document.querySelector("#nav-links .mobile-contact")) {
    const contactLink = document.createElement("li");
    contactLink.classList.add("mobile-contact"); // Add a class to identify it
    contactLink.innerHTML = `<a href="contact.html">Contact</a>`;
    navLinks.appendChild(contactLink);
  }
}

// Function to remove the Contact link from the dropdown menu
function removeContactFromDropdown() {
  const contactLink = document.querySelector("#nav-links .mobile-contact");
  if (contactLink) {
    contactLink.remove();
  }
}

// Toggle the mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Add the Contact link when the menu opens in mobile view
  if (navLinks.classList.contains("open")) {
    addContactToDropdown();
  }

  // Change the icon based on the menu state
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the mobile menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Optional: Close the menu when clicking outside of it
document.addEventListener("click", (e) => {
  if (
    !menuBtn.contains(e.target) &&
    !navLinks.contains(e.target) &&
    navLinks.classList.contains("open")
  ) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Monitor screen size and remove the Contact link in full-screen mode
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    // Adjust the width to match your breakpoint
    removeContactFromDropdown();
  }
});


//readmore dropdown
function toggleReadMore(element) {
  const extraContent = element.closest('.about__details-content').querySelectorAll('.extra-content');
  extraContent.forEach((content) => {
    if (content.style.display === 'none') {
      content.style.display = 'block'; // Show the content
      element.querySelector('span').innerHTML = '<i class="ri-arrow-up-line"></i>'; // Change icon
    } else {
      content.style.display = 'none'; // Hide the content
      element.querySelector('span').innerHTML = '<i class="ri-arrow-down-line"></i>'; // Change icon back
    }
  });
}



//faq
document.querySelectorAll('.faq2__header').forEach(header => {
  header.addEventListener('click', () => {
      const description = header.nextElementSibling; // Get the description div
      description.classList.toggle('active'); // Toggle the active class
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 125, // Reduced from 250
});

ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});

ScrollReveal().reveal(".header__container .header__flex", {
  ...scrollRevealOption,
  delay: 375, // Reduced from 750
});
ScrollReveal().reveal(".header__container .CTA__btns", {
  ...scrollRevealOption,
  delay: 500, // Reduced from 1000
});

ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 250, // Reduced from 500
});

ScrollReveal().reveal(".steps2__card", {
  ...scrollRevealOption,
  interval: 250, // Reduced from 500
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 250, // Reduced from 500
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 250, // Reduced from 500
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 250, // Reduced from 500
});
ScrollReveal().reveal(".aboutCEO__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".aboutCEO__content .section__header", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});

ScrollReveal().reveal(".aboutCEO__content p", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
});

ScrollReveal().reveal(".aboutCEO__content h4", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
});

ScrollReveal().reveal(".ceo__socials", {
  ...scrollRevealOption,
  delay: 400, // Reduced from 800
});

ScrollReveal().reveal(".team__container h2", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});
ScrollReveal().reveal(".team__container h1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});

ScrollReveal().reveal(".filter-dropdown", {
  ...scrollRevealOption,
  delay: 263, // Reduced from 525
});

ScrollReveal().reveal(".row", {
  ...scrollRevealOption,
  delay: 275, // Reduced from 550
});

ScrollReveal().reveal(".animate-me", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});
ScrollReveal().reveal(".section__subheader", {
  ...scrollRevealOption,
  delay: 100, // Reduced from 200
});
ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
  delay: 150, // Reduced from 300
});

ScrollReveal().reveal(".section__description", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
});

ScrollReveal().reveal("#feature1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal("#feature2", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 
ScrollReveal().reveal("#feature3", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 

ScrollReveal().reveal("#aboutcard1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal("#aboutcard2", {
  ...scrollRevealOption,
  delay: 275, // Reduced from 550
}); 
ScrollReveal().reveal("#aboutcard3", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal(".about__details-image-1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal(".about__details-image-2", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 
ScrollReveal().reveal(".about__details-image-3", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 

ScrollReveal().reveal(".about__section-subheader", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal(".about__section-header", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 
ScrollReveal().reveal(".about__section-description", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 

ScrollReveal().reveal(".team__container", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 
ScrollReveal().reveal(".step1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal(".step1ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal(".step2", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 
ScrollReveal().reveal(".step2ptag", {
  ...scrollRevealOption,
  delay: 400, // Reduced from 800
}); 

ScrollReveal().reveal(".step3", {
  ...scrollRevealOption,
  delay: 450, // Reduced from 900
}); 
ScrollReveal().reveal(".step3ptag", {
  ...scrollRevealOption,
  delay: 500, // Reduced from 1000
}); 

ScrollReveal().reveal(".section__links", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 

ScrollReveal().reveal(".header__form", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
});

ScrollReveal().reveal(".faq2__content", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
});

ScrollReveal().reveal("#card1", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 

ScrollReveal().reveal("#card2", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal("#card3", {
  ...scrollRevealOption,
  delay: 350, // Reduced from 700
}); 

ScrollReveal().reveal(".about__details-btn", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 
ScrollReveal().reveal(".about__details-btn2", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 

//service page

ScrollReveal().reveal("#service-card1", {
  ...scrollRevealOption,
  delay: 50, // Reduced from 100
}); 

ScrollReveal().reveal("#service-card2", {
  ...scrollRevealOption,
  delay: 100, // Reduced from 200
}); 

ScrollReveal().reveal("#service-card3", {
  ...scrollRevealOption,
  delay: 150, // Reduced from 300
}); 

ScrollReveal().reveal("#service-card4", {
  ...scrollRevealOption,
  delay: 200, // Reduced from 400
}); 

ScrollReveal().reveal("#service-card5", {
  ...scrollRevealOption,
  delay: 250, // Reduced from 500
}); 

ScrollReveal().reveal("#service-card6", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
});

ScrollReveal().reveal("#service1ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 
ScrollReveal().reveal("#service2ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal("#service3ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal("#service4ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal("#service5ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
}); 

ScrollReveal().reveal("#service6ptag", {
  ...scrollRevealOption,
  delay: 300, // Reduced from 600
});
//index

ScrollReveal().reveal(".services-grid", {
  ...scrollRevealOption,
  delay: 250,
}); 


ScrollReveal().reveal(".swiper", {
  ...scrollRevealOption,
  delay: 250,
}); 


ScrollReveal().reveal(".faq__content", {
  ...scrollRevealOption,
  delay: 250,
}); 

ScrollReveal().reveal(".officeptag", {
  ...scrollRevealOption,
  delay: 250,
}); 

ScrollReveal().reveal(".slider", {
  ...scrollRevealOption,
  delay: 250,
}); 

ScrollReveal().reveal(".partners", {
  ...scrollRevealOption,
  delay: 250,
}); 

ScrollReveal().reveal(".logo-container", {
  ...scrollRevealOption,
  delay: 50,
}); 




const faq = document.querySelector(".faq__grid");

faq.addEventListener("click", (e) => {
  const target = e.target;
  const faqCard = target.closest(".faq__card");
  if (target.classList.contains("ri-arrow-down-s-line")) {
    if (faqCard.classList.contains("active")) {
      faqCard.classList.remove("active");
    } else {
      Array.from(faq.children).forEach((item) => {
        item.classList.remove("active");
      });
      faqCard.classList.add("active");
    }
  }
});

ScrollReveal().reveal(".faq__image img", {
  ...scrollRevealOption,
  origin: "left",
});
// Initialize ScrollReveal for elements with class names


//new stuff
document.addEventListener("DOMContentLoaded", () => {
  const faq2 = document.querySelector(".faq2__grid");

  if (faq2) {
      faq2.addEventListener("click", (e) => {
          const target2 = e.target;
          const faq2Card = target2.closest(".faq2__card");
          if (target2.classList.contains("ri-arrow-down-s-line")) {
              if (faq2Card.classList.contains("active")) {
                  faq2Card.classList.remove("active");
              } else {
                  Array.from(faq2.children).forEach((item) => {
                      item.classList.remove("active");
                  });
                  faq2Card.classList.add("active");
              }
          }
      });
  } 
});




ScrollReveal().reveal(".faq2__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__details-image about__details-image-1", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__details-image about__details-image-2", {
  ...scrollRevealOption,
  origin: "left",
});


ScrollReveal().reveal(".about__details-image about__details-image-3", {
  ...scrollRevealOption,
  origin: "left",
});


const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});


const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated = false;
window.addEventListener("scroll", () => {
  if(
    pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
    activated === false
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;
      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if(count < target){
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 10);
        }else{
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  }else if(
    pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true
  ) {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
    activated = false;
  }
});

var swiper2 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission
  
  const form = event.target;
  const formData = new FormData(form);

  // Send the form data to FormKeep immediately
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Open the popup after successful form submission
        openPopup();
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    });
}

function openPopup() {
  document.getElementById('popupContainer').classList.add('open-popup-container');
  document.getElementById('popup').classList.add('open-popup');
}

function closePopup() {
  document.getElementById('popupContainer').classList.remove('open-popup-container');
  document.getElementById('popup').classList.remove('open-popup');

  // Reload the page after closing the popup
  window.location.reload();
}

// Attach the 'OK' button to the closePopup function
document.querySelector('#popup button').addEventListener('click', closePopup);
function handleSubmit2(event) {
  event.preventDefault(); // Prevent default form submission
  
  const form = event.target;
  const formData = new FormData(form);

  // Send the form data to FormKeep immediately
  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Show the thank you message after successful subscription
        document.getElementById('thankYouMessage').style.display = 'block';  // Display the message
        form.style.display = 'none';  // Hide the form (optional)
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("There was an error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Find all mailto links on the page
  const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
  
  mailtoLinks.forEach(link => {
    // Get the original email address from the href attribute
    const email = link.getAttribute("href").replace("mailto:", "");
    const obfuscatedEmail = email.split("").map(char => `&#${char.charCodeAt(0)};`).join("");

    // Replace the link's href and inner text with the obfuscated version
    link.setAttribute("href", `mailto:${email}`);
    link.innerHTML = `<span><i class="ri-mail-fill"></i></span>${obfuscatedEmail}`;
  });
});
