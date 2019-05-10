# BME280

makecode BME280 Digital Pressure and Humidity Sensor package for micro:bit  

![](https://github.com/DoraLC/pxt-BME280/blob/master/bme280.jpg)

## I2C Address  

- 0x76/0x77  

## API

- function pressure()  
get pressure in pa  

- function temperature()  
return temperature in Celsius.

- function humidity()
return humidity in percent

- function PowerOn()
turn on BME280.

- function PowerOff()  
goto sleep mode  

- function Address(addr: BME280_I2C_ADDRESS)  
set BME280's I2C address. addr may be:  
  - BME280_I2C_ADDRESS.ADDR_0x76
  - BME280_I2C_ADDRESS.ADDR_0x77


## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets

* for PXT/microbit
