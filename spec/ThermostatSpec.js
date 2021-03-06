describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('starting settings', function() {
    it('should begin at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('should have power saving mode on', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });

  describe('maximum temperature', function() {
    it('is 25 degrees with PSM on', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 32 degrees with PSM off', function() {
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    })
  });


  describe('increasing temperature', function() {
    describe('PSM off', function() {
      beforeEach(function() {
        thermostat.powerSavingMode = false;
      });

      it('increases if < 32 degrees', function() {
        thermostat.temperature = 25;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(26);
      });

      it('does not increase if >= 32 degrees', function() {
        thermostat.temperature = 32;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(32);
      });

    });

    describe('PSM on', function() {
      it('increases if < 25 degrees', function() {
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(21);
      });

      it('does not increase if >= 25 degrees', function() {
        thermostat.temperature = 25;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(25);
      });
    });
  });
  
  describe('decreasing temperature', function() {
    it('decreases if > 10 degrees', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('does not decrease if <= 10 degrees', function() {
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });
  });

  describe('resetting the temperature', function() {
    it('can be reset to 20 degrees', function() {
      thermostat.temperature = 24;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function() {
    it('is efficient if < 18 degrees', function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('efficient');
    });

    it('is normal if >= 18 and < 25 degrees', function() {
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual('normal');
    });

    it('is inefficient if > 25 degrees', function() {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('inefficient');
    });
  });
});
