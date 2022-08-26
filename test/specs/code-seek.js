const random = require("../../../project/test/page/random");
const aboutPage = require("../pages/aboutPage");
const careerPage = require("../pages/careerPage");
const dropboxPage = require("../pages/dropboxPage");
const footer = require("../pages/footer");
const header = require("../pages/header");
const homepage = require("../pages/homepage");
const metods = require("../pages/metods");
const projectPage = require("../pages/projectPage");
const productPage = require("../pages/projectPage");
const randomvalue = require("../pages/randomvalue");
const servisPage = require("../pages/servisPage");
const technologiesPage = require("../pages/technologiesPage");


describe('Checking form', () => {
    xit('Checking form with valid data', async () => {
        
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        homepage.emailField.addValue(randomvalue.randomEmail());
        await browser.pause(2000);

        homepage.firstNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);
        
        homepage.lastNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);

        homepage.comapanyNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);

        homepage.messageField.addValue(randomvalue.randomPassword() + randomvalue.randomName());
        await browser.pause(2000);

        metods.metodClick(homepage.getMassageButton);
        await browser.pause(2000);


        await expect(homepage.labeltosuss).toHaveTextContaining('Thank you for your message. It has been sent.');
        await browser.pause(2000);
  
    });

    xit('Checking form without any data', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(homepage.getMassageButton);
        await browser.pause(2000);

        await expect(homepage.labeltosuss).toHaveTextContaining('One or more fields have an error. Please check and try again.');
        await browser.pause(2000);
    });

    xit('Checking form with invalid', async () => {
    
        await browser.url('https://www.code-seek.com')
        await browser.pause(2000);

        homepage.emailField.addValue(randomvalue.randomName());
        await browser.pause(2000);

        homepage.firstNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);
        
        homepage.lastNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);

        homepage.comapanyNameField.addValue(randomvalue.randomName());
        await browser.pause(2000);

        homepage.messageField.addValue(randomvalue.randomPassword() + randomvalue.randomName());
        await browser.pause(2000);

        metods.metodClick(homepage.getMassageButton);
        await browser.pause(2000);


        await expect(homepage.labeltosuss).toHaveTextContaining('One or more fields have an error. Please check and try again.');
        await browser.pause(2000);
  
    });
});
    
describe('Checking dropbox', () => {
    xit('Checking fields  with valid data', async () => {
         
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(homepage.dropboxButton);
        await browser.pause(2000);

        dropboxPage.textField.addValue(random.randomPassword());
        await browser.pause(2000);

        metods.metodClick(dropboxPage.sendButton);
        await browser.pause(2000);

        await expect(browser).toHaveUrlContaining('https://www.code-seek.com/?msg');
        await browser.pause(2000);

    });
    
    xit('Checking fields  without any  data', async () => {
         
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(homepage.dropboxButton);
        await browser.pause(2000);

        metods.metodClick(dropboxPage.sendButton);
        await browser.pause(2000);

        await expect(dropboxPage.dropboxForm).toHaveTextContaining('Заповніть це поле.');
        await browser.pause(2000);
    });

});

describe('Checking active buttons on the home page', () => {
    xit('Checking the "ScrollDownButton" button', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);


        await browser.saveScreenshot("beforeDown.saveScreenshot.png");


        metods.metodClick(homepage.scrollDownButton);
        await browser.pause(2000);

        await browser.saveScreenshot("afterDown.saveScreenshot.png");

    });
    
    xit('Checking the "ScrollupButto" button', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodscrollTo(homepage.scrollUpButton);
        await browser.pause(2000);
        await browser.saveScreenshot("beforeUP.saveScreenshot.png");


        metods.metodClick(homepage.scrollUpButton);
        await browser.pause(2000);

        await browser.saveScreenshot("afterUP.saveScreenshot.png");

    });      
});

