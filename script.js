document.getElementById('serve-cat-button').addEventListener('click', fetchCatImage);

function fetchCatImage() {
  const url = 'https://cataas.com/cat?json=true';  

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.url;  
      displayCatImage(imageUrl);
    })
    .catch(error => {
      console.error('Error fetching the cat image:', error);
    });
}

function displayCatImage(imageUrl) {
    const catPictureContainer = document.getElementById('cat-picture-container');
    catPictureContainer.innerHTML = '';  
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;  
    imgElement.alt = 'A cute cat picture';
    catPictureContainer.appendChild(imgElement);
  }
  