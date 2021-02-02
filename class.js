class student{
    constructor(sName,sId){
        this.name = sName;
        this.id = sId;
        this.class = 'Three';
        this.school = 'Feni Residential Cadet Madrashah'
    }
}

const student1 = new student('Nur Mohammad Rayhan',317);
const student2 = new student('Nazim Uddin Hridoy',105,);
const student3 = new student('Mahfuzur Rahman',005);
console.log(student1,student2,student3);