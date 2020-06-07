const obj = {
    name: 'bla',
    age: 22
}
console.log(Object.getOwnPropertyDescriptors(obj))


// function cl(render) {
//     console.log(render)
// }
// localStorage.setItem('name', 123)
//
// const obj = {
//     name: 'Max',
//     age: 20
// }
//
//
// localStorage.setItem('human', JSON.stringify(obj))
//

// cl(localStorage)


const delay = ms => {
    return new Promise(r => setTimeout(() => r('lol'), ms))
}

// delay(2000)
//     .then((data) => console.log(data))


const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('fetch')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(r => r.json())
// }
//
// fetchTodos()
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

async function fetchAsyncTodos() {
    console.log('fetch 2')
    try {
        await delay(2000)
        const r = await fetch(url)
        const data = await r.json()
        console.log(data)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('lol')
    }
}

// fetchAsyncTodos();




//  function search() {
//     for (let i of [1,2,3,4,5,6,7,8,9,10]) {
//         fetch(`http://google.com/search?=${i}`)
//             .then(response => {
//                 console.log('yes')
//             })
//             .catch((error) => {
//                 console.log(i)
//             })
//     }
// }
// async function aa () {
//     for await (let k of search()) {
//
//     }
// }
//
// aa()







function* numberGen(n= 3, arr) {
    for (let i=1; i <= n; i++) {
        yield [i, arr[i-1]]
    }
}

const emulate = (id, ms) => new Promise(resolve => {
    setTimeout(() => {
        fetch(`http://google.com/search?=${id}`)
            .then(response => {
                console.log('yes')
            })
            .catch((error) => {
                resolve(`${id} - ${error}`)
            })
    }, ms)
})

const map = [1000, 2000, 3000, 5000].map(value => {
    return emulate(value, value)
})


// const promises = [
//     emulate(1, 2000),
//     emulate(2, 500),
//     emulate(3, 2000)
// ]

console.log(map)


async function modern() {
    for await (const id of map) {
        console.log(id)
    }
}

modern()

// const ll_ = function () {
//     for (let k of numberGen(10)) {
//         console.log(k)
//     }
// }()







// class Test {
//
//     constructor(args) {
//         this.name = args.name
//         this.place = args.place
//     }
//     get() {
//         return [this.name, this.place];
//     }
// }
//
// const name = new Test([2312, 121]);
//
// console.log(name.get())


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('prep')
//         const back = {
//             server: 'aws',
//             port: 2000,
//             sts: 'works'
//         }
//         resolve(back)
//     }, 2000)
// })
//
// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     console.log(clientData)
// })

//
//
// setTimeout(function () {
//     console.log('time')
// }, 2000)
//
// console.log('tets')
//
// var a = { test: 1};
// var b = a;
// b.test = 2;
// console.log(a, b);
//
// var a = {test: 1 };
// var b = {test: 1 }
//
// console.log(a === b)
//
// //     let arr = ['1', '2', '3']
// //
// // function search(i) {
// //     fetch('http://google.com/search?=' + arr[i])
// //         .then(response => {
// //             console.log('yes')
// //             i===arr.length - 1 ? ()=>{} : search(i + 1)
// //         })
// //         .catch((error) => {
// //             console.log(arr[i])
// //             i===arr.length - 1 ? ()=>{} : search(i + 1)
// //
// //         })
// // }
// //
// // let i = 0;
// // search(i)