document.getElementById('serve-cat-button').addEventListener('click', fetchCatImage);

function fetchCatImage() {
  const url = 'https://cataas.com/cat?json=true';  // cataas API endpoint

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.url;  // Extract the image URL from the response
      displayCatImage(imageUrl);
    })
    .catch(error => {
      console.error('Error fetching the cat image:', error);
    });
}

function displayCatImage(imageUrl) {
    const catPictureContainer = document.getElementById('cat-picture-container');
    catPictureContainer.innerHTML = '';  // Clear any existing image
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;  // Use the image URL directly
    imgElement.alt = 'A cute cat picture';
    catPictureContainer.appendChild(imgElement);
  }
  