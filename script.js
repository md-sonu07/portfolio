  //for the typing effect
  var typed = new Typed("#element", {
    strings: ["<i>Coder.</i>  ","<i>Programmer.</i>  ", "<i>Developer.</i>  ", " <i>Web Designer.</i>" ,"UI/UX Designer."],
    typeSpeed: 70,
    backSpeed: 100,
    loop: true,
});
// typpping js end

//side bar
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarText = document.querySelectorAll(".sidebar-text");
  const toggleIcon = document.getElementById("toggle-icon");

  // Set default state (closed)
  sidebar.classList.remove("w-56");
  sidebar.classList.add("w-20");
  sidebarText.forEach((text) => text.classList.add("hidden"));
  toggleIcon.classList.replace("fa-chevron-left", "fa-chevron-right");
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarText = document.querySelectorAll(".sidebar-text");
  const toggleIcon = document.getElementById("toggle-icon");

  if (sidebar.classList.contains("w-56")) {
    sidebar.classList.replace("w-56", "w-20"); // Collapse sidebar
    sidebarText.forEach((text) => text.classList.add("hidden"));
    toggleIcon.classList.replace("fa-chevron-left", "fa-chevron-right");
  } else {
    sidebar.classList.replace("w-20", "w-56"); // Expand sidebar
    sidebarText.forEach((text) => text.classList.remove("hidden"));
    toggleIcon.classList.replace("fa-chevron-right", "fa-chevron-left");
  }
}

//side bar end



// go to top button
// Select the scrollable container
const scrollableDiv = document.querySelector('.flex-1');
const goToTopButton = document.getElementById('goToTopButton');

// Show the button when scrolling down inside the div
scrollableDiv.addEventListener('scroll', () => {
    if (scrollableDiv.scrollTop > 100) {
        goToTopButton.classList.remove('hidden');
    } else {
        goToTopButton.classList.add('hidden');
    }
});

// Scroll to top of the div
goToTopButton.addEventListener('click', () => {
    scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' });
});

// go to top button end





// togal buttons education section

function toggleDropdown(id) {
  const element = document.getElementById(id);
  const icon = document.getElementById(id + "-icon");

  // Toggle the hidden class to show/hide the content
  element.classList.toggle("hidden");

  // Toggle between plus and minus icon
  if (element.classList.contains("hidden")) {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  }
}
// togal buttons education section end

// projects filter buttons
function filterProjects(type, btn) { 
  // Reset all buttons to default color
  const allButtons = document.querySelectorAll(".flex button");
  allButtons.forEach((button) => {
    button.classList.remove(
      "bg-gray-800", 
      "text-white"
    );
    button.classList.add("bg-black", "text-white", "hover:bg-gray-800");
  });

  // Set the active button style
  btn.classList.add("bg-gray-800", "text-white");
  btn.classList.remove("bg-black");

  // Show or hide projects based on the filter type
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    if (type === "all") {
      project.style.display = "block";
    } else if (type === "clones" && project.classList.contains("clone")) {
      project.style.display = "block";
    } else if (type === "originals" && project.classList.contains("original")) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// projects filter buttons end

//message and follwing btn code
// Select the message and follow buttons
const messageButton = document.getElementById("messageButton");
const followingButton = document.getElementById("followingButton");

// Add hover effect to the "Follow" button
followingButton.addEventListener("mouseenter", () => {
  followingButton.classList.add("bg-gray-600");
  followingButton.classList.remove("bg-black");
  messageButton.classList.add("bg-black");
  messageButton.classList.remove("bg-gray-600");
});

// Revert changes when the mouse leaves the "Follow" button
followingButton.addEventListener("mouseleave", () => {
  followingButton.classList.add("bg-black");
  followingButton.classList.remove("bg-gray-600");
  messageButton.classList.add("bg-gray-600");
  messageButton.classList.remove("bg-black");
});

//message and follwing btn code end

// Hover Card
document.addEventListener("DOMContentLoaded", () => {
  const hoverLinks = document.querySelectorAll("#hoverLink"); // All hover elements
  const hoverCard = document.getElementById("hoverCard"); // Hover card
  let isHoveringCard = false; // Track if the cursor is on the card
  let hoverTimeout; // Timeout to delay hiding

  // Position settings
  const position = {
    placement: "bottom", // Options: "top", "bottom"
    alignment: "center", // Options: "left", "center", "right"
    offsetX: 100, // Horizontal offset
    offsetY: 20, // Vertical offset (default: 30px)
  };

  if (!hoverLinks.length) {
    console.error('No elements with ID "hoverLink" found.');
    return;
  }
  if (!hoverCard) {
    console.error('Element with ID "hoverCard" not found.');
    return;
  }

  hoverLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout); // Prevent hiding if user moves quickly
      hoverCard.classList.remove("hidden");

      const cardWidth = hoverCard.offsetWidth;
      const cardHeight = hoverCard.offsetHeight;

      let topPosition, leftPosition;

      // Set vertical position
      if (position.placement === "top") {
        topPosition = link.offsetTop - cardHeight - position.offsetY;
      } else {
        topPosition = link.offsetTop + link.offsetHeight + position.offsetY;
      }

      // Set horizontal position
      if (position.alignment === "left") {
        leftPosition = link.offsetLeft;
      } else if (position.alignment === "right") {
        leftPosition = link.offsetLeft + link.offsetWidth - cardWidth;
      } else {
        leftPosition = link.offsetLeft + link.offsetWidth / 2 - cardWidth / 2;
      }

      // Apply positioning
      hoverCard.style.position = "absolute";
      hoverCard.style.top = `${topPosition}px`;
      hoverCard.style.left = `${leftPosition + position.offsetX}px`;
    });

    link.addEventListener("mouseleave", () => {
      hoverTimeout = setTimeout(() => {
        if (!isHoveringCard) {
          hoverCard.classList.add("hidden");
        }
      }, 200); // Small delay to prevent flickering
    });
  });

  // Keep the hover card visible when the user enters
  hoverCard.addEventListener("mouseenter", () => {
    isHoveringCard = true;
    clearTimeout(hoverTimeout);
    hoverCard.classList.remove("hidden");
  });

  // Hide the card when the user leaves
  hoverCard.addEventListener("mouseleave", () => {
    isHoveringCard = false;
    hoverTimeout = setTimeout(() => {
      hoverCard.classList.add("hidden");
    }, 200); // Delay to prevent flickering
  });
});

// Hover Card code end
