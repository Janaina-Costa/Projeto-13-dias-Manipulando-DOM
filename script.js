const ulElement = document.getElementsByTagName('ul')[0]



/*criando elementos */
let newLiOne= document.createElement('li')
let newLiLast = document.createElement('li')

newLiOne.className='hot'
newLiLast.className = 'hot'

/*criando novo texto para os novos elemento */ 
let newTextOne = document.createTextNode('kale')
let newTextTwo = document.createTextNode('cream')

/*inserindo novo elemento ao final da lista */
newLiOne.appendChild(newTextOne)
ulElement.appendChild(newLiOne)

/*inserindo novo elemento ao inicio da lista */
newLiLast.appendChild(newTextTwo)
ulElement.insertBefore(newLiLast, ulElement.firstChild)

/*atributo class para cool */
const elLength = document.getElementsByTagName('li')
 
for(let i = 0; i<elLength.length; i++){
    elLength[i].className = 'cool'
}


/*contador da lista */
let numberCount = document.querySelector('h2')
let textCount = numberCount.firstChild.nodeValue

let totalItem = elLength.length
let newNumberCount = `${textCount} ${totalItem}`

numberCount.textContent = newNumberCount