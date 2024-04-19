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
        curMoveX = event.clientX
        curMoveY = event.clientY

        event.target.style.top = curMoveY - shiftY + "px"
        event.target.style.left = curMoveX - shiftX + "px"

        dropCorX = curMoveX - shiftX
        dropCorY = curMoveY - shiftY

    },
    elDrag = function () {
        boxY = event.target.getBoundingClientRect().top
        boxX = event.target.getBoundingClientRect().left
        event.target.style.zIndex = 2
        
        curDragX = event.clientX
        curDragY = event.clientY
        shiftX = curDragX - boxX
        shiftY = curDragY - boxY
        
        event.target.addEventListener('mouseup', elDrop)
        event.target.addEventListener('mousemove', elMove)
    }

box1.addEventListener('mousedown', elDrag)
box2.addEventListener('mousedown', elDrag)