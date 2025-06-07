const input = [2,2,2,11,4,3,9];

//solution
const newarray = [];

for(let i=0;i<input.length;i++)
{
    newarray.push(input[i]*2);
}

console.log(newArray);

// <!-----------------------------------------------------!>


function transform(i)
{
    return i*2;
}

// map(arr,transform);

const ans = input.map(transform);
console.log(ans); 