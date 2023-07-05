document.addEventListener('DOMContentLoaded', getDataFromServer);

function getDataFromServer() {
  fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      displayData(data);
    })
    .catch(error => {
      console.error('Lỗi:', error);
    });
}

function displayData(data) {
  var list1 = document.getElementById('list1');

  // Duyệt qua từng phần tử trong mảng dữ liệu
  data.forEach(item => {
      var itemDiv = document.createElement('div');
      itemDiv.classList.add('item', 'top-1');
      itemDiv.setAttribute('itemscope', '');
      itemDiv.setAttribute('itemtype', 'https://schema.org/Book');

      var link = document.createElement('a');
      link.href = 'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg';
      link.setAttribute('itemprop', 'url');

      var image = document.createElement('img');
      image.src = item.M_ID;
      image.alt = item.MANGA_NAME;
      image.classList.add('img-responsive', 'item-img');
      image.setAttribute('itemprop', 'image');

      var titleDiv = document.createElement('div');
      titleDiv.classList.add('title');

      var title = document.createElement('h3');
      title.setAttribute('itemprop', 'name');
      title.textContent = item.MANGA_DESCRIPTION;

      titleDiv.appendChild(title);
      link.appendChild(image);
      link.appendChild(titleDiv);
      itemDiv.appendChild(link);

      list1.appendChild(itemDiv);
  });
}
