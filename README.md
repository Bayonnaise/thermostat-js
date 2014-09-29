#Thermostat [![Code Climate](https://codeclimate.com/github/Bayonnaise/thermostat-js/badges/gpa.svg)](https://codeclimate.com/github/Bayonnaise/thermostat-js)

A short refresher exercise on the basics of JavaScript and JQuery. Build a simple web-based thermometer application that lets you adjust the temperature within set boundaries.

###Specifications

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting the reset button
- The thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
- After every temperature change, the thermostat makes a POST request to localhost:4567/temperature_change, with the new temperature

###How to run

```shell
git clone https://github.com/Bayonnaise/thermostat-js.git
cd thermostat-js
open index.html
```

###How to run tests

```shell
git clone https://github.com/Bayonnaise/thermostat-js.git
cd thermostat-js
open SpecRunner.html
```