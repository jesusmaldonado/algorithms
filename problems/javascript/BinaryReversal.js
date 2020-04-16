let binary = Array(20).fill(1);
binary = binary.map((e, i) => e * Math.pow(8, i+1));

function BinaryReversal(str) { 
    const int = parseInt(str);
    let binary = int.toString(2);
    while (binary.length < ){
      binary = "0" + binary;
    }
    
    let reversed = binary.split("").reverse().join();

    const revInt = parseInt(reversed, 2);;
    console.log('revint', revInt);
    // code goes here  
    return revInt;
  }
 console.log(BinaryReversal("213"), 171);
 console.log(BinaryReversal("4567"), 60296);