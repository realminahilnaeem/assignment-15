let size=prompt("Which size of pizza do you want:L,M,S").toUpperCase();
let addPepperoni=prompt("Do you want to add pepproni? Y/N").toUpperCase();
let addCheese=prompt("Do you want to add extra cheese?Y/N").toUpperCase();
let bill=0;
if(size==="S")
{
    bill = 15;
    if(addPepperoni==="Y")
    {
        bill+=2;
    }
}
else if(size==='M')
{
    bill=20;
    if(addPepperoni==="Y")
    {
        bill+=3;
    }
}
else if(size==='L')
{
    bill=25;
    if(addPepperoni==="Y")
    {
        bill+=3;
    }
}
if(addCheese==='Y')
{
    bill+=1;
    
}
alert(
    "Thank you for choosing Python Pizza Deliveries!\n Your final bill is: $"+ bill+ "."
);