describe('It should cheking links on the home page', () => {
    xit('service links', async () => {


        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        await expect(homepage.servicesLinks).toHaveHrefContaining('www.code-seek.com')
  
    });  
    xit('Technologies links', async () => {
    
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        await expect(homepage.technologiesLinks).toHaveHrefContaining('www.code-seek.com')

    });  

    xit('contactBtnButton', async () => {
    
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        await expect(homepage.contactBtnButton).toHaveHrefContaining('www.code-seek.com')

    });

    xit('contactOlegButton', async () => {
    
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        await expect(homepage.contactOlegButton).toHaveHrefContaining('www.code-seek.com')

    }); 
    
    xit('contactUsLinks', async () => {
    
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);
        

        await expect(homepage.skypeLink).toHaveHrefContaining('skype:');
        await expect(homepage.addressLink).toHaveHrefContaining('map');
        await expect(homepage.phoneLink).toHaveHrefContaining('tel:+');
        await expect(homepage.firstGmail).toHaveHrefContaining('mailto');
        await expect(homepage.secondGmail).toHaveHrefContaining('mailto');
        
    });
});

describe('Checking the "Service" page', () => {
    xit('Checking the page navigatio', async () => {
        
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.ServisButton);
        await browser.pause(2000);


        await servisPage.allBtn.click({ x: -1 })

        await browser.waitUntil(() => servisPage.allBtn.isFocused());
        await browser.pause(2000);
        
        await servisPage.chatBotBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.chatBotBtnSP.isFocused());
        await browser.pause(2000);

        await servisPage.crmsBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.crmsBtnSP.isFocused());
        await browser.pause(2000);

        await servisPage.ecomerceBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.ecomerceBtnSP.isFocused());
        await browser.pause(2000);

        await servisPage.edtechBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.edtechBtnSP.isFocused());
        await browser.pause(2000);
         
        await servisPage.fintechBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.fintechBtnSP.isFocused());
        await browser.pause(2000);
         
        await servisPage.healthCareBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.healthCareBtnSP.isFocused());
        await browser.pause(2000);
         
        await servisPage.msBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.msBtnSP.isFocused());
        await browser.pause(2000);

        await servisPage.saasBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.saasBtnSP.isFocused());
        await browser.pause(2000);

        await servisPage.webDevelopmentBtnSP.click({ x: -1 })
        await browser.waitUntil(() => servisPage.webDevelopmentBtnSP.isFocused());
        await browser.pause(2000);
         
    });

    xit('Checking active button on the "Service page"', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.ServisButton);
        await browser.pause(4000);

        metods.metodClick(servisPage.rpeBtnSP);
        await browser.pause(2000);

        await expect(browser).toHaveUrl('https://www.code-seek.com/our-service/Request-project-estimate');
        await browser.pause(2000);
         });
});

describe('Checking the "Technologies" page', () => {     
    xit('Checking the page navigatio', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.technologiesButton);
        await browser.pause(2000);

        await technologiesPage.allBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.allBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.apliicationBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.apliicationBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.databasesBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.databasesBtnTP.isFocused());
        await browser.pause(2000);

        await technologiesPage.dlBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.dlBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.frameworkBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.frameworkBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.frontendBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.frontendBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.hostingBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.hostingBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.otherBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.otherBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.plBtnTP.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.plBtnTP.isFocused());
        await browser.pause(2000);
        
        await technologiesPage.webServerBtnTp.click({ x: -1 })
        await browser.waitUntil(() => technologiesPage.webServerBtnTp.isFocused());
        await browser.pause(2000);

    });
    
    xit('Checking active button on the "Technologies page"', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.technologiesButton);
        await browser.pause(4000);

        metods.metodClick(technologiesPage.rpeBtnTp);
        await browser.pause(2000);

        await expect(browser).toHaveUrl('https://www.code-seek.com/our-technology/Request-project-estimate');
        await browser.pause(2000);
    });
});
    
