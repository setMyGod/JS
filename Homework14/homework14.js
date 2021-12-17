





const p = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        let div = document.createElement('div');
        document.body.append(div)
        let p = document.createElement('p');
        div.append(p)
        p.innerHTML = '7:30 I Wake up :)'

    },1000)
    resolve()



    setTimeout(()=>{
        let div1 = document.createElement('div');
        document.body.append(div1)
        let p1 = document.createElement('p');
        div1.append(p1)
        p1.innerHTML = '7:32 I watch social networks'

    }, 2000)
    resolve()



    setTimeout(()=>{
        let div2 = document.createElement('div');
        document.body.append(div2)
        let p2 = document.createElement('p');
        div2.append(p2)
        p2.innerHTML = '7:40 I am goin to bathroom'

    },3000)
    resolve()

    setTimeout(()=>{
        let div = document.createElement('div');
        document.body.append(div)
        let h1 = document.createElement('h1');
        document.body.append(h1)
        h1.innerHTML = 'Good Morning'
        document.body.style.backgroundColor = 'yellow'
    },200)

    setTimeout(()=>{
        let div3 = document.createElement('div');
        document.body.append(div3)
        let p3 = document.createElement('p');
        div3.append(p3)
        p3.innerHTML = '8:00 Start eat my breakfast'

    }, 4000)

    setTimeout(()=>{
        let div4 = document.createElement('div');
        document.body.append(div4)
        let p4 = document.createElement('p');
        div4.append(p4)
        p4.innerHTML = '8:30 I am goin to work'

    },6000)

    setTimeout(()=>{
        let div5 = document.createElement('div');
        document.body.append(div5)
        let p5 = document.createElement('p');
        div5.append(p5)
        p5.innerHTML = '14:00 the day is coming '
        document.body.style.backgroundColor = 'gold'

    },7000)
    setTimeout(()=>{
        let div6 = document.createElement('div');
        document.body.append(div6)
        let p6 = document.createElement('p');
        div6.append(p6)
        p6.innerHTML = 'I work every day :)'

    },8000)
    setTimeout(()=>{
        let div7 = document.createElement('div');
        document.body.append(div7)
        let p7 = document.createElement('p');
        div7.append(p7)
        p7.innerHTML = '20:00 start watching a lecture at octen school '

    },10000)

    setTimeout(()=>{
        let div8 = document.createElement('div');
        document.body.append(div8)
        let p8 = document.createElement('p');
        div8.append(p8)
        p8.innerHTML = 'evening start'
        document.body.style.backgroundColor = 'teal'

    },9000)

    setTimeout(()=> {
        let div9 = document.createElement('div');
        document.body.append(div9)
        let p9 = document.createElement('p');
        div9.append(p9)
        p9.innerHTML = '22:00 Zzz-zz-Zz'
    }, 11000)









});
