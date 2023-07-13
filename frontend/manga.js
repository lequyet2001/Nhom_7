$(document).ready(function () {
  // Lấy dữ liệu truyện từ API và hiển thị lên bảng
  loadTruyenData();
  function loadTruyenData() {
    // Lấy dữ liệu truyện từ API
    fetch('http://localhost:3000/manga')
      .then(response => response.json())
      .then(data => {
        // Hiển thị dữ liệu trên trang
        displayTruyenData(data);
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }


  // Hiển thị bảng nhập thông tin truyện mới khi nhấp vào nút "Thêm truyện"
  $(document).on('click', '#add-truyen', function () {
    $('#doanxem').show();
  });

  // Ẩn bảng nhập thông tin truyện mới khi nhấp vào nút "Hủy"
  $(document).on('click', '#cancel-manga', function () {
    $('#doanxem').hide();
  });

  // Xử lý việc tạo truyện mới khi nhấp vào nút "Lưu"
  $(document).on('click', '#save-manga', function (e) {
    e.preventDefault();
    // Xử lý việc tạo truyện mới khi nhấp vào nút "Lưu"

    // Lấy thông tin truyện từ các trường nhập
    const mangaName = $('#manga-name').val();
    const author = $('#author').val();
    const image = $('#image').val();
    const genre = $('#genre').val();
    const nhomdich = $('#nhomdich').val();
    // Gửi yêu cầu POST đến API để tạo truyện mới
    fetch('http://localhost:3000/manga', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MANGA_NAME: mangaName,
        AUTHOR: author,
        IMAGE: image,
        MANGA_DESCRIPTION: genre,
        NHOM_DICH: nhomdich
      })
    })
      .then(response => response.json())
      .then(data => {
        // Thực hiện các thao tác sau khi tạo truyện thành công
        console.log('Truyện đã được tạo:', data);

        // Ẩn bảng nhập thông tin truyện
        $('#add-truyen-form').addClass('d-none');

        // Làm mới danh sách truyện
        fetch('http://localhost:3000/manga')
          .then(response => response.json())
          .then(data => {
            displayTruyenData(data);
          })
          .catch(error => {
            console.error('Lỗi:', error);
          });
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  });

  function displayTruyenData(data) {
    var tableBody = $('#truyen-table tbody');
    tableBody.empty();

    data.forEach(truyen => {
      var row = $('<tr>');
      row.append($('<td>').text(truyen.M_ID));
      row.append($('<td>').text(truyen.MANGA_NAME));
      row.append($('<td>').text(truyen.AUTHOR));
      var imageCell = $('<td>').addClass('image-cell');
      var imageContent = $('<div>').addClass('image-content').text(truyen.IMAGE);
      imageCell.append(imageContent);


      var actions = $('<td>');
      actions.append($('<button>').text('Sửa').addClass('btn btn-primary btn-sm edit-btn').attr('data-id', truyen.M_ID));
      actions.append($('<button>').text('Xóa').addClass('btn btn-danger btn-sm').click(function () {
        deleteTruyen(truyen.M_ID);
      }));

      row.append(imageCell);
      row.append(actions);
      tableBody.append(row);
    });
  }



  function deleteTruyen(id) {
    // Thực hiện logic để xóa truyện có ID tương ứng
    // Gửi yêu cầu DELETE đến API để xóa truyện

    // Sau khi thành công, cập nhật lại bảng dữ liệu
    fetch(`http://localhost:3000/manga/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        displayTruyenData(data);
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }



  // Sự kiện khi nhấp vào nút "Sửa"
  $('#truyen-table').on('click', '.edit-btn', function () {
    // Lấy ID của truyện từ thuộc tính data-id
    var truyenId = $(this).data('id');
    console.log(truyenId)
    // Hiển thị modal sửa truyện
    displayEditModal(truyenId);
  });

  // console.log({truyenId})
  // Xử lý việc lưu thay đổi khi nhấp vào nút "Lưu"
  $('#saveChanges').click(function () {
    var truyenId = $('#idtruyen').text();
    var mangaName = $('#editMangaName').val();
    var author = $('#editAuthor').val();
    var description = $('#editDescription').val();
    var image = $('#editImage').val();
    var nhomDich = $('#editNhomDich').val();
    
    var contentId=$('#tc input').val();



    // Gửi yêu cầu PUT đến API để cập nhật thông tin truyện
    fetch('http://localhost:3000/manga/' + truyenId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MANGA_NAME: mangaName,
        AUTHOR: author,
        MANGA_DESCRIPTION: description,
        IMAGE: image,
        NHOM_DICH: nhomDich
      })
    })
      .then(response => response.json())
      .then(data => {
        // Thực hiện các thao tác sau khi cập nhật thành công
        console.log('Truyện đã được cập nhật:', data);

        // Ẩn modal sửa truyện
        $('#editModal').modal('hide');

        // Làm mới danh sách truyện
        fetch('http://localhost:3000/manga')
          .then(response => response.json())
          .then(data => {
            displayTruyenData(data);
          })
          .catch(error => {
            console.error('Lỗi:', error);
          });
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  });

  function displayEditModal(truyenId) {
    // Lấy thông tin truyện từ API dựa trên truyenId
    fetch('http://localhost:3000/manga/' + truyenId)
      .then(response => response.json())
      .then(data => {
        var truyen = data[0];
        console.log({ truyen })
        // Đổ dữ liệu truyện vào form sửa truyện
        $('#idtruyen').text(truyen.M_ID)
        $('#editMangaName').val(truyen.MANGA_NAME);
        $('#editAuthor').val(truyen.AUTHOR);
        $('#editDescription').val(truyen.MANGA_DESCRIPTION);
        $('#editImage').val(truyen.IMAGE);
        $('#editNhomDich').val(truyen.NHOM_DICH);

        // Hiển thị modal sửa truyện
        $('#editModal').modal('show');
      })
      .catch(error => {
        console.error('Lỗi:', error);
      });
  }



  $('#tl').on('click', 'button', function () {
    // Hiển thị modal thêm thể loại
    $('#editModal').modal('hide');
    // $('#addGenreModal').modal('show');

  });
  const arr = $(document).ready(function () {
    var imageArray = [];

    $('#tandc button').click(function (e) {
      var image = $('#tandc input').val();
      var id = $('#aid').val();
      imageArray.push({image,id});
      console.log(imageArray);
      e.preventDefault();
    });
    return imageArray;
  });
  console.log({ arr })
});

