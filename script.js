// Function to enable smooth scrolling for navigation links
function enableSmoothScrolling() {
    $("a.nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800, // Animation duration in milliseconds
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
}

// Function to dynamically update the current year in the footer
function updateCurrentYear() {
    var currentYear = new Date().getFullYear();
    $("#currentYear").text(currentYear);
}

// Function to close the mobile navigation menu after clicking a link
function closeMobileMenuOnLinkClick() {
    $(".navbar-collapse a.nav-link").on("click", function () {
        $(".navbar-toggler").click(); // Simulate a click on the menu button
    });
}

// Wait for the document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    enableSmoothScrolling();
    updateCurrentYear();
    closeMobileMenuOnLinkClick();
});
