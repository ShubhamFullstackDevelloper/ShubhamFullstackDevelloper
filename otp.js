function genarateOpt( length){
    let otp='';
    for(let i=0; i<length;  i++){
        opt+=Math.floor(Math.random()*10).toString();
    }
    return otp;

}
console. genarateOptlog((4));