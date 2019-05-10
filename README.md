# BME280

makecode BME280 Digital Pressure and Humidity Sensor package for micro:bit  

![](https://github.com/DoraLC/pxt-BME280/blob/master/bme280.jpg)

## I2C Address  

- 0x76/0x77  

## API

- function readingdata(reading: data)  
get pressure/ temperature/ humidity in pa/ Celsius/ percentage repectively

- function PowerOn(on: boolean)
turn on or off BME280.

- function Address(addr: BME280_I2C_ADDRESS)  
set BME280's I2C address. addr may be:  
  - BME280_I2C_ADDRESS.ADDR_0x76
  - BME280_I2C_ADDRESS.ADDR_0x77


## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit
