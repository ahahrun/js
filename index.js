const scanner = require('prompt-sync')()

function main() {
    const size = parseInt(scanner('Enter size to be computed: '))
    const numbers = []

    for(let i = 0; i < size; i++) {
        const num = parseFloat(scanner(`Enter numbers ${i+1}: `))
        numbers.push(num)
    }
    const operations = scanner('Enter operation to be perform "\[+, -, *, /]\": ')
    switch(operations){
        case '+':
            console.log(`Sum is ${add(numbers)}`)
            break
        case '-':
            console.log(`Difference is ${subtraction(numbers)}`)
            break
        case'*':
            console.log(`Multiplicataion is ${mul(numbers)}`)
            break
        case'/':
            console.log(`Division is ${division(numbers)}`)
            break
        default:
            console.log('Invalid Input')
            break
    }
}

function add(nums) {
    let sum = 0 
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j]
    }
    return sum.toFixed(2)
}
function subtraction(nums) {
    let minus = nums[0]
    for (let j = 1; j < nums.length; j++){
        minus -= nums[j]
    }
    return minus.toFixed(2)
}
function mul(nums){
    let times = nums[0]
    for (let j = 1; j < nums.length; j++){
        times *= nums[j]
    }
    return times.toFixed(2)
}
function division(nums){
    let div = nums[0]
    for (let j = 1; j < nums.length; j++){
        if(nums[j] === 0){
            return 'Erron: Division by zero'
        }
        div /= nums[j]
    }
    return div.toFixed(2)
}
main()