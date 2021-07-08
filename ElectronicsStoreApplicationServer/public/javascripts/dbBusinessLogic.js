const dbDataAccessLogic = require("./dbDataAccessLogic");
var dbBusinessLogic = {};

//begin - added by Naga Sri Muvva - on 06/07/2021 - to get the security questions and service types
dbBusinessLogic.getSignUpData = async () => {
    var signUpFormData = { "securityQuestions": null, "serviceType": null }
    signUpFormData.securityQuestions = await dbDataAccessLogic.getSecurityQuestions()
    signUpFormData.serviceType = await dbDataAccessLogic.getServiceType();
    return signUpFormData;
}
//end - added by Naga Sri Muvva - on 06/07/2021 - to get the security questions and service types



module.exports = dbBusinessLogic;