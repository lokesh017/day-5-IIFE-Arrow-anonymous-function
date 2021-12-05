//Print odd numbers in an array using anonymous function

var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));


//Convert all the strings to title caps in a string array using anonymous function

var str=function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 return res;
 }
 console.log(str("im a web developer"));



 //Sum of all numbers in an array using anonymous function
 var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));


//Return all the prime numbers in an array using anonymous function

var sum =function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;
 
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));


//Return all the palindromes in an array using anonymous function


var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind(["tenet","mom","hi"]));

//Remove duplicates from an array using a anonymous function
var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     return c;
    
}
console.log(arr([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));






