let count=0;
let index=0;
let index1=0;
let index2=0;
function passwordValid(value)
{
        let last_digit=value.charAt(value.length-1);
        let  digit =parseInt(last_digit);
        let last_letter=value.charCodeAt(value.length-1);
        let letter=parseInt(last_letter);
    
    if(value.length>=7 )
    {
        
        alert("length should be only 6 letters");
        let letter=document.getElementById("inp").value;
        document.getElementById("inp").value=letter.slice(0,value.length-1);
     }
     else if(value.length==6)
     {
        document.getElementById('size').style.color="green";
     }
    
     if(digit>=0 && digit<=9 ||letter==8)
    {
        
        //allowed
        for(let i=0;i<1;i++)
        {
            count++;
            
            if(count===4)
            {
                
                alert('password should be only three digits');
                let letter=document.getElementById("inp").value;
                document.getElementById("inp").value=letter.slice(0,value.length-1);
                break;
            }
            else if(count===3)
            {
                document.getElementById('dig').style.color="green";
            }
        }
        
    }
    else if(letter>=65 && letter<=90 )
    {
      //allowed
        for(let i=0;i<1;i++)
        { 
            
            index++;
             if(index===2)
            {
                
                alert('password should be only one capital letter');
                let letter=document.getElementById("inp").value;
                document.getElementById("inp").value=letter.slice(0,value.length-1);
                break;
            } 
            else if(index===1)
            {
                document.getElementById('cap').style.color="green";
             } 
        } 
    }
    else if(letter>=97 && letter<=122 )
    {
      //allowed
        for(let i=0;i<1;i++)
        {
            
            index1++;
             if(index1===2)
            {
                
                alert('password should be only one small letter');
                let letter=document.getElementById("inp").value;
                document.getElementById("inp").value=letter.slice(0,value.length-1);
                break;
            }  
            else if(index1===1)
            {
                document.getElementById('sma').style.color="green";
             } 
        } 
    }
    else if(letter==64 ||letter==35 ||letter==38 ||letter==36 )
    {
      //allowed
        for(let i=0;i<1;i++)
        {
           
            index2++;
             if(index2===2)
            {
                
                alert('password should be only one special symbol(@,$,#)');
                let letter=document.getElementById("inp").value;
                document.getElementById("inp").value=letter.slice(0,value.length-1);
                break;
            }  
            else if(index2===1)
            {
                document.getElementById('spe').style.color="green";
             } 
        } 
    }
    else
    {
        alert("give correct valid password");
        let letter=document.getElementById("inp").value;
        document.getElementById("inp").value=letter.slice(0,value.length-1); 
    }
  
   
}