function change_txt() {
    let ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open('GET', 'paragraph_replace.html', true);

    ajaxRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById('paragraphs').innerHTML =
            ajaxRequest.responseText;
        }
    }

    ajaxRequest.send();
}