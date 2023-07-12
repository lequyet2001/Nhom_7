// Một số biến toàn cục
var chuongHienTai = parseInt(localStorage.getItem('chapter')); // Chương hiện tại
var danhSachChuong = JSON.parse(localStorage.getItem('list_content'));
var soChapterKhongLap = tinhSoChapterKhongLap(danhSachChuong);

console.log("Chương hiện tại:", chuongHienTai);
console.log("Số chapter không lặp:", soChapterKhongLap);

// Hàm tính số chapter không lặp
function tinhSoChapterKhongLap(danhSachChapter) {
    var setChapter = new Set();

    danhSachChapter.forEach(function (chapter) {
        setChapter.add(chapter.CHAP_NUM);
    });

    return setChapter.size;
}

// Hàm chuyển chương truyện
function chuyenChuong(action) {
    if (action === 'previous') {
        // Kiểm tra nếu là chương đầu tiên
        if (chuongHienTai === 1) {
            alert("Đây là chương đầu tiên.");
            return;
        }
        chuongHienTai--;
        localStorage.setItem('chapter', chuongHienTai);
    } else if (action === 'next') {
        // Kiểm tra nếu là chương cuối cùng
        if (chuongHienTai === soChapterKhongLap) {
            alert("Đây là chương cuối cùng.");
            return;
        }
        chuongHienTai++;
        localStorage.setItem('chapter', chuongHienTai);
    }
    capNhatThongTinTruyen();
    hienThiDanhSachAnh(chuongHienTai);
}

// Hàm cập nhật thông tin truyện và hình ảnh
function capNhatThongTinTruyen() {
    var danhSachTruyen = JSON.parse(localStorage.getItem('id_manga'));
    console.log(danhSachTruyen)
    var manga = danhSachTruyen;
    var tenTruyen = manga.MANGA_NAME;
    var duongDanAnh = manga.IMAGE;
    // var moTa = "Mô tả chương truyện tranh...";

    // Cập nhật tên truyện
    document.querySelector(".comic-title").innerHTML = tenTruyen;
    document.getElementById('current-chapter').innerText = 'Chương ' + chuongHienTai + ' / ' + soChapterKhongLap;
}


// Hàm hiển thị danh sách ảnh
function hienThiDanhSachAnh(id) {
    console.log("Chương hiện tại:", chuongHienTai);
    console.log("Số chapter không lặp:", soChapterKhongLap);

    var listContent = document.getElementById('list-content');
    // Xóa nội dung cũ
    while (listContent.firstChild) {
        listContent.removeChild(listContent.firstChild);
    }

    // Tạo các phần tử hình ảnh và thêm vào danh sách
    for (var i = 0; i < danhSachChuong.length; i++) {
        if (id === danhSachChuong[i].CHAP_NUM) {
            var imagePath = danhSachChuong[i].IMAGE;
            // console.log(imagePath);
            var imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = 'Ảnh ' + (i + 1);
            imgElement.classList.add('content-image');

            listContent.appendChild(imgElement);
        }
    }
}

// Khi trang được tải, cập nhật thông tin truyện và hình ảnh
window.onload = function () {
    hienThiDanhSachAnh(chuongHienTai);
    capNhatThongTinTruyen();
};




