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

export const servicesList = [
  {
    id: 1,
    svg: 'location.svg',
    name: "Towing",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Emergency Towing",
      "Flatbed Towing",
      "Long-Distance Towing",
      "Motorcycle Towing",
      "Off-Road Recovery"
    ]
  },
  {
    id: 2,
    svg: 'location.svg',
    name: "Fuel/EV Recharge",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Gasoline Refueling",
      "Electric Vehicle Charging",
      "Fuel Delivery",
      "Battery Jumpstart"
    ]
  },
  {
    id: 3,
    svg: 'location.svg',
    name: "Puncture Repair",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Flat Tire Repair",
      "Spare Tire Installation",
      "Tire Replacement",
      "Tire Pressure Check"
    ]
  },
  {
    id: 4,
    svg: 'location.svg',
    name: "Car Breakdown Assistance",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Vehicle Diagnosis",
      "Engine Troubleshooting",
      "Jumpstart",
      "Minor Repairs"
    ]
  },
  {
    id: 5,
    svg: 'location.svg',
    name: "Accident Assistance",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Collision Recovery",
      "Emergency Medical Aid",
      "Police Report Assistance",
      "Legal Support"
    ]
  },
  {
    id: 6,
    svg: 'location.svg',
    name: "Test Service",
    link: "https://www.youtube.com/embed/sRs2o36a1Us?si=9nmSCVpORpvzpYQt",
    services: [
      "Test Service 1",
      "Test Service 2",
      "Test Service 3",
      "Test Service 4"
    ]
  }
];



export const subscriptions = [
  {
    id: 7,
    svg: 'location.svg',
    name: "weekly",
    link: "https://www.youtube.com/embed/6F2XzwW4X-I?si=pTeyw0VMOgSDQhma",
    services: [
      "Tyres",
      "Windows",
      "Panels",
      "lights",
      "Rims"
    ]
  },
  {
    id: 8,
    svg: 'location.svg',
    name: "bi-weekly",
    link: "https://www.youtube.com/embed/6F2XzwW4X-I?si=pTeyw0VMOgSDQhma",
    services: [
      "Tyres",
      "Windows",
    ]
  },
  {
    id: 9,
    svg: 'location.svg',
    name: "Monthly",
    link: "https://www.youtube.com/embed/6F2XzwW4X-I?si=pTeyw0VMOgSDQhma",
    services: [
      "lights",
      "Rims",
      "Rims",
      "Rims",
      "Rims",
    ]
  },
]

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const userLocation = { lat: latitude, lng: longitude };
          resolve(userLocation);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              reject('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              reject('The request to get user location timed out.');
              break;
            default:
              reject('An unknown error occurred.');
              break;
          }
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
}

export function formatAddress(address) {
    if (address) {
      const words = address.split(' ');
      if (words.length > 1) {
        return words[0] + ' ...';
      } else {
        return words[0];
      }
    } else {
      return 'Set location';
    }
  }


//stores

import { writable } from 'svelte/store';

export const currentCar = writable(''); // Initialize with an empty string or the default car value
export const currentLocation = writable(''); // Initialize with an empty string or the default car value
