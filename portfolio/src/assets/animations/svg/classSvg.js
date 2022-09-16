export default class AnimationSVG {
    run(svgId, animationStyle) {
        this.paths = [...document.querySelectorAll(`#${svgId} path`)]
        this.pathLengths = this.getPathLengths()
        this.createStylesSvg(animationStyle)
    }

    getPathLengths() {
        return this.paths.map((item, i) => Math.ceil(this.paths[i].getTotalLength()))
    }

    createStylesSvg(animationStyle) {
        this.paths.forEach(
            (item, i, array) =>
                item.style.cssText = `stroke-dasharray:${this.pathLengths[i]};
                 stroke-dashoffset:${this.pathLengths[i]};
                  animation: ${animationStyle}`)
    }

}