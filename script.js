const noodleDatabase = {
  "Maggi": { length: 24 , taste: "Savory and nostalgic" },
  "Yippee": { length: 30, taste: "Tangy and fun" },
  "Top Ramen": { length: 28, taste: "Classic salty goodness" },
  "Knorr": { length: 25, taste: "Mild and comforting" },
  "Samyang": { length: 40, taste: "Extra spicy kick" },
  "Indomie": { length: 26, taste: "Sweet and savory balance" },
  "Buldak": { length: 35, taste: "Fire in every bite" },
  "Shin Ramyeon": { length: 38, taste: "Rich, spicy broth flavor" }
};

const scanBtn = document.getElementById('scanBtn');
const brandSelect = document.getElementById('brandSelect');
const scanLine = document.querySelector('.scan-line');
const brandOutput = document.getElementById('brandOutput');
const lengthOutput = document.getElementById('lengthOutput');
const tasteOutput = document.getElementById('tasteOutput');
const imageInput = document.getElementById('imageInput');
const scanImage = document.getElementById('scanImage');

let uploadedImageURL = null;

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      scanImage.src = evt.target.result;
      scanImage.style.display = 'block';
      uploadedImageURL = evt.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    scanImage.style.display = 'none';
    scanImage.src = '';
    uploadedImageURL = null;
  }
});

scanBtn.addEventListener('click', () => {
  const brand = brandSelect.value;

  if (!brand) {
    alert("Please select a noodle brand first!");
    return;
  }

  // Show image if uploaded
  if (uploadedImageURL) {
    scanImage.style.display = 'block';
  } else {
    scanImage.style.display = 'none';
  }

  // Start scanning animation
  scanLine.classList.add('active');
  brandOutput.textContent = "";
  lengthOutput.textContent = "";
  tasteOutput.textContent = "";

  // Stop after 6 seconds and show result
  setTimeout(() => {
    scanLine.classList.remove('active');

    const noodle = noodleDatabase[brand];
    brandOutput.textContent = `Brand: ${brand}`;
    lengthOutput.textContent = `Length: ${noodle.length} cm`;
    tasteOutput.textContent = `Taste: ${noodle.taste}`;
  }, 6000);
});
