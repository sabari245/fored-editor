export function getTextWidth(text: string, font: string) {
    // re-use canvas object for better performance
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

// console.log(getTextWidth("hello there!", "bold 12pt lato"));