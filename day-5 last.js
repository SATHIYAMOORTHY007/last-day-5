//json
const jsonData = {
  name: 'John',
  age: 30,
  city: 'New York',
  hobbies: ['reading', 'swimming', 'traveling'],
}

//Using the for loop:
console.log('Using for loop:')
for (let key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`)
}

//Using the for-in loop:
console.log('Using for-in loop:')
for (let key in jsonData) {
  if (jsonData.hasOwnProperty(key)) {
    console.log(`${key}: ${jsonData[key]}`)
  }
}

//Using for-of loop:
for (let hobby of jsonData.hobbies) {
  console.log(hobby)
}

//Using forEach

jsonData.hobbies.forEach(function (hobby) {
  console.log(hobby)
})

//question 2 create your own resume

const myResume = {
  name: 'sathiya moorthy s',
  age: '20',
  skills: [
    {
      frontend: {
        html: '80%',
        css: '70%',
        bootstrap: '68%',
      },
      backend: {
        Nodejs: '80%',
        Mongo: '70%',
        Mysql: '68%',
      },
    },
  ],
  gender: 'male',
  hobby: ['books reading', ' motivation specker'],
  projects: ['bookShows', 'Library', 'student Protal'],
}
