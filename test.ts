basic.forever(function () {
    serial.writeValue("P", BME280.readingdata(data.pressure))
    serial.writeValue("T", BME280.readingdata(data.temperature))
    serial.writeValue("H", BME280.readingdata(data.humidity))
    basic.pause(1000)
})
