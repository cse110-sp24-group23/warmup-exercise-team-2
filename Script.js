document.addEventListener("DOMContentLoaded", function(){
    const buttonPress = document.querySelector("button");
    buttonPress.addEventListener("click", function(){
       const emotions = document.querySelectorAll('input[name="emotions"]');
       emotions.forEach(function(emotion){
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
