function BinaryReversal(str) { 
    const int = parseInt(str);
    let binary = int.toString(2);
    while (binary.length < 8){
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