var mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
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
},{collection:"tblUsers"}) 


const ServiceSchema = new schema({
    serviceId: String,
    serviceType: String,
    salesChannel: String,
    price: String,
    saleStartDate: String,
    saleEndDate: String,
    isActive: String
},{collection:"tblServices"})

const ServiceTypeSchema = new schema({
    serviceTypeId:String,
    serviceType:String,
    isActive:String
},{collection:"tblServiceType"})

const SecurityQuestionsSchema = new schema({
    questionId:String,
    securityQuestion:String,
    isActive:String
},{collection:"tblSecurityQuestions"});


module.exports = {UserSchema:UserSchema,ServiceSchema:ServiceSchema,ServiceTypeSchema:ServiceTypeSchema,SecurityQuestionsSchema:SecurityQuestionsSchema}