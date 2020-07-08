var util = require('util');
var ee = require('events');

var db_data = [{
    id: 1,
    name: 'Kasper N.V.',
    bday: '2000-06-04'
  },
  {
    id: 2,
    name: 'Chistyakova J.A',
    bday: '1998-07-10'
  },
  {
    id: 3,
    name: 'Suboch A.A.',
    bday: '2002-03-07'
  }
];

function DB() {
  this.get = () => {
    return db_data;
  };
  this.post = r => {
    db_data.push(r);
  };
  this.delete = r => {
    let indexOfObj = db_data.findIndex(item => item.id == r);
    let data = db_data[indexOfObj];
    db_data.splice(indexOfObj, 1);
    console.log(indexOfObj);
    return data;
  };
  this.put = r => {
    let indexOfObj = db_data.findIndex(item => item.id == r.id);
    return db_data.splice(indexOfObj, 1, r);
  }
}

util.inherits(DB, ee.EventEmitter);

exports.DB = DB;