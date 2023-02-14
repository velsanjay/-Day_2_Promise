var API = "https://restcountries.com/v3.1/all";
async function api(){
    let v=fetch(API)
    out=await v
    prom=out.json()
    out1=await prom
    var parent=document.querySelector('.card')
  
    for(let i of out1){
        var child=document.createElement('div')
        child.classList.add('card-body')
        child.classList.add('col-sm-12')
        child.classList.add('col-lg-4')

        var child1=document.createElement('div')
        var child2=document.createElement('div')
        child2.style.display="inline-block"

        var header=document.createElement('h1')
        header.innerText=i.name.common
        child1.append(header)
       
        var image_ele = document.createElement('img')
        image_ele.setAttribute('src',i.flags.png)
        child2.append(image_ele)

        var capital=document.createElement('h4')
        capital.innerText=`Capital : ${i.capital}`
        child2.append(capital)

        var reg=document.createElement('h4')
        reg.innerText=`Region : ${i.region}`
        child2.append(reg)

        var code1=document.createElement('h4')
        code1.innerText=`Country Code : ${i.altSpellings[0]}`
        child2.append(code1)
        
        let lat=i.latlng[0]
        let lat1=i.latlng[1]

        var app=document.createElement('button')
        app.innerText='click for weather'
        app.setAttribute('onclick',`btn(${lat},${lat1})`) 
        child2.append(app)

        child.append(child1)
        child.append(child2)

        parent.append(child)

    }

}

function btn(lat,lat1){

    var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat1}&appid=6414d3c268564ac29015be7b65f5c3dc`
     
    console.log(WAPI)
   fetch(WAPI)
   .then((response) => response.json())
   .then((data)=> {

       alert(`
       For ${data.name}
       Current Humidity is ${data.main.humidity}
       Current Pressure is ${data.main.pressure}
       Current Temperature is ${data.main.temp}`)
      }
      
      )
      
}

api()
  
document.addEventListener("click",(event) => event.preventDefault())