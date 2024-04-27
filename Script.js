document.addEventListener("DOMContentLoaded", function(){
    //assigns submit button to a variable
    const buttonPress = document.querySelector("button");
    //wait for button press
    buttonPress.addEventListener("click", function(){
       const emotions = document.querySelectorAll('input[name="emotions"]');
       //check all the emotion input objects to see which one is checked
       emotions.forEach(function(emotion){
        //if checked, create a text file that saves the checked emotion.
        if(emotion.checked){
        if(emotion.checked){
            let data = emotion.id + '\n'
            const blob = new Blob([data], { type: 'text/plain' });

            const a = document.createElement('a');
            const url = URL.createObjectURL(blob);
            a.href = url;
            a.download = 'Data.txt';
            document.body.appendChild(a);
            a.click();
            }
        }
        )
        
    });

}) 
