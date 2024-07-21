
// timeline
gsap.to('.logo', {
  y: 10,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

var tl = gsap.timeline()
tl.from("nav h1",{
    y: -20,
    opacity:0,
    duration : 1,
    delay:0.5
})

tl.from("#nav-right ",{
    y: -20,
    opacity:0,
    duration : 1,
   
})
//hero section
document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // Animate hero content
  tl.from('.hero-title', { opacity: 0, y: 50, duration: 1 })
    .from('.hero-subtitle', { opacity: 0, y: 30, duration: 1}, '-=0.5')
   

  // Animate network sphere
  gsap.to('.network-sphere', {
    scale: 1.1,
    opacity: 0.8,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });

  // Animate floating elements
  const floatItems = document.querySelectorAll('.float-item');
  floatItems.forEach((item, index) => {
    gsap.set(item, {
      x: Math.random() * 300 - 150,
      y: Math.random() * 300 - 150,
    });

    gsap.to(item, {
      x: '+=30',
      y: '+=30',
      rotation: Math.random() * 360,
      duration: 3 + index,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
});
gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 50,
  duration: 2,
  delay: 0.7,
  ease: "power3.out"
});
gsap.to(".float-item", {
  y: "random(-20, 20)",
  x: "random(-20, 20)",
  rotation: "random(-15, 15)",
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: {
    each: 0.2,
    from: "random"
  }
});

// for marque

let scrollDirection = 1; // 1 for forward, -1 for reverse
let animation;

// Function to create or update the animation
function updateAnimation() {
  if (animation) animation.kill(); // Kill the previous animation if it exists

  animation = gsap.to(".marque", {
    duration: 8, // Adjust this value to change the speed
    xPercent: -100,
    ease: "none",
    repeat: -1
  });
}

// Create initial animation
updateAnimation();

// // Add wheel event listener
window.addEventListener("wheel", function(event) {
  // Determine scroll direction
  if (event.deltaY < 0) { // Scrolling up
    scrollDirection = -1;
    animation.reverse();
  } else { // Scrolling down or not scrolling
    if (scrollDirection === -1) {
      scrollDirection = 1;
      animation.play();
    }
  }
});


// Resume forward movement after a brief pause when scrolling stops
let scrollTimeout;
window.addEventListener("wheel", function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    if (scrollDirection === -1) {
      scrollDirection = 1;
      animation.play();
    }
  }, 150); // Adjust this value to change how quickly it resumes after scrolling
});

// Animate feature card images on hover
document.querySelectorAll('.feature-card').forEach(card => {
  const image = card.querySelector('img');
  card.addEventListener('mouseenter', () => {
      gsap.to(image, {duration: 0.3, scale: 1.1, rotation: 5, ease: "power2.out"});
  });
  card.addEventListener('mouseleave', () => {
      gsap.to(image, {duration: 0.3, scale: 1, rotation: 0, ease: "power2.in"});
  });
});

//animating how it work section

gsap.registerPlugin(ScrollTrigger);

// Animation for the main heading
gsap.from("#how-it-works h2", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#how-it-works",
    start: "top 80%",
  }
});

// Animation for each step
gsap.utils.toArray(".step").forEach((step, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: step,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  tl.from(step, {
    duration: 0.6,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  })
  .from(step.querySelector('.step-number'), {
    duration: 0.6,
    scale: 0,
    rotation: 360,
    borderRadius: "50%",
    backgroundColor: "#ff6b6b",
    ease: "back.out(1.7)",
  }, "-=0.3")
  .from(step.querySelector('h3'), {
    duration: 0.5,
    opacity: 0,
    x: -20,
    ease: "power3.out"
  }, "-=0.3")
  .from(step.querySelector('p'), {
    duration: 0.5,
    opacity: 0,
    x: 20,
    ease: "power3.out"
  }, "-=0.3");
});

