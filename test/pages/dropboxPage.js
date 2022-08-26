class dropboxPage {

    get textField() {
        return $('//*[@id="chatForm"]/form/textarea')
    };

    get sendButton() {
        return $('//*[@id="chatForm"]/form/button[1]')
    };
    get dropboxForm() {
        return $('//*[@id="chatForm"]/form')
    }


}

module.exports = new dropboxPage();