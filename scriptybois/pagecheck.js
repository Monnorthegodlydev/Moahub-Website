document.addEventListener("DOMContentLoaded", function () {
    // Get the page parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");

    // Define a function to load content based on the page parameter
    function loadContent(page) {
        const contentElement = document.getElementById("content");

        // Fetch the HTML content of the specified page from the parent directory
        fetch(`../${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`404. ${page} Page Dose Not Exist!`);
                }
                return response.text();
            })
            .then(htmlContent => {
                // Set the fetched HTML content in the designated element
                contentElement.innerHTML = htmlContent;
            })
            .catch(error => {
                // Handle errors (e.g., page not found)
                contentElement.innerHTML = `<p>${error.message}</p>`;
            });
    }

    // Load content based on the page parameter
    loadContent(page);
});