// Hover effect for step numbers
gsap.utils.toArray(".step-number").forEach(number => {
  number.addEventListener("mouseenter", () => {
    gsap.to(number, {
      duration: 0.3,
      scale: 1.1,
      backgroundColor: "#4ecdc4",
      ease: "power2.out"
    });
  });

  number.addEventListener("mouseleave", () => {
    gsap.to(number, {
      duration: 0.3,
      scale: 1,
      backgroundColor: "#ff6b6b",
      ease: "power2.in"
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.cta-background', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });

  gsap.from('.cta h2', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  });

});


// Footer animation
gsap.from('footer', {
  scrollTrigger: {
      trigger: 'footer',
      start: 'top 90%'
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: 'power3.out'
});

// form
// Make sure to include the GSAP library in your HTML file
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
  const brandButton = document.getElementById('brandButton');
  const influencerButton = document.getElementById('influencerButton');
  const brandFormPopup = document.getElementById('brandFormPopup');
  const influencerFormPopup = document.getElementById('influencerFormPopup');
  const closeButtons = document.querySelectorAll('.close-button');
  const brandSignupForm = document.getElementById('brandSignupForm');
  const influencerSignupForm = document.getElementById('influencerSignupForm');

  function openPopup(popup) {
    popup.style.display = 'block';
    gsap.from(popup.querySelector('.form-content'), {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: 'power2.out'
    });
  }

  function closePopupAnimation(popup) {
    gsap.to(popup.querySelector('.form-content'), {
      duration: 0.5,
      y: -50,
      opacity: 0,
      ease: 'power2.in',
      onComplete: () => {
        popup.style.display = 'none';
      }
    });
  }

  brandButton.addEventListener('click', () => openPopup(brandFormPopup));
  influencerButton.addEventListener('click', () => openPopup(influencerFormPopup));

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.closest('.form-popup');
      closePopupAnimation(popup);
    });
  });

  [brandSignupForm, influencerSignupForm].forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would typically send the form data to your server
      console.log('Form submitted:', form.id);
      closePopupAnimation(form.closest('.form-popup'));
    });
  });

  // Micro-interactions for form inputs
  const formInputs = document.querySelectorAll('input, select, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        duration: 0.3,
        scale: 1.05,
        borderColor: 'var(--primary-color)',
        ease: 'power1.out'
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        duration: 0.3,
        scale: 1,
        borderColor: 'var(--accent-color)',
        ease: 'power1.in'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code)
  
    const contentNicheSelect = document.getElementById('contentNiche');
    const selectWrapper = contentNicheSelect.closest('.select-wrapper');
    const selectArrow = selectWrapper.querySelector('.select-arrow');
  
    // Animate options when the dropdown is opened
    contentNicheSelect.addEventListener('mousedown', () => {
      gsap.to(selectArrow, {
        duration: 0.3,
        rotation: 180,
        ease: 'power2.out'
      });
    });
  
    // Animate options when the dropdown is closed
    contentNicheSelect.addEventListener('change', () => {
      gsap.to(selectArrow, {
        duration: 0.3,
        rotation: 0,
        ease: 'power2.out'
      });
  
      // Animate the selected option
      gsap.from(contentNicheSelect, {
        duration: 0.5,
        scale: 1.05,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  
    // Animate options on hover
    contentNicheSelect.addEventListener('mouseover', () => {
      gsap.to(selectWrapper, {
        duration: 0.3,
        scale: 1.02,
        ease: 'power2.out'
      });
    });
  
    contentNicheSelect.addEventListener('mouseout', () => {
      gsap.to(selectWrapper, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
      });
    });
  
    // Animate options when focusing and blurring
    contentNicheSelect.addEventListener('focus', () => {
      gsap.to(selectWrapper, {
        duration: 0.3,
        scale: 1.05,
        borderColor: 'var(--primary-color)',
        ease: 'power2.out'
      });
    });
  
    contentNicheSelect.addEventListener('blur', () => {
      gsap.to(selectWrapper, {
        duration: 0.3,
        scale: 1,
        borderColor: 'var(--accent-color)',
        ease: 'power2.out'
      });
    });
  });
  // Card-based animation for form sections
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach((group, index) => {
    gsap.from(group, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });

  // Loading animation for form submission
  function showLoadingAnimation(form) {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.classList.add('loading-overlay');
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    form.appendChild(loadingOverlay);

    gsap.to(loadingOverlay, {
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out'
    });
  }

  function hideLoadingAnimation(form) {
    const loadingOverlay = form.querySelector('.loading-overlay');
    gsap.to(loadingOverlay, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.in',
      onComplete: () => {
        loadingOverlay.remove();
      }
    });
  }

  [brandSignupForm, influencerSignupForm].forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showLoadingAnimation(form);
      
      // Simulate form submission delay
      setTimeout(() => {
        hideLoadingAnimation(form);
        closePopupAnimation(form.closest('.form-popup'));
      }, 2000);
    });
  });
});

// Function to store form data
function storeFormData(formId, dataKey) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Get existing data or initialize an empty array
    let existingData = JSON.parse(localStorage.getItem(dataKey) || '[]');
    existingData.push(data);
    
    // Store updated data
    localStorage.setItem(dataKey, JSON.stringify(existingData));
    
    alert('Form submitted successfully!');
    form.reset();
  });
}

// Store brand form data
storeFormData('brandSignupForm', 'brandData');

// Store influencer form data
storeFormData('influencerSignupForm', 'influencerData');
function loadStoredData() {
  const brandData = JSON.parse(localStorage.getItem('brandData') || '[]');
  const influencerData = JSON.parse(localStorage.getItem('influencerData') || '[]');
  
  console.log('Stored Brand Data:', brandData);
  console.log('Stored Influencer Data:', influencerData);
  
  // You can use this data to populate the form fields or display it elsewhere on the page
}

