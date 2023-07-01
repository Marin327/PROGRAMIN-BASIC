function solve(input) {
        let pens = Number (input[0]);
        let markers= Number (input[1]);
        let detergent = Number (input[2]);
        let discount = Number (input[3]);
         
          let finalPens = pens * 5.80; 
          let finalMarkers = markers * 7.20; 
          let finalDetergent  = detergent * 1.20;

          let finalPrice = finalPens + finalMarkers + finalDetergent;
          let priceAfterDiscount = finalPrice - (finalPrice * discount / 100);
          
          console.log(priceAfterDiscount);
        }
    

solve(["2", "3", "4", "25"]);