const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value

    switch(type){
        case 'text':
            appendText(label, placeholder) 
            break
        case 'radio':
            appendRadio(label, placeholder)
            break
        case 'button': 
            appendButton(label, placeholder)
            break
    }
}

const appendText = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement('div')
    container.setAttribute('style', 'position:relative; display:flex; align-items:center;')
    
    let el = document.createElement('input')
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-1')
    el.setAttribute('placeholder', placeholder)
    
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('style', 'border:1px solid; font-size:12px; margin-left:5px;')
    removeBtn.textContent = 'Remove'
    
    removeBtn.addEventListener('click', () => {
      container.remove()
    })
    
    container.append(el)
    container.append(removeBtn)
    
    document.querySelector("#elements").append(container) 
  }
  
  

const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement('div')
    container.setAttribute('style', 'display:flex; margin-top: 5px')

    let el = document.createElement('input')
    el.setAttribute('type', 'radio')

    let text = document.createElement('label')

    text.textContent = label

    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('style', 'border:1px solid; font-size:12px; margin-left:5px;')
    removeBtn.textContent = 'Remove'
    
    removeBtn.addEventListener('click', () => {
      container.remove()
    })

    container.append(el)
    container.append(text)
    container.append(removeBtn)

    document.querySelector("#elements").append(container) 
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let container = document.createElement('div')
    container.setAttribute('style', 'position:relative; display:flex; align-items:center;')
    
    let el = document.createElement('button')
    el.setAttribute('style', 'display: flex; justify-content: flex-start; margin-top: 5px; padding: 5px; text-align: center')
    el.textContent = label
    
    let removeBtn = document.createElement('button')
    removeBtn.setAttribute('style', 'border:1px solid; font-size:12px; margin-left:5px;')
    removeBtn.textContent = 'Remove'
    
    removeBtn.addEventListener('click', () => {
      container.remove()
    })
    
    container.append(el)
    container.append(removeBtn)
    
    document.querySelector("#elements").append(container) 
}






