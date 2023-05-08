const towerSelectNode = document.querySelector('.js-tower-select')
const floorSelectNode = document.querySelector('.js-floor-select')
const roomSelectNode = document.querySelector('.js-room-select')
const dateNode = document.querySelector('.js-date')
const timeFromNode = document.querySelector('.js-time-from')
const timeToNode = document.querySelector('.js-time-to')
const commentNode = document.querySelector('.js-comment')
const btnSendNode = document.querySelector('.js-btn-send')
const btnClearNode = document.querySelector('.js-btn-clear')

new AirDatepicker(dateNode, {
    selectedDates: [new Date()],
    autoClose: true,
    minDate: new Date(),
})

btnSendNode.addEventListener('click', (e) => {
    e.preventDefault()

    const tower = towerSelectNode.value
    const floor = floorSelectNode.value
    const room = roomSelectNode.value
    const date = dateNode.value
    const timeFrom = timeFromNode.value
    const timeTo = timeToNode.value
    const comment = commentNode.value

    const isValuesWrong = checkWrongValues(tower, floor, room, date, timeFrom, timeTo)

    if (isValuesWrong) {
        return null
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

    towerSelectNode.classList.remove('item__select_error')
    floorSelectNode.classList.remove('item__select_error')
    roomSelectNode.classList.remove('item__select_error')
    dateNode.classList.remove('item__select_error')
    timeFromNode.classList.remove('item__select_error')
    timeToNode.classList.remove('item__select_error')

    towerSelectNode.value = ''
    floorSelectNode.value = ''
    roomSelectNode.value = ''
    dateNode.value = ''
    timeFromNode.value = ''
    timeToNode.value = ''
    commentNode.value = ''
})

function checkWrongValues(tower, floor, room, date, timeFrom, timeTo) {
    towerSelectNode.classList.remove('item__select_error')
    floorSelectNode.classList.remove('item__select_error')
    roomSelectNode.classList.remove('item__select_error')
    dateNode.classList.remove('item__select_error')
    timeFromNode.classList.remove('item__select_error')
    timeToNode.classList.remove('item__select_error')

    if (tower === '') {
        towerSelectNode.classList.add('item__select_error')

        alert('Выберите башню')

        return true
    }

    if (floor === '') {
        floorSelectNode.classList.add('item__select_error')

        alert('Выберите этаж')

        return true
    }

    if (room === '') {
        roomSelectNode.classList.add('item__select_error')

        alert('Выберите номер переговорной')

        return true
    }

    if (date === '') {
        dateNode.classList.add('item__select_error')
        alert('Выберите дату')

        return true
    }

    if (timeFrom >= timeTo || timeFrom === '') {
        timeFromNode.classList.add('item__select_error')
        timeToNode.classList.add('item__select_error')

        alert('Выберите корректное время')

        return true
    }
}