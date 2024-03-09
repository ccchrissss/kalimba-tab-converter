class Kalimba {
  constructor(brand, model, key, tinesNum, notesArr) {
    this.brand = brand
    this.model = model
    this.key = key
    this.tinesNum = tinesNum
    this.notesArr = notesArr
  }

  keyConverter(strOfNotes, desiredKey) {
    // declare variable convertedNotes set it to an empty array
    // split strOfNotes into array by space
    // loop through the strOfNotes array 
      // find the index of the current note in the current key array // indexOf()
      // push the desired key array[j] to convertedNotes
    // join convertedNotes with a space between each element
    // return convertedNotes

    let convertedNotes = []

    strOfNotes = strOfNotes.split(' ')
    // console.log(strOfNotes)

    for (let i = 0; i < strOfNotes.length; i++) {
      // console.log(this.notes[0])
      // console.log(desiredKey[ this.notesArr.indexOf( strOfNotes[i] ) ])
      // convertedNotes.push( desiredKey[ desiredKey.indexOf( strOfNotes[i] ) ] )

      convertedNotes.push( desiredKey[ this.notesArr.indexOf( strOfNotes[i] ) ] )
    }

    // console.log(convertedNotes)
    return convertedNotes.join(' ')



  }

}

const keyG = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G2', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G3']
const keyC = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3']
// const keysList = ['keyC', 'keyG']
const keysList = [keyC, keyG]

let myKalimba = new Kalimba('Hugh Tracey', 'iForget', 'G', 15, keyG)
let misaKalimba = new Kalimba('n/a', 'n/a', 'C', 17, keyC)


const notesDisplayButton = document.querySelector('#notes-display-button')

notesDisplayButton.addEventListener('click', displayAllNotesAllKeys)

function displayAllNotesAllKeys() {

  

}

// let startingKey = document.querySelector('#input-key')
// let convertButton = document.querySelector('#convert-button')
// let notesInput = document.querySelector('#notes-input').value
// let desiredKey = document.querySelector('#output-key')

// convertButton.addEventListener('click', kalimbaKeyChanger)

// function myFunkyFunction(str) {
//   console.log(document.querySelector(str).value)
// }

function kalimbaKeyChanger(notesInput, startingKey, desiredKey) {
  // declare variable convertedNotes set it to an empty array
  // split strOfNotes into array by space
  // loop through the strOfNotes array 
    // find the index of the current note in the current key array // indexOf()
    // push the desired key array[j] to convertedNotes
  // join convertedNotes with a space between each element
  // return convertedNotes

  let convertedNotes = []
      notesInput = document.querySelector(notesInput).value
      startingKey = document.querySelector(startingKey).value
      desiredKey = document.querySelector(desiredKey).value
      convertedNotesEl = document.querySelector('#converted-notes')

  

  notesInput = notesInput.split(' ')
  console.log(notesInput)
  console.log(startingKey)
  console.log(desiredKey)
  console.log(keysList)
  console.log(keysList.indexOf(keyG))

 

  for (let i = 0; i < notesInput.length; i++) {
    // console.log(this.notes[0])
    // console.log(desiredKey[ this.notesArr.indexOf( strOfNotes[i] ) ])
    // convertedNotes.push( desiredKey[ desiredKey.indexOf( strOfNotes[i] ) ] )

    console.log(notesInput.length)
    // console.log(desiredKey[ startingKey.indexOf( notesInput[i] ) ] )

    if (desiredKey === 'keyG' && startingKey === 'keyC') {
      convertedNotes.push( keyG[ keyC.indexOf( notesInput[i] ) ] )
    }

    if (desiredKey === 'keyC' && startingKey === 'keyG') {
      convertedNotes.push( keyC[ keyG.indexOf( notesInput[i] ) ] )
    }
    
  }

  convertedNotes = convertedNotes.join(' ')
  convertedNotesEl.innerText = convertedNotes

}




// console.log(misaKalimba.keyConverter('C1 E1 G1', keyG))


// function keyConverter()