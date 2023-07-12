fetch(`http://localhost:3000/content/${dataj[0].M_ID}`)
    .then(response => response.json())
    .then(dataFromServer => {
        // As(dataFromServer);
        localStorage.setItem('list_content',JSON.stringify(dataFromServer));
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });

    fetch(`http://localhost:3000/content/chapter/${dataj[0].M_ID}`)
    .then(response => response.json())
    .then(dataFromServer => {
        As(dataFromServer);
        localStorage.setItem('list_chapter',JSON.stringify(dataFromServer));
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });


    function tinhSoChapterKhongLap(danhSachChapter) {
        var setChapter = new Set();
    
        danhSachChapter.forEach(function (chapter) {
            setChapter.add(chapter.CHAP_NUM);
        });
    
        return setChapter.size;
    }
function As(data) {
    var as = document.getElementById('conten');
    var div = document.createElement('div');
    div.classList.add('col-xs-12', 'col-sm-6', 'col-md-6');
    var ul = document.createElement('ul');
    ul.classList.add('list-chapter');
    console.log({data})
    var a=tinhSoChapterKhongLap(data);
    console.log({a})
    data.forEach(chapter => {
        
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', 'tplc1cvdyctt.html');
        a.onclick=(event)=>{
         
            localStorage.setItem('chapter',chapter.CHAP_NUM);
        }
        a.setAttribute('title', chapter.title);
        var span = document.createElement('span');
        span.classList.add('glyphicon', 'glyphicon-certificate');
        var spanText = document.createElement('span');
        spanText.classList.add('chapter-text');
        spanText.innerHTML = '<span>Chương </span>';
        a.appendChild(span);
        a.appendChild(spanText);
        a.innerHTML += chapter.CHAP_NUM + ': ' + chapter.title;
        li.appendChild(a);
        ul.appendChild(li);
    });

    div.appendChild(ul);
    as.appendChild(div);

}