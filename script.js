var ul;
var rateNotes = []
var selectedNote = -1

window.onload = () => {
    // initialize 
    ul = document.getElementById("options")
    rateNotes = ul.getElementsByTagName("li")
    ul.addEventListener('click', rate, false)
    document.getElementById('form').onsubmit = (e) => {
        e.preventDefault()
        submit();
    }
}

function rate(e){
    for(var i=0; i<5; i++){
        if(e.target === rateNotes[i]){
            rateNotes[i].setAttribute("class", "selected")
            selectedNote = i + 1
        }else{
            rateNotes[i].setAttribute("class", "")
        }//end if
    }//end for i
}

function submit(){
    
    if(selectedNote > -1){
        document.getElementById("form").setAttribute("hidden", "true");
        document.getElementById("rating-thanks").hidden = false;
        document.getElementById("rating").innerText = `You selected ${selectedNote} out of 5`
    }
}