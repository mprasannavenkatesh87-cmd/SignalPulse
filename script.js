function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMetrics() {
  const download = random(5, 80);
  const upload = random(2, 40);
  const latency = random(20, 120);
  const stability = random(70, 99);

  document.getElementById("download").textContent = download;
  document.getElementById("upload").textContent = upload;
  document.getElementById("latency").textContent = latency;
  document.getElementById("stability").textContent = stability;

  document.getElementById("bar1").style.height = download + "px";
  document.getElementById("bar2").style.height = upload + "px";
  document.getElementById("bar3").style.height = (120 - latency) + "px";
  document.getElementById("bar4").style.height = stability + "px";
}

setInterval(updateMetrics, 2000);
updateMetrics();
