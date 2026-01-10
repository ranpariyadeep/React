function genTicket(n) {
  let arr = new Array(n);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }

  arr.forEach((element) => {
    console.log(element);
  });
  return arr;
}

let isWinning =  (ticket, winigSum) =>{
       let count = 0;
        ticket.forEach(e => {
             count = count + e;
        });

        if (count == winigSum){
            return "Congress, you win this Lottery";
        } else{
            return "";
        }
    }

export { genTicket, isWinning };
