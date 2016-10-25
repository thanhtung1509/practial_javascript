/*namespace Person {
  export const name = "Tung Pham";
  export const address = "Bien Hoa Dong Nai";
}

console.log(Person.name);
console.log(Person.address);*/

interface IPerson {
  personname: string,
  address1?: string,
  address2: string
}

const person: IPerson = {
  personname : "tung pham",
  address1: "bien hoa dong nai",
  address2: "hai"
};

//const { personname, address1, address2 } = person;

const company = {
  director: person,
  category: {
    industry: {
      name: "tung"
    }
  }
}

function printSeparate({director: {personname: directorname}, category: { industry: { name : industryName } }}) {
  return {
    directorname, industryName
  }
}

const expotObj = printSeparate(company);
