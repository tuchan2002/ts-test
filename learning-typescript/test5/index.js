function getFullname(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(getFullname({ firstName: "Tu", lastName: "Chan" }));
