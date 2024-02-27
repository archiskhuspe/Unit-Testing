const condition = (a) => {
    if (a < 10) return 10
    else if (a >= 10 && a < 20) return 20
    // else return 30
    else return a
}
// condition(4)

module.exports = {
    condition
}