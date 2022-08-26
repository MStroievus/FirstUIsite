class ServisPage {
    get allBtn() {
        return $('//*[@id="myBtnContainer"]/button[1]')
    };
    get chatBotBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[2]')
    };
    get crmsBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[3]')
    };
    get ecomerceBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[4]')
    };
    get edtechBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[5]')
    };
    get fintechBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[6]')
    };
    get healthCareBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[7]')
    };
    get msBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[8]')
    };
    get saasBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[9]')
    };
    get webDevelopmentBtnSP() {
        return $('//*[@id="myBtnContainer"]/button[10]')
    };
    get rpeBtnSP() {
        return $('=Request project estimate')
    };

}

module.exports = new ServisPage ();