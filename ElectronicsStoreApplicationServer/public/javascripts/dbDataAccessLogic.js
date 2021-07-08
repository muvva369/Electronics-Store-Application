const dbClientConnection = require('./dbConnector');
var models = require('./model');
var dbDataAccessLogic = {}

//begin - added by Naga Sri Muvva - on 06/07/2021 - to get the security questions
dbDataAccessLogic.getSecurityQuestions = async () => {
    try {
        collection = await dbClientConnection.getSecurityQuestionsCollection()
        securityQuestionsData = await collection.find({ "isActive": "1" },{_id:false,isActive:false})
        return securityQuestionsData;
    }catch(error){
        console.log(error);
    }  
}
//end - added by Naga Sri Muvva - on 06/07/2021 - to get the security questions

//begin- added by Naga Sri Muvva - on 06/07/2021 - to get the service types
dbDataAccessLogic.getServiceType = async () => {
    try {
        collection = await dbClientConnection.getServiceTypeCollection()
        securityQuestionsData = await collection.find({ "isActive": "1" },{_id:false,isActive:false})
        return securityQuestionsData;
    }catch(error){
        console.log(error);
    }  
}
//end - added by Naga Sri Muvva - on 06/07/2021 - to get the service types


module.exports = dbDataAccessLogic