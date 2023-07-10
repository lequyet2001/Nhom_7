fetch('http://localhost:3000/manga')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        displayData(data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
var manga
function displayData(data) {
    var list1 = document.getElementById('list1');

    // Duyệt qua từng phần tử trong mảng dữ liệu
    data.forEach(item => {
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('item', `top-${item.top_manga}`);
        itemDiv.setAttribute('itemscope', '');
        itemDiv.setAttribute('itemtype', 'https://schema.org/Book');
        var link = document.createElement('a');
        link.href = './chitiettruyen.html';
        link.setAttribute('itemprop', 'url');
        var image = document.createElement('img');
        image.src = item.IMAGE;
        image.alt = item.MANGA_NAME;
        image.classList.add('img-responsive', 'item-img');
        image.setAttribute('itemprop', 'image');
        var titleDiv = document.createElement('div');
        titleDiv.classList.add('title');

        var title = document.createElement('h3');
        title.setAttribute('itemprop', 'name');
        title.textContent = item.MANGA_NAME;

        titleDiv.appendChild(title);
        link.appendChild(image);
        link.appendChild(titleDiv);
        itemDiv.appendChild(link);
        list1.appendChild(itemDiv);
        link.onclick = function (event) {
            event.preventDefault();
            fetch(`http://localhost:3000/manga/${item.M_ID}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('id',JSON.stringify(data))
                    console.log(data.MANGA_NAME)
                    
                    window.location.href = link.href;
                })
                .catch(error => {
                    console.error('Lỗi:', error);
                });

        }

    });

}



fetch('http://localhost:3000/cate')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displayDataCate(data);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

function displayDataCate(data) {
    var div = document.getElementById('hot-select');
    data.forEach(e => {
        var options = document.createElement('option');
        options.value = `${e._id}`;
        options.text = e.CATEGORY_NAME
        div.appendChild(options);
    })
}
