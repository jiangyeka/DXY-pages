
export function getImageList() {
    function createImages(count) {
        return new Array(count).fill({}).map((item, index) => {
            return {
                url: `http://iph.href.lu/${800 + index}x200?fg=666666&bg=cccccc`
            }
        })
    }
    return createImages(12)
}
export function getExampleImage() {
    return 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
}
export function getExampleVideo() {
    return 'https://www.runoob.com/try/demo_source/mov_bbb.mp4'
}