const diamondPrices = {
  "ff_ori": {"25":5,"100":5,"310":5,"520":5,"1060":5,"2180":5,"5600":5,"11500":5},
  "ff_max": {"25":5,"100":5,"310":5,"520":5,"1060":5,"2180":5,"5600":5,"11500":5}
};

function updatePrice(game, diamond, newPrice){
  if(diamondPrices[game]){
    diamondPrices[game][diamond] = newPrice;
    alert('Harga berhasil diupdate');
    console.log(diamondPrices);
  }
}