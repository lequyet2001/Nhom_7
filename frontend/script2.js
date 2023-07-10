var d = localStorage.getItem("id");
var dataj = JSON.parse(d);
var dataElement = document.getElementById("manga");


// console.log({data})
fetch(`http://localhost:3000/manga/${dataj[0].M_ID}`)
  .then(response => response.json())
  .then(dataFromServer => {
    console.log({dataFromServer});
    displayDataCate(dataFromServer)// In ra dữ liệu từ server
  })
  .catch(error => {
    console.error('Lỗi:', error);
  });



function displayDataCate(data) {
  fetch(`http://localhost:3000/cate/${dataj[0].M_ID}`)
    .then(response => response.json())
    .then(p => {
      // console.log(p)
      var as = document.getElementById('as');

      var div1 = document.createElement('div');
      div1.classList.add('title-list', 'book-intro');

      var h2 = document.createElement('h2');
      h2.textContent = 'Thông tin truyện';

      div1.appendChild(h2);
      as.appendChild(div1);

      var h3 = document.createElement('h3');
      h3.classList.add('title');
      h3.setAttribute('itemprop', 'name');
      h3.textContent = `${dataj[0].MANGA_NAME}`;
      as.appendChild(h3);

      var div2 = document.createElement('div');
      div2.classList.add('col-xs-12', 'col-sm-4', 'col-md-4', 'info-holder');
      as.appendChild(div2);

      var div3 = document.createElement('div');
      div3.classList.add('books');

      var div4 = document.createElement('div');
      div4.classList.add('book');

      var img = document.createElement('img');
      img.setAttribute('src', `${dataj[0].IMAGE}`);
      img.setAttribute('alt', 'Linh Vũ Thiên Hạ');
      img.setAttribute('itemprop', 'image');
      img.style.width = '100%';
      img.style.height = 'auto';

      div4.appendChild(img);
      div3.appendChild(div4);
      div2.appendChild(div3);

      var div5 = document.createElement('div');
      div5.classList.add('info');

      var div6 = document.createElement('div');

      var h3_1 = document.createElement('h3');
      h3_1.textContent = 'Tác giả:';
      div6.appendChild(h3_1);

      var a1 = document.createElement('a');
      a1.setAttribute('itemprop', 'author');
      a1.setAttribute('href', 'https://truyentranhonline.vn/tac-gia/vu-phong/');
      a1.setAttribute('title', 'Vũ Phong');
      a1.textContent = `${dataj[0].AUTHOR}`;
      div6.appendChild(a1);

      div5.appendChild(div6);

      var div7 = document.createElement('div');

      var h3_2 = document.createElement('h3');
      h3_2.textContent = 'Thể loại:';
      div7.appendChild(h3_2);
      console.log({p})
      p.forEach(e => {
  
        var a2 = document.createElement('a');
        a2.setAttribute('itemprop', 'genre');
        a2.setAttribute('href', 'https://truyentranhonline.vn/the-loai/tien-hiep/');
        a2.setAttribute('title', 'Tiên Hiệp');
        var string = `${e.CATEGORY_NAME}, `;
        a2.textContent = string;
        div7.appendChild(a2);
      });


      div5.appendChild(div7);

      var div8 = document.createElement('div');

      var h3_3 = document.createElement('h3');
      h3_3.textContent = 'Nguồn:';
      div8.appendChild(h3_3);

      var span = document.createElement('span');
      span.classList.add('source');
      span.textContent = 'Vip Văn Đàn';
      div8.appendChild(span);

      div5.appendChild(div8);

      var div9 = document.createElement('div');

      var h3_4 = document.createElement('h3');
      h3_4.textContent = 'Trạng thái:';
      div9.appendChild(h3_4);

      var span2 = document.createElement('span');
      span2.classList.add('text-success');
      span2.textContent = 'Full';
      div9.appendChild(span2);

      div5.appendChild(div9);

      div2.appendChild(div5);

      var div10 = document.createElement('div');
      div10.classList.add('col-xs-12', 'col-sm-8', 'col-md-8', 'desc');

      var div11 = document.createElement('div');
      div11.classList.add('rate');

      var div12 = document.createElement('div');
      div12.classList.add('rate-holder');
      div12.setAttribute('data-score', '7.2');
      div12.setAttribute('style', 'cursor: pointer;');

      var img1 = document.createElement('img');
      img1.setAttribute('alt', '1');
      img1.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img1.setAttribute('title', 'Không còn gì để nói...');
      div12.appendChild(img1);

      // Tiếp tục tạo và cấu trúc các phần tử khác tương tự
      // ...

      // Gắn kết các phần tử đã tạo vào DOM
      as.appendChild(div1);
      as.appendChild(h3);
      as.appendChild(div2);
      // ...
      var div13 = document.createElement('div');
      div13.classList.add('col-xs-12', 'col-sm-8', 'col-md-8', 'desc');

      var div14 = document.createElement('div');
      div14.classList.add('rate');

      var div15 = document.createElement('div');
      div15.classList.add('rate-holder');
      div15.setAttribute('data-score', '7.2');
      div15.setAttribute('style', 'cursor: pointer;');

      var img2 = document.createElement('img');
      img2.setAttribute('alt', '1');
      img2.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img2.setAttribute('title', 'Không còn gì để nói...');
      div15.appendChild(img2);

      var img3 = document.createElement('img');
      img3.setAttribute('alt', '2');
      img3.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img3.setAttribute('title', 'WTF');
      div15.appendChild(img3);

      // Tiếp tục tạo và cấu trúc các phần tử khác tương tự
      // ...

      div14.appendChild(div15);

      var em1 = document.createElement('em');
      em1.classList.add('rate-text');
      div14.appendChild(em1);

      var div16 = document.createElement('div');
      div16.classList.add('small');
      div16.setAttribute('itemprop', 'aggregateRating');
      div16.setAttribute('itemscope', '');
      div16.setAttribute('itemtype', 'https://schema.org/AggregateRating');

      var em2 = document.createElement('em');
      em2.innerHTML = 'Đánh giá: <strong><span itemprop="ratingValue">7.2</span></strong>/<span class="text-muted" itemprop="bestRating">10</span> từ <strong><span itemprop="ratingCount">12545</span> lượt</strong>';
      div16.appendChild(em2);

      div14.appendChild(div16);

      div13.appendChild(div14);

      var div17 = document.createElement('div');
      div17.classList.add('desc-text', 'desc-text-full');
      div17.setAttribute('itemprop', 'description');
      div17.innerHTML = `<b><i>Nhóm dịch:</i></b><i> Sói Già<br><b>Đả tự:</b> Bựa Thập Ngũ BLH<br><br></i><b>Lục Thiếu Du</b>, linh hồn bị xuyên qua đến thế giới khác, nhập vào thân thể của một thiếu gia không có địa vị phải trải qua cuộc sống không khác gì nô bộc.<br>Thế giới này lấy Vũ vi cường, lấy Linh vi tôn, nghe đồn khi võ đạo đỉnh phong, linh đạo đạt đến cực hạn có thể phá toái hư không. <br>Lục Thiếu Du mang theo ký ức từ kiếp trước tái sinh, không cam lòng làm một thiếu gia chẳng khác gì củi mục.<br><br>Trong thế giới xa lạ, <br>Say - nằm trên gối mỹ nhân, <br>Tỉnh - nắm quyền thiên hạ.<br>Đây mới là cuộc sống đáng mơ ước. <br>Linh - Vũ song tu<br>Bá chủ kiêu hùng<brvar div13 = document.createElement('div')'`;
      div13.classList.add('col-xs-12', 'col-sm-8', 'col-md-8', 'desc');

      var div14 = document.createElement('div');
      div14.classList.add('rate');

      var div15 = document.createElement('div');
      div15.classList.add('rate-holder');
      div15.setAttribute('data-score', '7.2');
      div15.setAttribute('style', 'cursor: pointer;');

      var img1 = document.createElement('img');
      img1.setAttribute('alt', '1');
      img1.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img1.setAttribute('title', 'Không còn gì để nói...');
      div15.appendChild(img1);

      var img2 = document.createElement('img');
      img2.setAttribute('alt', '2');
      img2.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img2.setAttribute('title', 'WTF');
      div15.appendChild(img2);

      var img3 = document.createElement('img');
      img3.setAttribute('alt', '3');
      img3.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img3.setAttribute('title', 'Cái gì thế này ?!');
      div15.appendChild(img3);

      var img4 = document.createElement('img');
      img4.setAttribute('alt', '4');
      img4.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img4.setAttribute('title', 'Haizz');
      div15.appendChild(img4);

      var img5 = document.createElement('img');
      img5.setAttribute('alt', '5');
      img5.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img5.setAttribute('title', 'Tạm');
      div15.appendChild(img5);

      var img6 = document.createElement('img');
      img6.setAttribute('alt', '6');
      img6.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img6.setAttribute('title', 'Cũng được');
      div15.appendChild(img6);

      var img7 = document.createElement('img');
      img7.setAttribute('alt', '7');
      img7.setAttribute('src', '//static.8cache.com/lib/raty/images/star-on.png');
      img7.setAttribute('title', 'Khá đấy');
      div15.appendChild(img7);

      var img8 = document.createElement('img');
      img8.setAttribute('alt', '8');
      img8.setAttribute('src', '//static.8cache.com/lib/raty/images/star-off.png');
      img8.setAttribute('title', 'Được');
      div15.appendChild(img8);

      var img9 = document.createElement('img');
      img9.setAttribute('alt', '9');
      img9.setAttribute('src', '//static.8cache.com/lib/raty/images/star-off.png');
      img9.setAttribute('title', 'Hay');
      div15.appendChild(img9);

      var img10 = document.createElement('img');
      img10.setAttribute('alt', '10');
      img10.setAttribute('src', '//static.8cache.com/lib/raty/images/star-off.png');
      img10.setAttribute('title', 'Tuyệt đỉnh!');
      div15.appendChild(img10);

      var input = document.createElement('input');
      input.setAttribute('name', 'score');
      input.setAttribute('type', 'hidden');
      input.setAttribute('value', '7.2');
      div15.appendChild(input);

      div14.appendChild(div15);

      var em = document.createElement('em');
      em.classList.add('rate-text');
      div14.appendChild(em);

      var div16 = document.createElement('div');
      div16.classList.add('small');
      div16.setAttribute('itemprop', 'aggregateRating');
      div16.setAttribute('itemscope', '');
      div16.setAttribute('itemtype', 'https://schema.org/AggregateRating');

      var em1 = document.createElement('em');
      em1.innerHTML = 'Đánh giá: <strong><span itemprop="ratingValue">7.2</span></strong>/<span class="text-muted" itemprop="bestRating">10</span> từ <strong><span itemprop="ratingCount">12545</span> lượt</strong>';
      div16.appendChild(em1);

      div14.appendChild(div16);

      var div17 = document.createElement('div');
      div17.classList.add('desc-text', 'desc-text-full');
      div17.setAttribute('itemprop', 'description');
      div17.innerHTML = `${dataj[0].MANGA_DESCRIPTION}`;
      div13.appendChild(div14);
      div13.appendChild(div17);

      var div18 = document.createElement('div');
      div18.classList.add('showmore');
      var a = document.createElement('a');
      a.classList.add('btn', 'btn-default', 'btn-xs');
      a.setAttribute('href', 'javascript:void(0)');
      a.setAttribute('title', 'Xem thêm');
      a.innerHTML = 'Xem thêm »';
      div18.appendChild(a);

      div13.appendChild(div18);

      var as = document.getElementById('as');
      as.appendChild(div13);

    })
    .catch(error => {
      console.error('Lỗi:', error);
    });


}






