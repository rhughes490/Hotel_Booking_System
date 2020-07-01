use guests;
db.dropDatabase();

db.checkins.insertMany([
  {
    name: "Adam",
    email: "adamkoziel@outlook.com",
    isCheckedIn : false 
  },
  {
    name: "John",
    email: "bigjohn@outlook.com",
    isCheckedIn : true 
  },
  {
    name: "Peter",
    email: "peter@outlook.com",
    isCheckedIn : false 
  },
  {
    name: "Ronan",
    email: "ronanh@outlook.com",
    isCheckedIn : true
  }
  
])


