var friends = {};
friends.bill = {
        firstName: "Bill",
        lastName: "Chen",
        number: "123-456-7890",
        address: ["Grafton road","Auckland Central","1010"]
};
friends.steve = {
        firstName: "Steve",
        lastName: "Ha",
        numnber: "321-654-9870",
        address: ["Northcote","Auckland","0627"]
}

var list = function(friends) {
    for (var key in friends) {
        console.log(key);
    }
}

var search = function(name) {
    for (var fn in friends) {
        if (friends[fn].firstName === name) {
            console.log(friends[fn]);
            return friends[fn];
        }
    }
};