class HomePage {

    

    get firstNameField() {
        return $('//*[@id="firstname"]')
    };
    get lastNameField() {
        return $('//*[@id="lastName"]')
    };
    get emailField() {
        return $('#email')
    }
    get comapanyNameField() {
        return $('#companyName')
    };
    get messageField() {
        return $('//*[@id="message"]')
    };
    get firstNameField() {
        return $('//*[@id="firstname"]')
    };

    get getMassageButton() {
        return $('[value="SEND MESSAGE"]')
    };
    get labeltosuss() {
        return $('//*[@id="wpcf7-f139-o1"]/form/div[3]')
    };
    get dropboxButton() {
        return $('/html/body/footer/div/a/img')
    };
    get scrollDownButton() {
        return $('/html/body/main/div/div/div[1]/a/img')
    }
    get scrollUpButton() {
        return $('//*[@id="toTopBtn"]/img')
    }
    get servicesLinks() {
        return $('//*[@id="service"]//*[@href]')
    }
    get technologiesLinks() {
        return $('//html/body/main/section[3]//*[@href]')
    }
    get contactBtnButton() {
        return $('//html/body/header/div/div/div/div/div//*[@href]')
    }
    get contactOlegButton() {
        return $('//html/body/main/section[2]/div/div/div[2]/div//*[@href]')
    }
    get addressLink() {
        return $('//*[@id="contact-us"]/div/div[2]/div[1]/div/div[2]/div/ul/li[1]//*[@href]')
    }
    get phoneLink() {
        return $('//*[@id="contact-us"]/div/div[2]/div[1]/div/div[2]/div/ul/li[2]//*[@href]')
    }
    get firstGmail() {
        return $('//*[@id="contact-us"]/div/div[2]/div[1]/div/div[2]/div/ul/li[3]//*[@href]')
    }
    get secondGmail() {
        return $('//*[@id="contact-us"]/div/div[2]/div[1]/div/div[2]/div/ul/li[4]//*[@href]')
    }
    get skypeLink() {
        return $('//*[@id="contact-us"]/div/div[2]/div[1]/div/div[2]/div/ul/li[5]//*[@href]')
    }

    
}


module.exports = new HomePage();