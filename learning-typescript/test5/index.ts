interface IPerson {
  firstName: string;
  lastName: string;
  address?: string;
}

function getFullname(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
}

console.log(getFullname({ firstName: "Tu", lastName: "Chan" }));
