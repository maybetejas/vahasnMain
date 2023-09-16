export function isValidName(name) {
    // Check if the name is not empty and contains only letters
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
      return false;
    }
  
    // Check if the name is not more than 50 characters
    if (name.length > 50) {
      return false;
    }
  
    return true;
  }
  
  
export function isValidContact(contact) {
    // Check if the contact is not empty and contains only digits
    if (!contact || !/^\d+$/.test(contact)) {
      return false;
    }
  
    // Check if the contact is exactly 10 digits long
    if (contact.length !== 10) {
      return false;
    }
  
    return true;
  }
  
  export function isValidPassword(password, confirmPassword) {
    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      return false;
    }
  
    // Check if the password is at least 10 characters long
    if (password.length < 10) {
      return false;
    }
  
    // You can add more password validation logic here if needed
  
    return true;
}
  
export function generateOTP(length) {
  const charset = "0123456789"; // The characters from which the OTP will be generated
  let otp = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    otp += charset[randomIndex];
  }

  return otp;
}

export function extractFirstName(fullName) {
  // Split the full name into an array of words
  const nameWords = fullName.trim().split(' ');

  // Return the first word, which is the first name
  return nameWords[0];
}

// utils.js
export function cycleGreetings(greetings, intervalTime) {
  let currentIndex = 0;
  let currentGreeting = greetings[currentIndex];

  // Function to update the current greeting
  function updateGreeting() {
    currentIndex = (currentIndex + 1) % greetings.length;
    currentGreeting = greetings[currentIndex];
  }

  const interval = setInterval(updateGreeting, intervalTime);

  // Return a function to stop the interval when needed
  return () => clearInterval(interval);
}

export const greetings = [
  'Hello', // English
  'नमस्ते', // Hindi
  'नमस्कार', //marathi
  'হ্যালো', // Bengali
  'வணக்கம்', // Tamil
  'ಹಲೋ', // Kannada
  'હલો', // Gujarati
  'ഹലോ', // Malayalam
  'ਹੈਲੋ', // Punjabi
  'ନମସ୍କାର', // Odia
  'హలో', // Telugu
];