const main = document.querySelector(".main");
const error = document.querySelector(".error-con");
const check = document.querySelector(".check");
const total = document.querySelector(".total");
const AveTotal = document.querySelector(".ave-par-tot");
const radio = document.querySelectorAll(`input[name='radio-name']`);

document.querySelector(".main-con").classList.add("hidden");
document.querySelector(".gui-box").classList.add("hidden");
document.querySelector(".overlay").classList.add("hidden");

check.addEventListener("click", function () {
  let selectedValue;
  for (let i = 0; i < radio.length; i++) {
    console.log(radio);
    if (radio[i].checked) {
      selectedValue = radio[i].value;
      break;
    }
  }
  console.log(selectedValue);

  if (selectedValue === "school") {
    const findNum = document.querySelector(".find-input").value;
    if (findNum < 23 && findNum > 10) {
      for (let i = 0; i < findNum; i++) {
        document.querySelector(".main-con").classList.remove("hidden");
        document.querySelector(".find").classList.add("hidden");
        main.style.gridTemplateColumns = "1fr";
        main.style.gap = "2rem";
        main.style.width = "80%";

        const newInputNum1 = document.createElement("input");
        newInputNum1.type = "number";
        newInputNum1.placeholder = `Subject #${i + 1} Score`;
        newInputNum1.className = `sco-input sco${i}`;

        main.appendChild(newInputNum1);
      }

      document
        .querySelectorAll(".sco-input")
        .forEach((h) => (h.style.height = "6rem"));
      document
        .querySelectorAll(".sco-input")
        .forEach((h) => (h.style.fontSize = "22px"));

      const avetot = document.createElement("h1");
      avetot.className = "to aveto";
      main.appendChild(avetot);

      const resultBtn = document.createElement("button");
      resultBtn.type = "button";
      resultBtn.className = "result-btn btn";
      resultBtn.textContent = "Result";
      main.appendChild(resultBtn);

      const resetBtn = document.createElement("input");
      resetBtn.type = "reset";
      resetBtn.className = "reset-btn btn";
      main.appendChild(resetBtn);

      document
        .querySelectorAll(".btn")
        .forEach((h) => (h.style.height = "5.5rem"));
      document
        .querySelectorAll(".btn")
        .forEach((h) => (h.style.fontSize = "20px"));

      const h1cre = document.createElement("h1");
      h1cre.className = "creditError";
      error.appendChild(h1cre);

      const find = document.querySelector(".result-btn");
      find.addEventListener("click", function () {
        document.querySelector(".creditError").classList.add("hidden");
        document
          .querySelector(".reset-btn")
          .addEventListener("click", function () {
            document.querySelector(".creditError").classList.add("hidden");
            document.querySelector(".aveto").classList.add("visibi");
            document.querySelector(".ave").classList.add("hidden");
            document
              .querySelectorAll(".sco-input")
              .forEach((c) => (c.style.backgroundColor = "white"));
          });

        let findSco = 0;

        for (let i = 0; i < findNum; i++) {
          const testSco = document.querySelector(`.sco${i}`);
          if (testSco.value.trim() === "") {
            document.querySelector(".creditError").classList.remove("hidden");
            document.querySelector(".creditError").innerHTML =
              "To calculate the result, make sure you have inserted all the subject's score.";
            testSco.style.backgroundColor = "red";
            findSco = 0;
            break;
          } else {
            if (testSco.value < 16 || testSco.value > 100) {
              document.querySelector(".creditError").classList.remove("hidden");
              document.querySelector(".creditError").innerHTML =
                "Subject score must be equal to or between 16 & 100.";
              findSco = 0;
              testSco.style.backgroundColor = "red";
              break;
            } else {
              testSco.style.backgroundColor = "white";
              findSco += Number(testSco.value);
            }
          }
        }
        document.querySelector(".aveto").classList.remove("visibi");
        document.querySelector(".aveto").style.fontSize = "24px";
        document.querySelector(".aveto").innerHTML = `Total: ${findSco}`;
        let average = findSco / findNum;
        document.querySelector(".ave").classList.remove("hidden");
        document.querySelector(".ave").innerHTML = `Average: ${average}`;
      });
    } else
      document.querySelector(".sub-error").innerHTML =
        "For school, the total number of subjects must be between 10 & 23.";
  }

  if (selectedValue === "university") {
    const findNum = document.querySelector(".find-input").value;

    if (findNum < 15 && findNum > 4) {
      for (let i = 0; i < findNum; i++) {
        document.querySelector(".main-con").classList.remove("hidden");
        document.querySelector(".find").classList.add("hidden");

        const newInputNum1 = document.createElement("input");
        newInputNum1.type = "number";
        newInputNum1.placeholder = `Subject #${i + 1} Score`;
        newInputNum1.className = `sco-input sco${i}`;
        main.appendChild(newInputNum1);

        const newInputNum2 = document.createElement("input");
        newInputNum2.type = "number";
        newInputNum2.placeholder = `Subject #${i + 1} Credit`;
        newInputNum2.className = `cre-input cre${i}`;
        main.appendChild(newInputNum2);

        const total = document.createElement("h1");
        total.className = `t tot${i}`;
        main.appendChild(total);
      }

      const avetot = document.createElement("h1");
      avetot.className = "to avetot";
      main.appendChild(avetot);

      const partot = document.createElement("h1");
      partot.className = "partot to";
      main.appendChild(partot);

      const avepartot = document.createElement("h1");
      avepartot.className = "avepartot to";
      main.appendChild(avepartot);

      const resultBtn = document.createElement("button");
      resultBtn.type = "button";
      resultBtn.className = "result-btn btn";
      resultBtn.textContent = "Result";
      main.appendChild(resultBtn);

      const resetBtn = document.createElement("input");
      resetBtn.type = "reset";
      resetBtn.className = "reset-btn btn";
      main.appendChild(resetBtn);

      const h1cre = document.createElement("h1");
      h1cre.className = "creditError";
      error.appendChild(h1cre);

      const find = document.querySelector(".result-btn");
      find.addEventListener("click", function () {
        document.querySelector(".creditError").classList.add("hidden");
        document
          .querySelector(".reset-btn")
          .addEventListener("click", function () {
            document.querySelector(".creditError").classList.add("hidden");
            document.querySelector(".ave").classList.add("hidden");
            document.querySelector(".par").classList.add("hidden");

            document
              .querySelectorAll(".t")
              .forEach((v) => v.classList.add("visibi"));
            document
              .querySelectorAll(".to")
              .forEach((v) => v.classList.add("visibi"));
            document
              .querySelectorAll(".sco-input")
              .forEach((c) => (c.style.backgroundColor = "white"));
            document
              .querySelectorAll(".cre-input")
              .forEach((c) => (c.style.backgroundColor = "white"));
          });

        let findSco = 0;
        let findCre = 0;
        let cre_sco = 0;

        for (let i = 0; i < findNum; i++) {
          const testSco = document.querySelector(`.sco${i}`);
          const testCre = document.querySelector(`.cre${i}`);
          if (testSco.value.trim() === "" || testCre.value.trim() === "") {
            document.querySelector(".creditError").classList.remove("hidden");
            document.querySelector(".creditError").innerHTML =
              "To calculate the result, make sure you have inserted all the subject's score/credit.";
            findSco = 0;
            findCre = 0;
            cre_sco = 0;
            console.log("lkjdsflkj");
            document
              .querySelectorAll(".t")
              .forEach((v) => v.classList.add("visibi"));
            document
              .querySelectorAll(".to")
              .forEach((v) => v.classList.add("visibi"));
            testSco.style.backgroundColor = "red";
            testCre.style.backgroundColor = "red";
            break;
          } else {
            if (
              testSco.value < 55 ||
              testSco.value > 100 ||
              testCre.value < 1 ||
              testCre.value > 4
            ) {
              document.querySelector(".creditError").classList.remove("hidden");
              document.querySelector(".creditError").innerHTML =
                "Subject score must be equal to or between 55 & 100 and the number of credits must be less than 5 (1 to 4).";
              findSco = 0;
              findCre = 0;
              cre_sco = 0;
              document
                .querySelectorAll(".t")
                .forEach((v) => v.classList.add("visibi"));
              document
                .querySelectorAll(".to")
                .forEach((v) => v.classList.add("visibi"));
              testSco.style.backgroundColor = "red";
              testCre.style.backgroundColor = "red";
              break;
            } else {
              let credit = Number(testCre.value) * Number(testSco.value);

              document.querySelector(`.tot${i}`).innerHTML = credit;
              testSco.style.backgroundColor = "white";
              testCre.style.backgroundColor = "white";

              cre_sco += credit;
              findCre += Number(testCre.value);
              findSco += Number(testSco.value);
              document
                .querySelectorAll(".t")
                .forEach((v) => v.classList.remove("visibi"));
              document
                .querySelectorAll(".to")
                .forEach((v) => v.classList.remove("visibi"));
            }
          }
        }
        document.querySelector(".avetot").innerHTML = findSco;
        document.querySelector(".partot").innerHTML = findCre;
        document.querySelector(".avepartot").innerHTML = cre_sco;

        let average = findSco / findNum;
        let percentage = cre_sco / findCre;
        document.querySelector(".ave").classList.remove("hidden");
        document.querySelector(".par").classList.remove("hidden");
        document.querySelector(".ave").innerHTML = `Average: ${average}`;
        document.querySelector(".par").innerHTML = `Percentage: ${percentage}`;
      });
    } else
      document.querySelector(".sub-error").innerHTML =
        "For university, the total number of subjects must be between 4 & 15.";
  }
});

document.querySelector(".about-btn").addEventListener("click", function () {
  document.querySelector(".gui-box").classList.remove("hidden");
  document.querySelector(".gui-box").scrollIntoView({ behavior: "smooth" });
  document.querySelector(".overlay").classList.remove("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".gui-box").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
