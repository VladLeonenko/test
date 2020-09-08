const text = [
    'С НАМИ ЛЕГКО, УБЕДИТЕСЬ САМИ'
]

let line = 0
let count = 0
let result = ''

// window.addEventListener('scroll',
    function writeText() {
    let interval = setTimeout(
        () => {
            result += text[line][count]
            document.getElementById('dinamicText').innerHTML= result + '|'
            count++
            if (count >= text[line].length) {
                count = 0
                line ++
                if (line == text.length) {
                    clearTimeout(interval)
                    document.getElementById('dinamicText').innerHTML = result
                    return true
                }
            }
            writeText()
        }, 150)
        
}
// )
writeText()