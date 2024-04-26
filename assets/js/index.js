// Desktop View navbar active class
$(document).ready(function() {
  $(".navbar-nav > li > a").click(function() {
    $(".navbar-nav > li > a").removeClass("active");
    $(this).addClass("active");
  });
});
// Desktop View navbar active class End

$(document).ready(function() {
  $(".menDropdownDiv, .dropdownDiv").mouseenter(function() {
    $(".dropdownDiv").show();
    $(".dropdownDiv2").hide();
  });
  $(".dropdownDiv").mouseleave(function() {
    $(".dropdownDiv").hide();
  });

  $(".womenDropdownDiv, .dropdownDiv2").hover(function() {
    $(".dropdownDiv2").show();
    $(".dropdownDiv").hide();
  });
  $(".dropdownDiv2").mouseleave(function() {
    $(".dropdownDiv2").hide();
  });
});
// show password js
function showPass() {
  var passInput = $("#passInput");
  var showPassIcon = $("#showPass");
  if (passInput.attr("type") === "password") {
    showPassIcon.removeClass("fa-eye-slash").addClass("fa-eye");
    passInput.attr("type", "text");
  } else {
    showPassIcon.removeClass("fa-eye").addClass("fa-eye-slash");
    passInput.attr("type", "password");
  }
}

const formControls = document.querySelectorAll(".form-control");

// Loop through each element and add event listener
formControls.forEach((control) => {
  control.addEventListener("focus", () => {
    // Toggle class on the parent element
    control.parentElement.classList.add("bg-gradient");
  });
  control.addEventListener("blur", () => {
    // Toggle class on the parent element
    control.parentElement.classList.remove("bg-gradient");
  });
});

// our_Support
var swiper = new Swiper(".our_Support .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    clickable: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
// our_Support End

// blog_Section
var swiper = new Swiper(".blog_Section .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    524: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// blog_Section End

// events_Media_Section
var swiper = new Swiper(".events_Media_Section .mySwiper", {
  slidesPerView: 4,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 10000000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    524: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// events_Media_Section End

// upload file name show js
function updateFileName(input) {
  var fileName = input.files[0].name;
  document.getElementById("signature-label").innerText = fileName;
}
// upload file name show js

// specialists Slider
var swiper = new Swiper("#specialists .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    525: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const dropdownMenu = document.querySelector("#dropdown-menu");
const selectedItemsDisplay = document.getElementById("multiSelectDropdown");
let mySelectedItems = [];

function handleCB(event) {
  const checkbox = event.target;
  if (checkbox.checked) {
    mySelectedItems.push(checkbox.value);
  } else {
    mySelectedItems = mySelectedItems.filter((item) => item !== checkbox.value);
  }

  console.log(mySelectedItems);
  // Update the display of selected items
  selectedItemsDisplay.textContent =
    mySelectedItems.length > 0 ? mySelectedItems.join(", ") : "";
}

dropdownMenu.addEventListener("change", handleCB);
