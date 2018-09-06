function initialize () {
    var date = new Date();
    if (date.getHours() < 7 || date.getHours() > 18) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('dark')
    }
}

initialize();
