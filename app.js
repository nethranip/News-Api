// app.js
const API_KEY = '2b86276fd0b840ff8ef7c13e9d6cf489';
const newsContainer = document.getElementById('news-container');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');

// Function to fetch news from the News API
async function fetchNews(query = '') {
    const url = 'news.json';
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles);
}

// Function to display news articles on the page
function displayNews(articles) {
    newsContainer.innerHTML = ''; // Clear previous news

    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        newsCard.innerHTML = `
            <img src="${article.urlToImage || 'default.jpg'}" alt="News Image">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    fetchNews(query);
});

// Fetch initial news on page load
fetchNews('latest');