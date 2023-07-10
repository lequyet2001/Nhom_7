fetch(`http://localhost:3000/content/${dataj[0].M_ID}`)
    .then(response => response.json())
    .then(dataFromServer => {
        As(dataFromServer);
    })
    .catch(error => {
        console.error('Lỗi:', error);
    });
function As(data) {
    var as = document.getElementById('conten');
    var div = document.createElement('div');
    div.classList.add('col-xs-12', 'col-sm-6', 'col-md-6');
    var ul = document.createElement('ul');
    ul.classList.add('list-chapter');

    data.forEach(chapter => {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.setAttribute('href', 'tplc1cvdyctt.html');
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