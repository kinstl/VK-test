const towerSelectNode = document.querySelector('.js-tower-select')
const floorSelectNode = document.querySelector('.js-floor-select')
const roomSelectNode = document.querySelector('.js-room-select')
const dateNode = document.querySelector('.js-date')
const timeFromNode = document.querySelector('.js-time-from')
const timeToNode = document.querySelector('.js-time-to')
const commentNode = document.querySelector('.js-comment')
const btnSendNode = document.querySelector('.js-btn-send')
const btnClearNode = document.querySelector('.js-btn-clear')

const currentDate = getCurrentDate()

dateNode.setAttribute('min', currentDate)

btnSendNode.addEventListener('click', (e) => {
    e.preventDefault()

    const tower = towerSelectNode.value
    const floor = floorSelectNode.value
    const room = roomSelectNode.value
    const date = dateNode.value.replace(/(\d*)-(\d*)-(\d*)/, '$3/$2/$1')
    const timeFrom = timeFromNode.value
    const timeTo = timeToNode.value
    const comment = commentNode.value

    const valuesToCheck = [tower, floor, room, date, timeFrom, timeTo]

    const isValuesEmpty = checkValues(valuesToCheck)
    const isTimeWrong = checkTime(timeFrom, timeTo)

    if (isValuesEmpty || isTimeWrong) {
        alert('Выберите корректные данные')
    } else {
        const formObj = {
            'Башня': tower,
            'Этаж': floor,
            'Переговорная': room,
            'Дата': date,
            'Время начала': timeFrom,
            'Время окончания': timeTo,
            'Комментарий': comment,
        }

        const formJSON = JSON.stringify(formObj)

        console.log(formJSON);
    }
})

btnClearNode.addEventListener('click', (e) => {
    e.preventDefault()

    towerSelectNode.value = ''
    floorSelectNode.value = ''
    roomSelectNode.value = ''
    dateNode.value = ''
    timeFromNode.value = ''
    timeToNode.value = ''
    commentNode.value = ''
})

function checkValues(valuesToCheck) {
    let isEmpty = false

    for (let i = 0; i < valuesToCheck.length; i++) {
        if (valuesToCheck[i] === '') {
            isEmpty = true
        }
    }

    return isEmpty
}

function checkTime(timeFrom, timeTo) {
    if (timeFrom === timeTo || timeFrom > timeTo) {
        return true
    }

    return false
}

function getCurrentDate() {
    const d = new Date()
    let curDay = d.getDate()
    let curMonth = d.getMonth() + 1
    const curYear = d.getFullYear()

    if (curMonth < 10) {
        curMonth = '0' + `${curMonth}`
    }

    if (curDay < 10) {
        curDay = '0' + `${curDay}`
    }

    const currentDate = `${curYear}-${curMonth}-${curDay}`

    return currentDate
}