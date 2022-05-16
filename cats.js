let cats = {
  "title": "Cat Families",
  "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
  "cats": [
    {
      "name": "Lindy",
      "breed": "Cymric",
      "color": "white",
      "kittens": [
        {
          "name": "Percy",
          "gender": "m"
        },
        {
          "name": "Thea",
          "gender": "f"
        },
        {
          "name": "Annis",
          "gender": "f"
        },
      ]
    },
    {
      "name": "Mina",
      "breed": "Aphrodite Giant",
      "color": "ginger",
      "kittens": [
        {
          "name": "Doris",
          "gender": "f"
        },
        {
          "name": "Pickle",
          "gender": "f"
        },
        {
          "name": "Max",
          "gender": "m"
        }
      ]
    },
    {
      "name": "Antonia",
      "breed": "Ocicat",
      "color": "leopard spotted",
      "kittens": [
        {
          "name": "Bridget",
          "gender": "f"
        },
        {
          "name": "Randolph",
          "gender": "m"
        }
      ]
    }
  ]
}


// figure out max number of kittens
const MAX_NUMBER_CATS = Math.max(...cats.cats.map(c => c.kittens.length))

const makeFamily = (family) => {

  // make family div
  let familyDiv = document.createElement("div")
  familyDiv.className = "family"

  // vertically add mom and children

  // mom name
  // add to familyDiv
  let momHeaderDiv = document.createElement("div")
  momHeaderDiv.className = "motherHeader"
  momHeaderDiv.style.height = "20px"
  momHeaderDiv.style.textAlign = "center"
  momHeaderDiv.innerText = family.name
  familyDiv.appendChild(momHeaderDiv)


  // mom image
  // add to familyDiv
  let momDiv = document.createElement("img")
  momDiv.src = './imgs/cool_cat.png'
  momDiv.className = "mother"
  familyDiv.appendChild(momDiv)

  // children 
  // add to familyDiv
  let childrenDiv = document.createElement("div")
  childrenDiv.className = "children"
  familyDiv.appendChild(childrenDiv)

  // add kittens to children div horizontally
  // kittens
  for (let kittenObject of family.kittens) {
      // make kitten div
      let kittenDiv = document.createElement("div")
      kittenDiv.className = "kitty"
      kittenDiv.style.width = (100 / (MAX_NUMBER_CATS+1)) + '%'

      // add kitten header to kitten div
      let kittenHeaderDiv = document.createElement('div')
      kittenHeaderDiv.className = "kittyHeader"
      kittenHeaderDiv.innerText = kittenObject.name
      kittenDiv.appendChild(kittenHeaderDiv)
      
      // add kitten image to kitten div
      let kittenImg = document.createElement('img')
      kittenImg.src = './imgs/happy_cat.png'
      kittenImg.className = "kittyImg"
      kittenDiv.appendChild(kittenImg)
      
      childrenDiv.appendChild(kittenDiv)
      
  }

  return familyDiv
}

// title
// get by class and set text
let titleDiv = document.getElementsByClassName("title")[0]
titleDiv.innerText = cats.title

// intro
// get by class and set text
let introDiv = document.getElementsByClassName("intro")[0]
introDiv.innerText = cats.intro

// get all cats div
// get by class to add cat families
let allCatsDiv = document.getElementsByClassName("allCats")[0]

// for each cat family
for (let catFamily of cats.cats) {

  // make a family
  const familyDiv = makeFamily(catFamily)

  // add family to "add cats" div
  allCatsDiv.appendChild(familyDiv)

}