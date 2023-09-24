$(document).ready(function () {
    // Smooth scrolling for navigation links
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

    // Update the year dynamically in the footer
    var currentYear = new Date().getFullYear();
    $("#currentYear").text(currentYear);

    // Close the mobile navigation menu after clicking a link
    $(".navbar-collapse a.nav-link").on("click", function () {
        $(".navbar-toggler").click(); // Simulate a click on the menu button
    });
});
