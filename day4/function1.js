// write a program in js to print first n prime numbers


// function n_prime(num){ //4

//     // 2,3,5,7
// }

// n_prime(4);

// (num%1 ==0 && num%num ==0) //   10%5 == 0

// i=2 , i=num/2


function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i=2; i<=num/2; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}


function n_prime(count){
    if(count < 1){
        console.log("Count is must be greater than zero");
        return;
    }
    let numbers = 2;
    while(count > 0){
        if(isPrime(numbers)){
            console.log(numbers);
            count--;
        }
        numbers++;
    }
}

n_prime(5);




// write a program in js to print n terms of fibonacci series. 

// output :-  1,1,2,3,5,8,13..... n terms of fibonacci series


















