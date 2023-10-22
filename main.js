
    const form=document.querySelector('form');
    const input=document.querySelector('input');
    const resetBtn=document.querySelector('.resetBtn');
    const pl_Winner =document.querySelector('.pl-winner');
    const wining_Score =document.querySelector('.Wining-Score span');
    const pl_1Score =document.querySelector('.pl-1Score span');
    const pl_2Score =document.querySelector('.pl-2Score span');
    const player_1 =document.querySelector('.player-1');
    const player_2 =document.querySelector('.player-2');
    

    let p1_score=0;
    let p2_score=0;
    let p1_Trun=true;
    let p2_Trun=false;
    
    const inputValidation=(inputVal)=>{
        let isValid = false;
        // NaN !== NaN && result true if value is not  real number
        if(!inputVal || inputVal !== inputVal){
            alert('Please fill in the correct number')
            isValid = true;
           
        }  
        return isValid
    }
    
    
    const resetButton=()=>{
        input.value ='';
    }
    
    
    form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputVal=Number(input.value)
    const isValid=inputValidation(inputVal)
    if(isValid) return
    resetButton()
    wining_Score.textContent =inputVal
    })


    player_1.addEventListener('click',(e)=>{
        if(p1_Trun){
            p1_score++
            pl_1Score.textContent=p1_score
        }
        p1_Trun=false
        player_1.setAttribute('disabled','disabled')

        p2_Trun=true
        player_2.removeAttribute('disabled','disabled')
    })

    player_2.addEventListener('click',(e)=>{
        if(p2_Trun){
            p2_score++
            pl_2Score.textContent=p2_score
        }
        p2_Trun=false
        player_2.setAttribute('disabled','disabled')

        p1_Trun=true
        player_1.removeAttribute('disabled','disabled')
     })