describe('Checking The "Product" page ', () => {
    xit('Checking the ability to select a product', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.projectsButton);
        await browser.pause(2000);

        await browser.waitUntil(() => projectPage.product1PP.isSelected());
        await browser.pause(2000);

        
        await browser.waitUntil(() => projectPage.product2PP.isSelected());
        await browser.pause(2000);

        
        await browser.waitUntil(() => projectPage.product3PP.isSelected());
        await browser.pause(2000);

        
        await browser.waitUntil(() => projectPage.product4PP.isSelected());
        await browser.pause(2000);
    });

    xit('Checking links on the "Project" page', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.projectsButton);
        await browser.pause(2000);


        await expect(productPage.projectLinksPP).toHaveHrefContaining('www.code-seek.com/projects')
        await expect(productPage.contactOlegBtnPP).toHaveHrefContaining('www.code-seek.com/projects')
    });

    xit('Checking active button on the "Project" page', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.projectsButton);
        await browser.pause(2000);

        metods.metodClick(projectPage.ordersBtmPP);
        await expect(browser).toHaveUrl('https://www.code-seek.com/projects/Request-project-estimate' )


    });    
});

describe('Checking The "About" page ', () => {
    xit('Checking active buttons', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.aboutButton);
        await browser.pause(2000);

        metods.metodClick(aboutPage.click1AP)
        await browser.pause(2000);
        await browser.saveScreenshot("click1.saveScreenshot.png");

        metods.metodClick(aboutPage.click2AP)
        await browser.pause(2000);
        await browser.saveScreenshot("click2.saveScreenshot.png");

        metods.metodClick(aboutPage.click3AP)
        await browser.pause(2000);
        await browser.saveScreenshot("click3.saveScreenshot.png");

    });
});

describe('Cheking The "Career" page', () => {
    xit('Checking the ability to select an "type"', async () => {
        
        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.careerButton);
        await browser.pause(2000);

        metods.metodClick(careerPage.typeFieldCP);
        await browser.pause(2000);
        await (await $('//*[@id="type"]')).click()
        await browser.pause(2000);
        
        metods.metodClick(careerPage.skillsFieldCP);
        await browser.pause(2000);

        metods.metodClick(careerPage.skilloptional3CP);
        await browser.pause(2000);

    });

    xit('Checking active buttons', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.careerButton);
        await browser.pause(2000);

        metods.metodClick(careerPage.sendyourCvBtn);
        await browser.pause(2000);
        await expect(careerPage.sendyourCvBtn).toHaveHref('https://www.code-seek.com/carrer/contact-us#career');

        metods.metodClick(careerPage.avLinkeldinBtn);
        await browser.pause(2000);
        await expect(careerPage.avLinkeldinBtn).toHaveHrefContaining('in/user/linkedin-oauth?referrer');

        metods.metodClick(careerPage.findNJobBtn);
        await browser.pause(2000);
        await expect(careerPage.findNJobBtn).toHaveUrlContaining('www.code-seek.com/carrer/actual-job')

    });
    xit('Checking links', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);

        metods.metodClick(header.careerButton);
        await browser.pause(2000);
        
        await expect(careerPage.referCandidateLink).toHaveHrefContaining('https://www.code-seek.com/carrer/contact-us#career')
    });






});

describe('Cheking The header', () => {
    xit('Chekink links on the Header', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);
        await expect(header.collapsibleNavbar).toHaveHrefContaining('www.code-seek.com')    
    });
});

describe('Cheking The footer', () => {
   xit('Chekink links on the footer', async () => {

        await browser.url('https://www.code-seek.com');
        await browser.pause(2000);
        await expect(footer.footerTechnologiestLinks).toHaveHrefContaining('www.code-seek.com/')  
        await expect(footer.footerServicLinks).toHaveHrefContaining('www.code-seek.com/service-category/')  

        await expect(footer.footerskypeLink).toHaveHrefContaining('skype:');
        await expect(footer.footeraddreslink).toHaveHrefContaining('map');
        await expect(footer.footerphoneLink).toHaveHrefContaining('tel:+');
        await expect(footer.footerfirstGmail).toHaveHrefContaining('mailto');
        await expect(footer.footersecondGmail).toHaveHrefContaining('mailto');

        await expect(footer.footerFacebookLink).toHaveHrefContaining('Facebook-oauth?referrer_page');
        await expect(footer.footerLinkendilLink).toHaveHrefContaining('linkedin-oauth?referrer_page');
        await expect(footer.footerUPLink).toHaveHrefContaining('UP-oauth?referrer_page');
        await expect(footer.footerFavicon).toHaveHrefContaining('www.code-seek.com');
    });
});















