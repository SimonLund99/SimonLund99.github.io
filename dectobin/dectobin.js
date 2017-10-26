//@flow
function setup() {

    function lesTall(s, base) {
        let sum = 0;
        for (let i = 0; i < s.length; i++) {
            let c = s.charCodeAt(i) - 48;
            sum *= base;
            sum += c;
        }
        return sum;
    }
    lesTall(1101, 2);
}