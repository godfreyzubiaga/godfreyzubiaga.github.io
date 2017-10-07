window.onload = () => {
  const age = document.getElementById('age');
  age.innerHTML = `${getAge(new Date(1997, 9, 6))}`;
}

function getAge(d1, d2) {
  d2 = d2 || new Date();
  let diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}