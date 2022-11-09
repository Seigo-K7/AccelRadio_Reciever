basic.showIcon(IconNames.Yes)
music.playMelody("C6 C6 c6", 200)
radio.setGroup(1)
// led.plot_bar_graph(receivedNumber, 1024)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    //  serial.write_value("Acc", receivedNumber)
    serial.writeNumber(receivedNumber)
    serial.writeString("\n")
})
