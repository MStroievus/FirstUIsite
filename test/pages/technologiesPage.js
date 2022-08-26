class metods {

    get allBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[1]')
    };
    get apliicationBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[2]')
    };
    get databasesBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[3]')
    };
    get dlBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[4]')
    };
    get frameworkBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[5]')
    };
    get frontendBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[6]')
    };
    get hostingBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[7]')
    };
    get otherBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[8]')
    };
    get plBtnTP() {
        return $('//*[@id="myBtnContainer"]/button[9]')
    };
    get webServerBtnTp() {
        return $('//*[@id="myBtnContainer"]/button[10]')
    };
    get rpeBtnTp() {
        return $('/html/body/main/section[1]/div/div/div/div/div')
    };
}

module.exports = new metods();