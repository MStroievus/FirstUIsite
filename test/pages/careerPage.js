class careerPage {

    get typeFieldCP() {
        return $('#type')
    };
    
    get skillsFieldCP() {
        return $('/html/body/main/section[1]/div/div[2]/div/div/form/div/div[2]/div/select')
    };
   
    get skilloptional3CP() {
        return $('/html/body/main/section[1]/div/div[2]/div/div/form/div/div[2]/div/select/option[3]')
    };
    get findNJobBtn() {
        return $('/html/body/main/section[1]/div/div[2]/div/div/form/div/div[3]/button')
    };
    get sendyourCvBtn() {
        return $('/html/body/main/section[3]/div/div[2]/div[1]/div[1]//*[@href]')
    };
    get avLinkeldinBtn() {
        return $('/html/body/main/section[3]/div/div[2]/div[1]/div[2]/a/span//*[@href]')
    };
    get referCandidateLink() {
        return $('/html/body/main/section[3]/div/div[2]/div[2]/p[2]/a')
    }
    


}

module.exports = new careerPage();