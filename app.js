//ANIMATION EFFECT WHEN USER VIEW THE SECTION
const animateSections = document.querySelectorAll(".leftsy");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the section is in the viewport, add the class to trigger the animation
        entry.target.classList.add("hidden", "animate");
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.1, // Trigger when 50% of the section is visible
  }
);

// Observe each animate section
animateSections.forEach((section) => {
  observer.observe(section);
});

const animateSections1 = document.querySelectorAll(".rightsy");

// Create an Intersection Observer
const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the section is in the viewport, add the class to trigger the animation
        entry.target.classList.add("slideRight", "animate");
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0.1, // Trigger when 50% of the section is visible
  }
);

// Observe each animate section
animateSections1.forEach((section) => {
  observer1.observe(section);
});

const animateSections2 = document.querySelectorAll(".downsy");

// Create an Intersection Observer
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the section is in the viewport, add the class to trigger the animation
        entry.target.classList.add("slideTop", "animate");
      }
    });
  },
  {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 0, // Trigger when 50% of the section is visible
  }
);

// Observe each animate section
animateSections2.forEach((section) => {
  observer2.observe(section);
});
//END-ANIMATION EFFECT WHEN USER VIEW THE SECTION

// START-BAR
$(document).ready(function () {
  console.log("hello jee");
  $("#br").click(function () {
    $(".navTxt").toggle();
    $(".nav").removeClass("pdngTop nav1");
    $(".navRow").toggleClass("navRow1");
    if ($(".navTxt").css("display") === "block") {
      console.log("hello 22");
      $(".nav").toggleClass("pdngTop nav1");
    }
  });
  // jQuery methods go here...
});

// END-BAR
