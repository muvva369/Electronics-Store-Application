export interface User {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    fullName: string,
    email: string,
    phone: string,
    gender: string,
    age: number,
    dob: Date,
    country: string,
    isAdmin: number,
    password: string,
    securityQuestionId: string,
    securityAnswer: string,
    serviceId: number
}


export interface Service {
    serviceId: number,
    serviceType: string,
    salesChannel: string,
    price: string,
    saleStartDate: Date,
    saleEndDate: Date,
    isActive: number
}

export interface ServiceType{
    serviceTypeId:number,
    serviceType:string
}

export interface securityQuestions{
    questionId:number,
    securityQuestion:string
}