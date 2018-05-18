

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

/* html 페이지 연결 */
app.use(express.static(__dirname + '/public'));

/* parser 이용 */
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

/* 포트 설정 */
app.listen(1124 , function(){
  console.log('Connted 1124 port!')
});

/* DB연결 */
mongoose.connect('mongodb://localhost/realEstate_proto');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function callback() {
    console.log('connected!');
});

/* 매도인 계약서 저장 */
app.post('/contract_register', function(req ,res){
  db.collection('house_list').insert(req.body);
  console.log('success insert');
  res.send('success');
});

/* 계약서 내용 블러오기 */
app.get('/contractInfo' , function(req ,res){
  // db.house_list.find({"contractID": "jenny's contract"});
res.send('hello world');
  // db.collection('house_list').find();
});
