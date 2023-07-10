   
        
            // Một số biến toàn cục
            var chuongHienTai = 1; // Chương hiện tại
    
            // Hàm chuyển chương truyện
          function chuyenChuong(action) {
                if (action === 'previous') {
                    // Kiểm tra nếu là chương đầu tiên
                    if (chuongHienTai === 1) {
                        alert("Đây là chương đầu tiên.");
                        return;
                    }
                    chuongHienTai--;
                } else if (action === 'next') {
                    // Kiểm tra nếu là chương cuối cùng
                    if (chuongHienTai === soLuongChuong) {
                        alert("Đây là chương cuối cùng.");
                        return;
                    }
                    chuongHienTai++;
                }
                capNhatThongTinTruyen();
            }
           
            // Hàm cập nhật thông tin truyện và hình ảnh
           function capNhatThongTinTruyen() {
                // Lấy thông tin truyện và hình ảnh dựa trên chương hiện tại
                var tenTruyen = "Tên truyện tranh";
                var duongDanAnh = "duong-dan-anh-truyen-tranh.jpg";
                var moTa = "Mô tả chương truyện tranh...";
    
                // Cập nhật tên truyện
                document.querySelector(".comic-title").innerHTML = tenTruyen;
    
                // Cập nhật hình ảnh truyện
                var comicImage = document.querySelector(".comic-image");
                comicImage.src = danhSachAnh;
                comicImage.alt = "Chương " + chuongHienTai;
    
                // Cập nhật mô tả truyện
                document.querySelector("p").innerHTML = moTa;
            }
            var danhSachAnh = [
            'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg',
            'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg',
            'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg',
            'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg',
            'https://hhhkungfu.tv/wp-content/uploads/Dau-Pha-Thuong-Khung-5.jpg',
            // Thêm các đường dẫn ảnh khác vào đây
        ];
            function hienThiDanhSachAnh() {
                var listContent = document.getElementById('list-content');
       // Xóa nội dung cũ
             
                listContent.innerHTML = '';
    
                // Tạo các phần tử hình ảnh và thêm vào danh sách
                for (var i = 0; i < danhSachAnh.length; i++) {
                    var imagePath = danhSachAnh[i];
    
                    var imgElement = document.createElement('img');
                    imgElement.src = imagePath;
                    imgElement.alt = 'Ảnh ' + (i + 1);
                    imgElement.classList.add('content-image');
    
                    listContent.appendChild(imgElement);
                }
            }
            // Khi trang được tải, cập nhật thông tin truyện và hình ảnh
            window.onload = function() {
                hienThiDanhSachAnh();
                capNhatThongTinTruyen();
            };


