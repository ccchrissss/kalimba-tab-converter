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

const keyG = ['G0', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2']
const keyC = ['C0', 'D0', 'E0', 'F0', 'G0', 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'A2', 'B2', 'C2', 'D2', 'E2']

let myKalimba = new Kalimba('Hugh Tracey', 'iForget', 'G', 15, keyG)
let misaKalimba = new Kalimba('n/a', 'n/a', 'C', 17, keyC)

let startingKey = document.querySelector('#input-key')
let convertButton = document.querySelector('#convert-button')
let notesInput = document.querySelector('#notes-input').value
let desiredKey = document.querySelector('#output-key')

// convertButton.addEventListener('click', kalimbaKeyChanger)
// convertButton.addEventListener('click', myFunkyFunction())

function myFunkyFunction(str) {
  console.log(document.querySelector(str).value)
}

function kalimbaKeyChanger(notesInput, desiredKey) {
  // declare variable convertedNotes set it to an empty array
  // split strOfNotes into array by space
  // loop through the strOfNotes array 
    // find the index of the current note in the current key array // indexOf()
    // push the desired key array[j] to convertedNotes
  // join convertedNotes with a space between each element
  // return convertedNotes

  let convertedNotes = []

  // notesInput = notesInput.split(' ')
  console.log(notesInput)

  for (let i = 0; i < notesInput.length; i++) {
    // console.log(this.notes[0])
    // console.log(desiredKey[ this.notesArr.indexOf( strOfNotes[i] ) ])
    // convertedNotes.push( desiredKey[ desiredKey.indexOf( strOfNotes[i] ) ] )

    convertedNotes.push( desiredKey[ this.notesArr.indexOf( notesInput[i] ) ] )
  }

  // console.log(convertedNotes)
  // return convertedNotes.join(' ')
  console.log(convertedNotes.join(' '))

}




// console.log(misaKalimba.keyConverter('C1 E1 G1', keyG))


// function keyConverter()