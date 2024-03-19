function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min 
    return Math.floor(num)
}
console.log(rand())


function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(f1callback) 

function f1callback() {
    f2(f2callback)
}

function f2callback() {
    f3(f3callback)
}

function f3callback() {
    console.log('Olá mundo!')
}


// assim sempre vai ser executado f1, depois f2, depois f3, depois o console.log




