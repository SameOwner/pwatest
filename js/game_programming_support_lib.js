var gpsl=gpsl||{};

gpsl.$=function(id){
  return document.getElementById(id);
};
gpsl.randomValue=function(num){
  return Math.floor(Math.random()*num);
}
