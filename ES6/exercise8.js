/*
• Create a function to Extract the value marked in red from the given object
const person = {
  first: 'Mohan',
  last: 'Singh',
  address: {
    lines: ['Sector 47', 'Chestor Lane', 'Apt 23'],
    city: 'Gurgaon',
    state: 'Haryana'
  }
}
*/

function extract({ address }) {
  const {
    lines: [add1, add2]
  } = address;

  console.log(add2);
}

extract(person);
