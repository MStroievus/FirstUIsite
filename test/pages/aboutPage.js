class dropboxPage {

    get click1AP() {
        return $('//*[@id="owl-carousel"]/div[3]/button[1]/span')
    };
    get click2AP() {
        return $('//*[@id="owl-carousel"]/div[3]/button[2]/span')
    };
    get click3AP() {
        return $('//*[@id="owl-carousel"]/div[3]/button[2]/span')
    }


}

module.exports = new dropboxPage();