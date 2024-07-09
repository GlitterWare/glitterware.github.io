var GW_EMAIL = 'glitteware@proton.me';

function copyGwEmail() {
  navigator.clipboard.writeText(GW_EMAIL).then(function() {
    alert('Email copied.');
  });
}
