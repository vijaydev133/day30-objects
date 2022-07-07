let products = [
    {
        brand: "Dell",
        cpu: {
            brand: "INTEL",
            name: "i5",
            generation: 10
        },
        os: "Windows",
        ram: 8,
        ssd: {
            size: 220,
            unit: "GB"
        },
        gpu: "NVIDIA",
        screenSize: {
            size: 15,
            unit: "inch"
        },
        price: 450000,
        weight: {
            weight: 4,
            unit: "kg"
        },
        model: "KO",
        deliveryDate: 5,
        isPrimeEligible: true
    },
    {
        brand: "ASUS",
        cpu: {
            brand: "INTEL",
            name: "i5",
            generation: 10
        },
        os: "Windows",
        ram: 8,
        ssd: {
            size: 220,
            unit: "GB"
        },
        gpu: "NVIDIA",
        screenSize: {
            size: 15,
            unit: "inch"
        },
        price: 450000,
        weight: {
            weight: 4,
            unit: "kg"
        },
        model: "KO",
        deliveryDate: 5,
        isPrimeEligible: true
    },
    {
        brand: "Dell",
        cpu: {
            brand: "INTEL",
            name: "i5",
            generation: 10
        },
        os: "Windows",
        ram: 8,
        ssd: {
            size: 220,
            unit: "GB"
        },
        gpu: "NVIDIA",
        screenSize: {
            size: 15,
            unit: "inch"
        },
        price: 450000,
        weight: {
            weight: 4,
            unit: "kg"
        },
        model: "KO",
        deliveryDate: 5,
        isPrimeEligible: true
    }
]
// let mainWrapper = document.getElementsByClassName("class-cont");


function createWrapper(primaryClassName,primaryText,secondaryElementsArray){
    let primaryElement = document.createElement("span")
primaryElement.textContent = primaryText
primaryElement.className = primaryClassName

secondaryElementsArray.forEach(secondaryElementdata=>{
    let secondaryElement = document.createElement("span")
secondaryElement.textContent = secondaryElementdata.textContent
secondaryElement.className = secondaryElementdata.className
primaryElement.append(secondaryElement);
})





let eleWrapper = document.createElement("div")
eleWrapper.append(primaryElement);

return eleWrapper
}



products.forEach(e=>{

    let secondaryBrandElementsArray = [
        {
            "className" : "brandName",
            "textContent" : e.brand
        }
    ]
    
    let brandWrapper = createWrapper("brand-id","Brand: ",secondaryBrandElementsArray)

    // console.log(brandWrapper);

    let secondaryCpuElementsArray = [
        {
            "className" : "cpuName",
            "textContent" : e.cpu.brand
        }
    ] 

    let cpuWrapper = createWrapper("cpu-id","CPU: ",secondaryCpuElementsArray)

    // console.log(cpuWrapper);

    let secondaryOsElementsArray = [
        {
            "className" : "osName",
            "textContent" : e.os
        }
    ]

    let osWrapper = createWrapper("os-id","OS: ",secondaryOsElementsArray)

    // console.log(osWrapper);

    let secondaryRamElementsArray = [
        {
            "className" : "ramName",
            "textContent" : e.ram
        }
    ]

    let ramWrapper = createWrapper("ram-id","RAM: ",secondaryRamElementsArray)

    // console.log(ramWrapper);

    let secondarySsdElementsArray = [
        {
            "className" : "ssdName",
            "textContent" : e.ssd.size
        },
        {
            "className" : "ssdUnit",
            "textContent" : e.ssd.unit
        }
    ]

    let ssdWrapper = createWrapper("ssd-id","SSD: ",secondarySsdElementsArray)

    // console.log(ssdWrapper);

    let secondaryGElementsArray = [
        {
            "className" : "graphicsName",
            "textContent" : e.gpu
        }
    ]

    let gWrapper = createWrapper("graphics-id","Graphics: ",secondaryGElementsArray)

    // console.log(gWrapper);

    let secondaryScrszElementsArray = [
        {
            "className" : "scr-szName",
            "textContent" : e.screenSize.size
        },
        {
            "className" : "scr-sz",
            "textContent" : e.screenSize.unit
        }
    ]

    let scrszWrapper = createWrapper("scrsz-id","Screen Size: ",secondaryScrszElementsArray)

    // console.log(scrszWrapper);

    let secondaryPriceElementsArray = [
        {
            "className" : "scr-szName",
            "textContent" : e.price
        },
    ]

    let priceWrapper = createWrapper("price-id","Price: ",secondaryPriceElementsArray)

    // console.log(priceWrapper);


    let secondaryweightElementsArray = [
        {
            "className" : "weightNumber",
            "textContent" : e.weight.weight
        },
        {
            "className" : "weightUnit",
            "textContent" : e.weight.unit
        }
    ]

    let weightWrapper = createWrapper("weight-id","Weight: ",secondaryweightElementsArray)

    // console.log(weightWrapper);

    let secondarymodelElementsArray = [
        {
            "className" : "modelName",
            "textContent" : e.model
        }
    ]

    let modelWrapper = createWrapper("model-id","Model: ",secondarymodelElementsArray)

    // console.log(modelWrapper);

    let secondarydeliveryElementsArray = [
        {
            "className" : "deliveryDate",
            "textContent" : e.deliveryDate
        }
    ]

    let deliveryWrapper = createWrapper("deliveryDate-id","Delivery Date: ",secondarydeliveryElementsArray)

    // console.log(deliveryWrapper);

    let secondaryPrimeElementsArray = [
        {
            "className" : "primeName",
            "textContent" : e.isPrimeEligible
        }
    ]

    let primeWrapper = createWrapper("prime-id","Prime: ",secondaryPrimeElementsArray)

    // console.log(primeWrapper);
    console.log("-----------------------------------------------------------------");
    let inWrapper = document.createElement("div")
    inWrapper.append(brandWrapper)
    inWrapper.append(cpuWrapper)
    inWrapper.append(osWrapper)
    inWrapper.append(ramWrapper)
    inWrapper.append(ssdWrapper)
    inWrapper.append(gWrapper)
    inWrapper.append(scrszWrapper)
    inWrapper.append(priceWrapper)
    inWrapper.append(weightWrapper)
    inWrapper.append(modelWrapper)
    inWrapper.append(deliveryWrapper)
    inWrapper.append(primeWrapper)
    console.log(inWrapper);
    console.log("-----------------------------------------------------------------");

})
