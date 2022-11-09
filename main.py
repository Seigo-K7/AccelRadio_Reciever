basic.show_icon(IconNames.YES)
music.play_melody("C6 C6 c6", 200)
radio.set_group(1)

def on_received_number(receivedNumber):
    
    #serial.write_value("Acc", receivedNumber)

    serial.write_number(receivedNumber)
    led.plot_bar_graph(receivedNumber, 1024)
radio.on_received_number(on_received_number)

