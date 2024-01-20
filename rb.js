(function () {
function updateLocalStorage(newValue) {
  const key = 'coach_credit';
  let found = false;

  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    
    if (storageKey && storageKey.startsWith('RetroBowl.') && storageKey.endsWith('.savedata.ini')) {
      let savedata = localStorage.getItem(storageKey);
      
      if (savedata) {
        let lines = savedata.split('\n');
        
        for (let j = 0; j < lines.length; j++) {
          if (lines[j].startsWith(key + '=')) {
            lines[j] = key + '=' + `"${newValue}"`;
            found = true;
            break;
          }
        }
        
        if (found) {
          savedata = lines.join('\n');
          localStorage.setItem(storageKey, savedata);
          break;
        }
      }
    }
  }

  if (found) {
    window.location.reload();
  } else {
    alert('Key not found');
  }
}

const desiredTokenAmount = prompt('Enter the desired token amount:');
if (desiredTokenAmount !== null) {
  updateLocalStorage(desiredTokenAmount);
}
})();
