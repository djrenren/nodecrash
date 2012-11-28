function getReadableDate(date){
  return date.toString();
}

module.exports = {
  today: function(){
    return getReadableDate(new Date());
  }
}