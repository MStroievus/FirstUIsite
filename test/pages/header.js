class header {


    get ServisButton() {
        return $('//*[@id="menu-item-23"]/a')
    };
    get technologiesButton() {
        return $('//*[@id="menu-item-22"]/a')
    };
    get projectsButton() {
        return $('//*[@id="menu-item-24"]/a')
    };
    get aboutButton() {
        return $('//*[@id="menu-item-26"]/a')
    }
    get careerButton() {
        return $('//*[@id="menu-item-25"]/a')
    };
    get contanctUsButton() {
        return $('//*[@id="menu-item-29"]/a')
    };
    get collapsibleNavbar() {
        return $('/html/body/header//*[@href]')
    };

}
module.exports = new header();