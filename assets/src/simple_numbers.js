const arr = [];
let nNamber=100;
arr.push(2);
chechnumber:for (let i=2;i<(nNamber+1);i++)
{
for (let j=0;j<arr.length;j++)
{
if ((i%arr[j])===0)
{
continue chechnumber;
}
}
arr.push(i);
console.log(i);
};