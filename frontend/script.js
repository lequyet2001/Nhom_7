fetch('http://localhost:3000/manga')
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        localStorage.setItem('list_manga', JSON.stringify(data))
        displayData(data);
        displayData2(data)
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });




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
                    // console.log(data)

                    localStorage.setItem('id_manga', JSON.stringify(data))
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
        // console.log(data)
        // displayData2(data)
        displayDataCate(data)

    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

function displayDataCate(data) {
    var div = document.getElementById('new-select');

    data.forEach(e => {
        var options = document.createElement('option');
        options.value = `${e.C_ID}`;
        options.text = e.CATEGORY_NAME,
            div.appendChild(options);
        // div2.appendChild(a);

    })
    div.onchange = function (event) {
        var selectedCategoryId = event.target.value;
        console.log(event.target)
        if(selectedCategoryId!='all'){

            
            fetch(`http://localhost:3000/manga/getbycate?id=${selectedCategoryId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer xxxxxxxx'
                }
            })
            .then(response => response.json())
            .then(data2 => {
                // console.log(`data from: ${data2}`);
                displayData2(data2);
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
        }
        else{
            fetch(`http://localhost:3000/manga`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer xxxxxxxx'
                }
            })
            .then(response => response.json())
            .then(data2 => {
                // console.log(`data from: ${data2}`);
                displayData2(data2);
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });
        }
        };
    }
    
    
    
    function displayData2(data) {
        var div = document.getElementById('allmanga');
    div.innerHTML = ''; // Xóa nội dung hiện tại của phần tử div

    data.forEach(pp => {
        // console.log({pp})
        var colTitleDiv = document.createElement('div');
        colTitleDiv.classList.add('col-xs-9', 'col-sm-6', 'col-md-5', 'col-title');

        var chevronSpan = document.createElement('span');
        chevronSpan.classList.add('glyphicon', 'glyphicon-chevron-right');

        var titleH3 = document.createElement('h3');
        titleH3.setAttribute('itemprop', 'name');

        var titleLink = document.createElement('a');
        titleLink.href = 'chitiettruyen.html';
        titleLink.title = pp.MANGA_NAME;
        titleLink.setAttribute('itemprop', 'url');
        titleLink.textContent = pp.MANGA_NAME;
        titleLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Thực hiện các thao tác sau khi click vào titleLink
            // Ví dụ: Lấy thông tin truyện và chuyển đến trang chi tiết truyện
             // Lấy ID truyện từ dữ liệu
            fetch(`http://localhost:3000/manga/${pp.M_ID}`)
                .then(response => response.json())
                .then(data => {
                    // Lưu thông tin truyện vào localStorage hoặc thực hiện các thao tác khác
                    localStorage.setItem('id_manga', JSON.stringify(data));
                    // Chuyển đến trang chi tiết truyện
                    window.location.href = 'chitiettruyen.html';
                })
                .catch(error => {
                    console.error('Lỗi:', error);
                });
        });
        
        titleH3.appendChild(titleLink);
        colTitleDiv.appendChild(chevronSpan);
        colTitleDiv.appendChild(titleH3);

        var colCatDiv = document.createElement('div');
        colCatDiv.classList.add('hidden-xs', 'col-sm-3', 'col-md-3', 'col-cat', 'text-888');
        
        // Gọi API lấy danh mục tương ứng với truyện
        fetch(`http://localhost:3000/cate/${pp.M_ID}`)
            .then(response => response.json())
            .then(data => {
                data.forEach(category => {
                    var genreLink = document.createElement('a');
                    genreLink.setAttribute('itemprop', 'genre');
                    genreLink.title = category.CATEGORY_NAME;
                    genreLink.textContent = category.CATEGORY_NAME;

                    colCatDiv.appendChild(genreLink);
                    colCatDiv.appendChild(document.createTextNode(', '));
                });
            })
            .catch(error => {
                console.error('Lỗi:', error);
            });

        var colChapDiv = document.createElement('div');
        colChapDiv.classList.add('col-xs-3', 'col-sm-3', 'col-md-2', 'col-chap', 'text-info');

        var chapLink = document.createElement('a');
        chapLink.href = 'tplc1cvdyctt.html';
        // chapLink.title = 'Thái Tử Phi Tham Ăn - Chương 137';

        var chapterTextSpan = document.createElement('span');
        chapterTextSpan.classList.add('chapter-text');
        chapterTextSpan.innerHTML = '<span>Chương </span>';

        chapLink.appendChild(chapterTextSpan);
        fetch(`http://localhost:3000/content/chapter/${pp.M_ID}`)
        .then(response => response.json())
        .then(dataFromServer => {
            // console.log({dataFromServer})
            fetch(`http://localhost:3000/content/${pp.M_ID}`)
                .then(res=>res.json())
                .then(quy=>{
                    console.log({quy})
                    chapLink.appendChild(document.createTextNode(`${dataFromServer[dataFromServer.length-1]?.CHAP_NUM || 0} `));
                    // localStorage.setItem('list_chapter',JSON.stringify(dataFromServer));
                    chapLink.addEventListener('click',(event)=>{
                        event.preventDefault();
                        localStorage.setItem('chapter',dataFromServer[dataFromServer.length-1]?.CHAP_NUM );
                        localStorage.setItem('id_manga',JSON.stringify(pp));
                        localStorage.setItem('list_content',JSON.stringify(quy))
                        window.location.href='tplc1cvdyctt.html'
                })
                .catch(e=>{console.log('Lỗi:', e)})
            })
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
        colChapDiv.appendChild(chapLink);

        var colTimeDiv = document.createElement('div');
        colTimeDiv.classList.add('hidden-xs', 'hidden-sm', 'col-md-2', 'col-time', 'text-888');
        colTimeDiv.textContent = '7 phút trước';

        div.appendChild(colTitleDiv);
        div.appendChild(colCatDiv);
        div.appendChild(colChapDiv);
        div.appendChild(colTimeDiv);
    });
}

// window.onload(displayDataCate(1))