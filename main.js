let products = [
  {
    brand: "DELL",
    cpu: {
      brand: "INTEL",
      name: "i5",
      generation: 10,
    },
    os: "Windows",
    ram: 8,
    ssd: {
      size: 220,
      unit: "GB",
    },
    gpu: "NVIDIA",
    screenSize: {
      size: 15,
      unit: "inch",
    },
    price: 450000,
    weight: {
      weight: 4,
      unit: "kg",
    },
    model: "KO",
    deliveryDate: 5,
    isPrimeEligible: true,
  },
  {
    brand: "ASUS",
    cpu: {
      brand: "INTEL",
      name: "i7",
      generation: 10,
    },
    os: "Windows",
    ram: 4,
    ssd: {
      size: 520,
      unit: "GB",
    },
    gpu: "GTX",
    screenSize: {
      size: 18,
      unit: "inch",
    },
    price: 650000,
    weight: {
      weight: 5,
      unit: "kg",
    },
    model: "LM",
    deliveryDate: 5,
    isPrimeEligible: true,
  },
  {
    brand: "SONY",
    cpu: {
      brand: "INTEL",
      name: "i6",
      generation: 9,
    },
    os: "Mac",
    ram: 8,
    ssd: {
      size: 760,
      unit: "GB",
    },
    gpu: "NVIDIA",
    screenSize: {
      size: 18,
      unit: "inch",
    },
    price: 720000,
    weight: {
      weight: 6,
      unit: "kg",
    },
    model: "PE",
    deliveryDate: 5,
    isPrimeEligible: true,
  },
];


let cont = document.querySelector(".class-cont");
let container = document.querySelector(".container");

let div1 = document.createElement("div");
let lbl1 = document.createElement("label");

lbl1.textContent = "DELL";
lbl1.htmlFor = "bn";

let radio1 = document.createElement("input");
radio1.type = "radio";
radio1.className = "radio";
radio1.name = "name";
radio1.value = "DELL";
radio1.id = "bn1";

div1.append(radio1);
div1.append(lbl1);



let div2 = document.createElement("div");
let lbl2 = document.createElement("label");

lbl2.textContent = "ASUS";
lbl2.htmlFor = "bn2";

let radio2 = document.createElement("input");
radio2.type = "radio";
radio2.className = "radio";
radio2.name = "name";
radio2.value = "ASUS";
radio2.id = "bn2";

div2.append(radio2);
div2.append(lbl2);



let div3 = document.createElement("div");
let lbl3 = document.createElement("label");

lbl3.textContent = "SONY";
lbl3.htmlFor = "bn3";

let radio3 = document.createElement("input");
radio3.type = "radio";
radio3.className = "radio";
radio3.name = "name";
radio3.value = "SONY";
radio3.id = "bn3";

div3.append(radio3);
div3.append(lbl3);

cont.appendChild(div1);
cont.appendChild(div2);
cont.appendChild(div3);



function createWrapper(primaryClassName, primaryText, secondaryElementsArray) {
  let primaryElement = document.createElement("span");
  primaryElement.textContent = primaryText;
  primaryElement.className = primaryClassName;

  secondaryElementsArray.forEach((secondaryElementdata) => {
    let secondaryElement = document.createElement("span");
    secondaryElement.textContent = secondaryElementdata.textContent;
    secondaryElement.className = secondaryElementdata.className;
    primaryElement.append(secondaryElement);
  });

  let eleWrapper = document.createElement("div");
  eleWrapper.append(primaryElement);

  return eleWrapper;
}

