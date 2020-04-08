const Board = require('firmata')

Board.requestPort( (err, port) =>{
    if(err){
        console.log(err)
        return
    }

    const board = new Board(port.comName)

    board.on('ready', () => {
        board.pinMode(13, board.MODES.OUTPUT)
        let ledOn = true
        setInterval( ()=>{
            if(ledOn ){
                console.log('ON')
                board.digitalWrite(13, board.HIGH)
            }else{
                console.log('OFF')
                board.digitalWrite(13, board.LOW)
            }

            ledOn = !ledOn
        }, 1000)
        
    })

})