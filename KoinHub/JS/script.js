document.addEventListener('DOMContentLoaded', () => {
  // Fix navbar padding for hero-section
  const nav = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero-section');
  if (nav && heroSection) {
    const navHeight = nav.offsetHeight;
    heroSection.style.paddingTop = `${navHeight + 20}px`;
  }

  // validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Login Validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const emailInput = document.getElementById('loginEmail');
      const passwordInput = document.getElementById('loginPassword');
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      // Reset validation 
      emailInput.classList.remove('is-invalid', 'is-valid');
      passwordInput.classList.remove('is-invalid', 'is-valid');

      // Validate email
      if (!email) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!isValidEmail(email)) {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailInput.classList.add('is-valid');
      }

      // Validate password
      if (!password) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
      } else if (password.length < 8) {
        passwordInput.classList.add('is-invalid');
        passwordInput.nextElementSibling.textContent = 'Password must be at least 8 characters.';
        isValid = false;
      } else {
        passwordInput.classList.add('is-valid');
      }

      // If valid 
      if (isValid) {
        console.log('Login Form Submitted:', { email, password });
        // Optionally close modal
        bootstrap.Modal.getInstance(loginForm.closest('.modal')).hide();
        // Add AJAX call here if needed (see below)
      }
    });
  }

  // Sign Up Validation
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const emailInput = document.getElementById('signupEmail');
      const passwordInput = document.getElementById('signupPassword');
      const confirmPasswordInput = document.getElementById('signupConfirmPassword');
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();

      // Reset validation 
      emailInput.classList.remove('is-invalid', 'is-valid');
      passwordInput.classList.remove('is-invalid', 'is-valid');
      confirmPasswordInput.classList.remove('is-invalid', 'is-valid');

      // Validate email
      if (!email) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!isValidEmail(email)) {
        emailInput.classList.add('is-invalid');
        emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailInput.classList.add('is-valid');
      }

      // Validate password
      if (!password) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
      } else if (password.length < 8) {
        passwordInput.classList.add('is-invalid');
        passwordInput.nextElementSibling.textContent = 'Password must be at least 8 characters.';
        isValid = false;
      } else {
        passwordInput.classList.add('is-valid');
      }

      // Validate confirm password
      if (!confirmPassword) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
      } else if (confirmPassword !== password) {
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordInput.nextElementSibling.textContent = 'Passwords do not match.';
        isValid = false;
      } else {
        confirmPasswordInput.classList.add('is-valid');
      }

      // If valid
      if (isValid) {
        console.log('Sign Up Form Submitted:', { email, password });
        bootstrap.Modal.getInstance(signupForm.closest('.modal')).hide();
      }
    });
  }

  // 2FA Validation
  const twoFAForm = document.getElementById('twoFAForm');
  if (twoFAForm) {
    twoFAForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const twoFAInput = document.getElementById('twoFACode');
      const code = twoFAInput.value.trim();

      // Reset validation 
      twoFAInput.classList.remove('is-invalid', 'is-valid');

      // Validate 2FA code (6 digits)
      if (!code) {
        twoFAInput.classList.add('is-invalid');
        isValid = false;
      } else if (!/^\d{6}$/.test(code)) {
        twoFAInput.classList.add('is-invalid');
        twoFAInput.nextElementSibling.textContent = 'Enter a 6-digit code.';
        isValid = false;
      } else {
        twoFAInput.classList.add('is-valid');
      }

      // If valid
      if (isValid) {
        console.log('2FA Form Submitted:', { code });
        bootstrap.Modal.getInstance(twoFAForm.closest('.modal')).hide();
      }
    });
  }
});