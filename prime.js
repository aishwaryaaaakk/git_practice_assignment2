
let num=17;

let count=0;
    
for(var i=1; i<=num; i++ )
{
   if(num%i==0)
   {
      count++;
   }
        
}
if(count==2){
   console.log("It is a prime no.")
}
else
{
  console.log("It is not a prime no.")
}