products.forEach((e) => {
  let secondaryBrandElementsArray = [
    {
      className: "brandName",
      textContent: e.brand,
    },
  ];

  let brandWrapper = createWrapper(
    "brand-id",
    "Brand: ",
    secondaryBrandElementsArray
  );

  // console.log(brandWrapper);

  let secondaryCpuElementsArray = [
    {
      className: "cpuName",
      textContent: e.cpu.brand,
    },
  ];

  let cpuWrapper = createWrapper("cpu-id", "CPU: ", secondaryCpuElementsArray);

  // console.log(cpuWrapper);

  let secondaryOsElementsArray = [
    {
      className: "osName",
      textContent: e.os,
    },
  ];

  let osWrapper = createWrapper("os-id", "OS: ", secondaryOsElementsArray);

  // console.log(osWrapper);

  let secondaryRamElementsArray = [
    {
      className: "ramName",
      textContent: e.ram,
    },
  ];

  let ramWrapper = createWrapper("ram-id", "RAM: ", secondaryRamElementsArray);

  // console.log(ramWrapper);

  let secondarySsdElementsArray = [
    {
      className: "ssdName",
      textContent: e.ssd.size,
    },
    {
      className: "ssdUnit",
      textContent: e.ssd.unit,
    },
  ];

  let ssdWrapper = createWrapper("ssd-id", "SSD: ", secondarySsdElementsArray);

  // console.log(ssdWrapper);

  let secondaryGElementsArray = [
    {
      className: "graphicsName",
      textContent: e.gpu,
    },
  ];

  let gWrapper = createWrapper(
    "graphics-id",
    "Graphics: ",
    secondaryGElementsArray
  );

  // console.log(gWrapper);

  let secondaryScrszElementsArray = [
    {
      className: "scr-szName",
      textContent: e.screenSize.size,
    },
    {
      className: "scr-sz",
      textContent: e.screenSize.unit,
    },
  ];

  let scrszWrapper = createWrapper(
    "scrsz-id",
    "Screen Size: ",
    secondaryScrszElementsArray
  );

  // console.log(scrszWrapper);

  let secondaryPriceElementsArray = [
    {
      className: "scr-szName",
      textContent: e.price,
    },
  ];

  let priceWrapper = createWrapper(
    "price-id",
    "Price: ",
    secondaryPriceElementsArray
  );

  // console.log(priceWrapper);

  let secondaryweightElementsArray = [
    {
      className: "weightNumber",
      textContent: e.weight.weight,
    },
    {
      className: "weightUnit",
      textContent: e.weight.unit,
    },
  ];

  let weightWrapper = createWrapper(
    "weight-id",
    "Weight: ",
    secondaryweightElementsArray
  );

  // console.log(weightWrapper);

  let secondarymodelElementsArray = [
    {
      className: "modelName",
      textContent: e.model,
    },
  ];

  let modelWrapper = createWrapper(
    "model-id",
    "Model: ",
    secondarymodelElementsArray
  );

  // console.log(modelWrapper);

  let secondarydeliveryElementsArray = [
    {
      className: "deliveryDate",
      textContent: e.deliveryDate,
    },
  ];

  let deliveryWrapper = createWrapper(
    "deliveryDate-id",
    "Delivery Date: ",
    secondarydeliveryElementsArray
  );

  // console.log(deliveryWrapper);

  let secondaryPrimeElementsArray = [
    {
      className: "primeName",
      textContent: e.isPrimeEligible,
    },
  ];

  let primeWrapper = createWrapper(
    "prime-id",
    "Prime: ",
    secondaryPrimeElementsArray
  );

  // console.log(primeWrapper);
//   console.log(
//     "-----------------------------------------------------------------"
//   );
  let inWrapper = document.createElement("div");
  inWrapper.className = "in-Wrap"
  inWrapper.append(brandWrapper);
  inWrapper.append(cpuWrapper);
  inWrapper.append(osWrapper);
  inWrapper.append(ramWrapper);
  inWrapper.append(ssdWrapper);
  inWrapper.append(gWrapper);
  inWrapper.append(scrszWrapper);
  inWrapper.append(priceWrapper);
  inWrapper.append(weightWrapper);
  inWrapper.append(modelWrapper);
  inWrapper.append(deliveryWrapper);
  inWrapper.append(primeWrapper);
//   console.log(
//     "-----------------------------------------------------------------"
//   );
//   console.log(inWrapper);
//   console.log(
//     "-----------------------------------------------------------------"
//   );



  let radios = document.querySelectorAll(".radio")

radios.forEach((radio)=>{
    radio.addEventListener("click",function(){
        
            if(e.brand == radio.value){
                console.log(inWrapper);

                container.innerHTML = inWrapper.outerHTML

            }
        
    })
    
})
});






