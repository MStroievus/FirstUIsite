class productPage {

    get product1PP() {
        return $('/html/body/main/section[2]/div/div/div[3]/div/div[2]/div/div[1]/img')
    };
    get product2PP() {
        return $('/html/body/main/section[2]/div/div/div[2]')
    };
    get product3PP() {
        return $('/html/body/main/section[2]/div/div/div[3]')
    };
    get product4PP() {
        return $('/html/body/main/section[2]/div/div/div[4]')
    };
    get projectLinksPP() {
        return $('//*[@id="service"]//*[@href]')
    };
    get contactOlegBtnPP() {
        return $('/html/body/main/section[3]/div/div/div[2]/div//*[@href]')
    };
    get ordersBtmPP() {
        return $('/html/body/main/section[1]/div/div/div/div/div/a')
    }







}

module.exports = new productPage();