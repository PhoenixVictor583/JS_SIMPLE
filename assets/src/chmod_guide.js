let numberAccess;
let levelAccess;
let numberEnterTrue;
do{
    numberEnterTrue=true;
    numberAccess=prompt("Enter number 0-7");
    numberAccess=Number(numberAccess);
    if (Number.isNaN(numberAccess)) {numberEnterTrue=false}
    else    switch (numberAccess){
            case 0: {
                levelAccess='---'
                break;
            };
            case 1: {
                levelAccess='--x'
                break;
            };
            case 2: {
                levelAccess='-w-'
                break;
            };
            case 3: {
                levelAccess='-wx'
                break;
            };
            case 4: {
                levelAccess='r--'
                break;
            };
            case 5: {
                levelAccess='r-x'
                break;
            };
            case 6: {
                levelAccess='rw-'
                break;
            };
            case 7: {
                levelAccess='rwx'
                break;
            };
            default:{
                numberEnterTrue=false;
            }
            };
}while(!numberEnterTrue);       
console.log('Your access:'+levelAccess);