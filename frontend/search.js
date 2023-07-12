var danhSachTruyen = JSON.parse(localStorage.getItem('list_manga'));
console.log(danhSachTruyen);

function timKiemTruyen(tuKhoa) {
    var ketQuaTimKiem = danhSachTruyen.filter(function(truyen) {
        return truyen.MANGA_NAME.toLowerCase().includes(tuKhoa.toLowerCase());
    });

    return ketQuaTimKiem;
}

function goiYKetQua(tuKhoa) {
    var ketQuaGoiY = danhSachTruyen.filter(function(truyen) {
        return truyen.MANGA_NAME.toLowerCase().startsWith(tuKhoa.toLowerCase());
    });

    return ketQuaGoiY;
}

var inputElement = document.getElementById('search-input');
var suggestionElement = document.getElementById('suggestion');

inputElement.addEventListener('input', function(event) {
    var tuKhoa = event.target.value;

    var ketQuaGoiY = goiYKetQua(tuKhoa);

    suggestionElement.innerHTML = '';
    ketQuaGoiY.forEach(function(truyen) {
        var suggestionItem = document.createElement('div');
        suggestionItem.innerText = truyen.MANGA_NAME;
        suggestionItem.classList.add('suggestion-item');

        suggestionItem.addEventListener('click', function() {
            inputElement.value = truyen.MANGA_NAME;
            suggestionElement.innerHTML = '';
            var ketQuaTimKiem = timKiemTruyen(truyen.MANGA_NAME);
            localStorage.setItem('id_manga',JSON.stringify(ketQuaTimKiem))
            window.location.href='chitiettruyen.html'
            console.log(ketQuaTimKiem);
        });

        suggestionElement.appendChild(suggestionItem);
    });
});
