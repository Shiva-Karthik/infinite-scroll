let items = 25;
let container = document.querySelector(".container");
for (var i = 1; i <= items; i++) {
  const htmlData = `
        <h1>Masai Student ${i} </h1>
    `;
  container.innerHTML += htmlData;
}

window.addEventListener("scroll", () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        
        for (var i = items+1; i <= items+25; i++) {
          const htmlData = `
                <h1>Masai Student ${i} </h1>
            `;
          container.innerHTML += htmlData;
        }
        items+=25;
  }
});
