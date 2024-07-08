function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

const createTemplat = (itemObj) => {
  return `<li><span>${itemObj.title}</span> ${itemObj.subTitle}  ${
    itemObj.icon ? itemObj.icon : ""
  }</li>`;
};

docReady(() => {
  const myTitle = "Demostage !!";

  const languageList = ["th", "en"];
  const myObj = { th: { name: "น๊อต" }, en: { name: "Knot" } };
  const currentLanguage = "en";
  //   const currentLanguage = "en";
  console.log(myObj[currentLanguage].name);

  //## Deconstruct ##
  //Array
  const carArr = [
    ["honda", "ford", "isuzu"],
    ["cvt", "cvt", "manual"],
  ];
  const [brand, transmision] = carArr;
  console.log("list of car brand : ", brand);

  //Object
  const carObj = {
    brandArr: ["honda", "ford", "isuzu"],
    transmisionArr: ["cvt", "cvt", "manual"],
    color: ["black", "white"],
  };
  const { transmisionArr, brandArr, color } = carObj;
  console.log("Obj deconstruct : ", brandArr);

  ////////////////////////////////////////////////////
  const myItemList = [
    {
      title: "Tabula Rasa",
      subTitle: "Simple Robe",
      icon: `<i class="fa fa-envelope"></i>`,
    },
    { title: "Starkonja's Head", subTitle: "Silken Hood" },
    { title: "Inpulsa's Broken Heart", subTitle: "Sadist Garb" },
    { title: "Wilma's Requital", subTitle: "Solaris Circlet" },
    { title: "Abhorrent Interrogation", subTitle: "Ambush Mitts" },
  ];

  const titleEl = document.getElementById("sectionTitel");
  const listItemEl = document.getElementById("ListItem");

  titleEl.innerHTML = myTitle;

  listItemEl.innerHTML = myItemList
    .map((eachItem) => {
      const title = eachItem.title;
      return createTemplat({ ...eachItem, title: title + " ---" });
    })
    .join("");
});
