const counters = document.querySelectorAll(".percentSpan");
const speed = 10;

counters.forEach((counter) => {
  const updatecount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerHTML;
    if (target < 10) {
      counter.innerHTML++;
      counter.innerHTML += "%";
    } else {
      const inc = Math.trunc(target / speed);

      if (count < target) {
        counter.innerHTML = count + inc;

        setTimeout(updatecount, 120);
      } else {
        count.innerHTML = target;
        counter.innerHTML += "%";
      }
    }
  };
  updatecount();
});
