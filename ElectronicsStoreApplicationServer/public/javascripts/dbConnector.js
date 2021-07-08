const { Schema } = require("mongoose");
const Moongoose = require("mongoose");
Moongoose.Promise = global.Promise;
Moongoose.set('useCreateIndex', true);
Moongoose.set('useFindAndModify', false);
Moongoose.set('useUnifiedTopology', true);
Moongoose.set('useNewUrlParser', true);
const url = "mongodb://localhost:27017/serviceProviderApplication";
const collection = {}

const UserSchema = new Schema({
    id: String,
    userName: String,
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    phone: String,
    gender: String,
    age: String,
    dob: String,
    country: String,
    isAdmin: String,
    password: String,
    securityQuestionId: String,
    securityAnswer: String,
    serviceId: String
}, { collection: "tblUsers" })

collection.getUsersCollection = () => {
    return Moongoose.connect(url).then((database) => {
        return database.model('Users', UserSchema)
    }).catch(() => {
        let err = new Error("Could not connect to tblUsers Collection Database");
        err.status = 500;
        throw err;
    })
}


const ServiceSchema = new Schema({
    serviceId: String,
    serviceType: String,
    salesChannel: String,
    price: String,
    saleStartDate: String,
    saleEndDate: String,
    isActive: String
}, { collection: "tblServices" })

collection.getServicesCollection = () => {
    return Moongoose.connect(url).then((database) => {
        return database.model('Services', ServiceSchema)
    }).catch(() => {
        let err = new Error("Could not connect to tblServices Collection Database");
        err.status = 500;
        throw err;
    })
}

const ServiceTypeSchema = new Schema({
    serviceTypeId: String,
    serviceType: String,
    isActive: String
}, { collection: "tblServiceType" })

collection.getServiceTypeCollection = () => {
    return Moongoose.connect(url).then((database) => {
        return database.model('ServiceType', ServiceTypeSchema)
    }).catch(() => {
        let err = new Error("Could not connect to tblServiceType Collection Database");
        err.status = 500;
        throw err;
    })
}

const SecurityQuestionsSchema = new Schema({
    questionId: String,
    securityQuestion: String,
    isActive: String
}, { collection: "tblSecurityQuestions" });

collection.getSecurityQuestionsCollection = () => {
    return Moongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then((database) => {
        return database.model('Model', SecurityQuestionsSchema,"tblSecurityQuestions")
    }).catch(() => {
        let err = new Error("Could not connect to tblSecurityQuestions Collection Database");
        err.status = 500;
        throw err;
    })
}


module.exports=collection;

