let input=document.querySelector("input");
let buttons=document.querySelectorAll(".button");
let isEqual=false;


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try{
                input.value=eval(input.value);
            }catch(err){
                console.log("invalid opearation ");
            }
            
             isEqual=true;
             console.log(isEqual);
        }
        else if(e.target.innerHTML == 'c'){
            input.value="";
        }else if(e.target.innerHTML=="clr"){
      const tempArr= input.value.split("");
      tempArr.pop();
      input.value=tempArr.join("");
        }
        else{
            if(isEqual!=true){
                input.value+=e.target.innerHTML;
            }
            else{
                input.value="";
                input.value+=e.target.innerHTML;
                isEqual=false;
            }
        }
    })
})
