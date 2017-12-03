/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.
If we list all the natural numbers below 20 that are multiples of 3 or 5, 
we get 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
Write a JavaScript function that will find the sum of all multiples of 3 or 5 that are below a number N, 
where N is an input parameter to the function.
*/

naturalNumber = (number,div1,div2) => {//div1->3, div2->5
    let currentSum = 0;
    for(let i = 0 ; i< number; i++){ 
        if(i % div1  == 0){
            currentSum += i;
            continue;
        }     
        if( i % div2 == 0)
             currentSum += i;
    }
    return currentSum;
}

/*
Test cases
Input: 10    Output: 23
Input: 20    Output: 78
Input: 100   Output: 2318
Input: 10000 Output: 23331668
Input: 45678 Output: 486804150
*/