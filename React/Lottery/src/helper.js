export function genTicket(length) {
  let ticket = [];
  for (let i = 0; i < length; i++) {
    ticket.push(Math.floor(Math.random() * 10)); // generates numbers from 0 to 9
  }
  return ticket;
}

export function sum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
