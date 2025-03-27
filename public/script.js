document.getElementById('serve-cat-button').addEventListener('click', fetchCatImage);

function fetchCatImage() { // API configuration
  const url = 'https://cataas.com/cat?json=true';  // cataas API endpoint

  fetch(url) // fetches the cat image from the API
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.url;  // extracts the image URL from the response
      displayCatImage(imageUrl);
    })
    .catch(error => {
      console.error('Error fetching the cat image:', error);
    });
}

function displayCatImage(imageUrl) { // to show the image
    const catPictureContainer = document.getElementById('cat-picture-container');
    catPictureContainer.innerHTML = '';  // gets rid of existing image if needed
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;  // uses the image URL directly
    imgElement.alt = 'A cute cat picture';
    catPictureContainer.appendChild(imgElement); // appends to the dom
  }
  