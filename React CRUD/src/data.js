const data = {
    "friends": [
        {
          "age": 0,
          "name": "Berta Crane",
          "gender": "male",
          "email": "montoyasweeney@harmoney.com"
        },
        {
          "age": 1,
          "name": "Brandie Noble",
          "gender": "male",
          "email": "montoyasweeney@harmoney.com"
        },
        {
          "age": 2,
          "name": "Kathryn Villarreal",
          "gender": "male",
          "email": "montoyasweeney@harmoney.com"
        }
      ]
}

data.friends.map(x=>{
  return x.id = Math.random() * 100
});

export default data;