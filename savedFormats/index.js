const button = document.getElementById("searchSwitch")
const options = document.getElementById("options")

let queryName = "first"

button.addEventListener('click', () => {
    options.classList.toggle("hidden");
    overlay.style.display = options.classList.contains("hidden") ? "none" : "block";
})

const optionElements = document.querySelectorAll('#options .option');
optionElements.forEach(option => {
    option.addEventListener('click', () => {
        // Get the text of the clicked option
        queryName = option.querySelector('span').textContent;
        console.log('Selected option:', queryName);
        options.classList.toggle("hidden");
        overlay.style.display = "none";
    });
});

document.querySelectorAll('.historyItem').forEach(item => {
    item.addEventListener('click', () => {
        const itemTags = item.querySelector('.itemTags').textContent;
        const itemQuery = item.querySelector('.underTags .queryHolder').textContent;
        const itemPage = item.querySelector('.underTags .pageHolder').textContent;
        
        console.log("Clicked item tags: " + itemTags);
        console.log("Clicked item query: " + itemQuery);
        console.log("Clicked item Page: " + itemPage + "\n");
    });
});

document.getElementById('escapeButton').addEventListener('click', () => {
    window.open('https://playsnake.org', '_blank');
    window.close();
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        window.open('https://playsnake.org', '_blank');
        window.close();
    }
});
