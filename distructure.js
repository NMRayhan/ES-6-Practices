const person = {
    pName : "Rayhan", age: 24, gName : 'nai', phone: '018', gPhone: '019', friends:['nur', 'mohammad', 'chandan', 'tamim'], address: 'Dhanmondhi32'
}
const {pName, age, phone, gPhone} = person;
console.log(pName, age, phone, gPhone);

const student = {
    sId : 2341,
    sName : 'NMRayhan',
    Class : "Honur's 3rd Year",
    fullName : {
        firstName : 'Nur',
        middleName : 'Mohammad',
        lastName : 'Rayhan'
    }
}

function studentID({sId}){
    return sId
}
console.log(studentID(student));

function StudentName({sName,fullName : {lastName : name}}){
    return `${sName} is ${name}`;
}
console.log(StudentName(student));

