"use strict";
// class Product{
const users = [{ id: 1, name: "joseph" }, { id: 2, name: "rosily" }];
const object1 = { findmany: () => users, adduser: ({ id, name }) => users.push({ id, name }), findById: (id) => users.find((object2) => { if (object2.id == id)
        return (object2.name); }) };
object1.adduser({ id: 333, name: "anaj" });
console.log(object1.findById(2222));
console.log("database is", object1.findmany());
console.log("new idea");
const postivie = { nameofplayer: "messi", id: 222 };
const newArray = [];
const { nameofplayer } = postivie;
newArray.push({ nameofplayer });
console.log("here we go", newArray);
