import WOW from 'wow.js'; // Import WOW.js

export const initializeAnimations = () => {
  // Initialize WOW.js
  const wow = new WOW({
    boxClass: 'wow', // Default class for WOW.js
    animateClass: 'animated', // CSS class for animation
    offset: 0, // Distance to start animation
    mobile: true, // Enable animations on mobile
    live: true, // Keep WOW.js updating elements dynamically
  });
  
  wow.init(); // Initialize WOW.js
};
