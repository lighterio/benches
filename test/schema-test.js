describe('Schema validation', function () {

  this.sampleSize = 1e3;
  this.minimumSamples = 1e3;

  var schema = {
    user: {
      birthDate: 'unknown'
    },
    device: {
      os: 'unknown'
    }
  };

  function getDefaultSchema(data, schema) {
    if (data) {
      for (var property in schema) {
        var dataValue = data[property];
        var schemaValue = schema[property];
        if (dataValue === undefined) {
          data[property] = schemaValue;
        }
        else if (typeof schemaValue == 'object') {
          getDefaultSchema(dataValue, schemaValue);
        }
      }
    }
    else {
      data = schema;
    }
    return data;
  }

  function getZeroedSchema(data) {
    data = data || 0;
    var user = data.user = data.user || 0;
    user.birthDate = user.birthDate || 'unknown';
    return data;
  }

  function getRefSchema(data) {
    if (data) {
      var user = data.user;
      if (user) {
        user.birthDate = user.birthDate || 'unknown';
      }
      else {
        data.user = schema.user;
      }
    }
    else {
      data = schema;
    }
    return data;
  }

  bench('for undefined data', function () {
    it('with a schema', function () {
      var data = undefined;
      data = getDefaultSchema(data, schema);
    });
    it('with zeros', function () {
      var data = undefined;
      data = getZeroedSchema(data);
    });
    it('with refs', function () {
      var data = undefined;
      data = getRefSchema(data);
    });
  });

  bench('for object data', function () {
    it('with a schema', function () {
      var data = {};
      data = getDefaultSchema(data, schema);
    });
    it('with zeros', function () {
      var data = {};
      data = getZeroedSchema(data);
    });
    it('with refs', function () {
      var data = {};
      data = getRefSchema(data);
    });
  });

  bench('for incomplete data', function () {
    it('with a schema', function () {
      var data = {user: {}, device: {}};
      data = getDefaultSchema(data, schema);
    });
    it('with zeros', function () {
      var data = {user: {}, device: {}};
      data = getZeroedSchema(data);
    });
    it('with refs', function () {
      var data = {user: {}, device: {}};
      data = getRefSchema(data);
    });
  });

  bench('for strange data', function () {
    it('with a schema', function () {
      var data = {user: 'no one', device: 0};
      data = getDefaultSchema(data, schema);
    });
    it('with zeros', function () {
      var data = {user: 'no one', device: 0};
      data = getZeroedSchema(data);
    });
    it('with refs', function () {
      var data = {user: 'no one', device: 0};
      data = getRefSchema(data);
    });
  });

});
