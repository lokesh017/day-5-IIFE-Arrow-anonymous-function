//Print odd numbers in an array(IIFE)
(function(a){
    var  odd="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            odd+=a[i]+" "
        }
    }
    odd+=a[a.length-1]
    console.log(odd);
})([1,2,3,4,5,6,7,8,9,10]);



//Convert all the strings to title caps in a string array(IIFE)
(function (string) {
    var something = string.toLowerCase().split(" ");
    for(var i = 0; i< something.length; i++){
        something[i] = something[i][0].toUpperCase() + something[i].slice(1);
    }
    something.join(" ");
 var nothing="";
 for(let i=0;i<something.length-1;i++)
 {
    nothing+=something[i]+" "
 }
 nothing+=something[something.length-1]
 console.log(nothing);
 }) ("i am a web devoloper");



 //Sum of all numbers in an array(IIFE)
 (function(a){
    var  something=0;
    for(i=0;i<a.length;i++)
    {
        something+=a[i]
    }
    console.log(something);
})([1,2,3,4,5,7,8,9,10]);



//Return all the prime numbers in an array(IIFE)
(function(a){
    var  something="";
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
            something+=a[i]+" "
        }
    }
    console.log(something);
 
})([1,2,3,4,5,6,7,8,9,10]);



//Remove duplicates from an array(IIFE)


(function(a){
    var something=[];
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
            something.push(a[i])
        }
    }
    let c=""
    for(let i=0;i<something.length-1;i++)
     {
         c+=something[i]+" ";
    }
    c+=something[something.length-1];
     console.log(c);
    
})([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]);



//Return all the palindromes in an array(IIFE)

(function(a){
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
    console.log(ans);
 
}) (["tenet","mom"]);





