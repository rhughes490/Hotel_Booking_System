use guests;
db.dropDatabase();

db.checkins.insertMany([
  {
    name: "Adam",
    email: "adamkoziel@outlook.com",
    date: "2017-06-01",
    isCheckedIn : false 
  },
  {
    name: "John",
    email: "bigjohn@outlook.com",
    date: "2016-04-02",
    isCheckedIn : true 
  },
  {
    name: "Peter",
    email: "peter@outlook.com",
    date: "2019-10-12",
    isCheckedIn : false 
  },
  {
    name: "Ronan",
    email: "ronanh@outlook.com",
    date: "2020-06-01",
    isCheckedIn : true
  }
  
])


