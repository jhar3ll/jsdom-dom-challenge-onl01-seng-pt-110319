let counter = document.getElementById("counter")
let likeCount = {}
let likeList = document.getElementsByClassName("likes")[0]
let commentList = document.getElementById('list')

document.addEventListener("DOMContentLoaded", function(event){
    
let domTimer = setInterval(function() {
    incrementCounter(1)}, 1000)
    

    document.addEventListener('click', event => {
        if (event.target.id === 'minus'){
            incrementCounter(-1)  
        }

        else if (event.target.id === 'plus'){
            incrementCounter(1)
        }

        else if (event.target.id === 'heart'){
            let number = counter.textContent
            
            //number has been liked already
            if (likeCount[number]){
                likeCount[number]++
                let li = document.querySelector(`[data-id="${number}"]`)
                li.textContent = `${number} has been liked ${likeCount[number]} times!`

            //number has NOT been liked before
            } else {
                likeCount[number] = 1
                let li = document.createElement("li")
                li.dataset.id = number
                li.textContent = `${number} has been liked`
                likeList.append(li)
            }
          }
        
        else if (event.target.id === 'pause'){
            clearInterval(domTimer)
            document.getElementById('minus').disabled = true
            document.getElementById('plus').disabled = true
            document.getElementById('heart').disabled = true
            document.getElementById('submit').disabled = true
            document.getElementById('comment-input').disabled = true
            event.target.textContent = 'resume'
            event.target.id = 'resume'

        } else if(event.target.id === 'resume'){
            domTimer = setInterval(function() {
                incrementCounter(1)}, 1000)

                document.getElementById('minus').disabled = false
                document.getElementById('plus').disabled = false
                document.getElementById('heart').disabled = false
                document.getElementById('submit').disabled = false
                document.getElementById('comment-input').disabled = false
                event.target.textContent = 'pause'
                event.target.id = 'pause'
        }

       
    })

})

document.addEventListener('submit', function(event){
    event.preventDefault()
    let li = document.createElement('li')

    let comment = event.target.comment.value
    let p = document.createElement('p')
    p.textContent = comment 
    li.textContent = p.textContent
    commentList.append(li)
    event.target.reset()
})

function incrementCounter(number){
    counter.textContent = (parseInt(counter.textContent) + number)
}



