var GW_EMAIL = 'glitterware@proton.me';

function copyGwEmail() {
  navigator.clipboard.writeText(GW_EMAIL).then(function() {
    alert('Email copied.');
  });
}
