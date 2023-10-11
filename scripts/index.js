// Get all the <li> elements inside the <ul>
var listItems = document.querySelectorAll("ul li");

// Loop through the list items and add a click event listener
listItems.forEach(function (li) {
  li.addEventListener("click", function () {
    // Find the <a> element inside the clicked <li>
    var link = li.querySelector("a");

    if (link) {
      // Activate the link by navigating to its href
      window.location.href = link.getAttribute("href");
    }
  });
});
