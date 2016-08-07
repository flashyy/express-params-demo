let express =require ('express');

let app = express();

app.get('/zipcodetobarcode/:zipcode',function(req,res) {
    let zipcode = req.params.zipcode;
    // console.log('zipcode:' + zipcode);
    res.send(zipcode);
});

app.listen(3000,function() {
    console.log('listening to 3000');
});