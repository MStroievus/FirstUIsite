class footer {

    get footerTechnologiestLinks() {
        return $('/html/body/footer/div/div[1]/div[4]//*[@href]')
    };
    get footerServicLinks() {
        return $('/html/body/footer/div/div[1]/div[3]//*[@href]')
    };
    get footerskypeLink() {
        return $('/html/body/footer/div/div[1]/div[2]/div[2]/ul/li[5]//*[@href]')
    };
    get footerphoneLink() {
        return $('/html/body/footer/div/div[1]/div[2]/div[2]/ul/li[2]//*[@href]')
    };
    get footerfirstGmail() {
        return $('/html/body/footer/div/div[1]/div[2]/div[2]/ul/li[3]//*[@href]')
    };
    get footersecondGmail() {
        return $('/html/body/footer/div/div[1]/div[2]/div[2]/ul/li[4]//*[@href]')
    };
    get footeraddreslink() {
        return $('/html/body/footer/div/div[1]/div[2]/div[2]/ul/li[1]//*[@href]')
    };
    get footerFacebookLink() {
        return $('/html/body/footer/div/div[1]/div[1]/div[2]/ul/li[1]//*[@href]')
    };
    get footerLinkendilLink() {
        return $('/html/body/footer/div/div[1]/div[1]/div[2]/ul/li[2]//*[@href]')
    };
    get footerUPLink() {
        return $('/html/body/footer/div/div[1]/div[1]/div[2]/ul/li[3]//*[@href]')
    };
    get footerFavicon() {
        return $('/html/body/footer/div/div[1]/div[1]/div[1]//*[@href]')
    };

}



module.exports = new footer();