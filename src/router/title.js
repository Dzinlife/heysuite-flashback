const hotels = require("../store/hotels").reduce( (prev, next) => {
  prev[next.id] = next
  return prev
}, {})

module.exports = function (path){
  if( path.match(/\/d_\w+/) ){
    const hotel_id = path.split("_")[1]

    try{
      var title = `${hotels[hotel_id].name} - HeySuite`
    }catch(e){
      var title = "HeySuite"
    }

    return title
  }else if( path.match(/\/about\/?/)){
    return "关于我们 - HeySuite"
  }else{
    return "HeySuite"
  }
}
