// let box1 = document.querySelector(".box1"),
//     box2 = document.querySelector(".box2"),
//     boxY,
//     boxX,
//     isDrop = 0,
//     elDrop = function (dropCorX, dropCorY) {
        
//         isDrop = 1
        
//         // console.log("Hello Drop")
        
//         event.target.style.top = dropCorY + "px"
//         event.target.style.left = dropCorX + "px"
//         event.target.style.zIndex = 0
        
//         // console.log(dropCorX, dropCorY)
//         // console.log(event)
        
//         event.target.removeEventListener('mousemove', elMove)
//         // return isDrop
//     },
//     elMove = function (shiftX, shiftY) {
//         let curMoveX = event.clientX,
//             curMoveY = event.clientY

//         // console.log(event)

//         event.target.style.top = curMoveY - shiftY + "px"
//         event.target.style.left = curMoveX - shiftX + "px"
//         // console.log("Hello")

//         let dropCorX = curMoveX - shiftX,
//             dropCorY = curMoveY - shiftY

//         event.target.addEventListener('mouseup', elDrop.bind(null, dropCorX, dropCorY))
//     },
//     elDrag = function () {
//         boxY = event.target.getBoundingClientRect().top
//         boxX = event.target.getBoundingClientRect().left
//         event.target.style.zIndex = 2

//         let curDragX = event.clientX,
//             curDragY = event.clientY,
//             shiftX = curDragX - boxX,
//             shiftY = curDragY - boxY,
//             isDrop = 0

//         // console.log("Hello")
//         // console.log(isDrop)

//         event.target.addEventListener('mousemove', elMove.bind(null, shiftX, shiftY))
//     }

// box1.addEventListener('mousedown', elDrag.bind(event))
// box2.addEventListener('mousedown', elDrag.bind(event))

let box1 = document.querySelector(".box1"),
    box2 = document.querySelector(".box2"),
    boxY,
    boxX,
    curDragX,
    curDragY,
    shiftX,
    shiftY,
    curMoveX,
    curMoveY,
    dropCorX,
    dropCorY,
    elDrop = function () {
        // event.target.style.top = dropCorY + "px"
        // event.target.style.left = dropCorX + "px"
        event.target.style.zIndex = 1
        
        console.log("Drop")

        event.target.removeEventListener('mousemove', elMove)
        event.target.removeEventListener('mouseup', elDrop)
    },
    elMove = function () {
        curMoveX = event.clientX,
        curMoveY = event.clientY

        event.target.style.top = curMoveY - shiftY + "px"
        event.target.style.left = curMoveX - shiftX + "px"

        dropCorX = curMoveX - shiftX,
        dropCorY = curMoveY - shiftY

    },
    elDrag = function () {
        boxY = event.target.getBoundingClientRect().top
        boxX = event.target.getBoundingClientRect().left
        event.target.style.zIndex = 2
        
        curDragX = event.clientX,
        curDragY = event.clientY,
        shiftX = curDragX - boxX,
        shiftY = curDragY - boxY,
        
        event.target.addEventListener('mouseup', elDrop)
        event.target.addEventListener('mousemove', elMove)
    }

box1.addEventListener('mousedown', elDrag)
box2.addEventListener('mousedown', elDrag)
// box1.addEventListener('click', preventDefault)
// box2.addEventListener('click', preventDefault)