interface Users {
    username?: String;
    Age?: Number;
    Specialization?: String;
    Friends?: String;
}

const User1: Users = {
    username: 'Ayman',
    Age: 27,
    Specialization: 'IS',
    Friends: 'Ayman',
}

const User2: Users = {
    username: 'ALi',
    Age: 27,
    Specialization: 'CS',
    Friends: 'Ayman'
}
const User3: Users = {
    username: 'Khalid',
    Age: 29,
    Specialization: 'CS',
    Friends: 'Ayman'
}


console.log(User1, User2 , User3);
