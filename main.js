const userRole = 'owner'; // owner, assistant, customer

if(userRole === 'owner'){
  document.getElementById('ownerMenuLink').style.display = 'inline';
}

function submitTopup(playerId, game, amount, payment){
  if(game.toLowerCase() !== 'tiktok' && game.toLowerCase() !== 'tng' && !playerId){
    alert('Player ID wajib diisi!');
    return false;
  }
  console.log('Player ID:', playerId);
  console.log('Game:', game);
  console.log('Jumlah Topup:', amount);
  console.log('Payment:', payment);
  alert('Topup request berhasil dikirim.');
  return true;
}