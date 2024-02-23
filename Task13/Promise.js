//Promise first roll number fatech and then name and age
const pobj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
        // reject('error');
    }, 2000);

});


const getbiodata = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: 'Ram',
                age: 23
            }
            resolve(`my roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old   `);
        }, 2000, indexdata)

    });
}
pobj1.then((rollno) => {
    console.log(rollno);
    getbiodata(rollno[1]).then((timepass) => {
        console.log(timepass);
    })
}).catch((error) => {
    console.log(error);
})



