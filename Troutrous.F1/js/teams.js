$(document).ready(function () {
    var teams = new teamsjs();
})

class teamsjs {
    constructor() {
        this.initEvent();

    }
    initEvent() {
        $('.teams-advertise img').on('click', this.btnLewisOnClick);
    }
    btnLewisOnClick() {
        window.open('https://www.heineken.com/vn/agegateway?returnurl=%2fvn','_blank');
    }

}