function changeStyle() {
    var borderColorRed = document.getElementById("borderColorRedInput").value;
    var borderColorGreen = document.getElementById("borderColorGreenInput").value;
    var borderColorBlue = document.getElementById("borderColorBlueInput").value;
    
    var textColorRed = document.getElementById("textColorRedInput").value;
    var textColorGreen = document.getElementById("textColorGreenInput").value;
    var textColorBlue = document.getElementById("textColorBlueInput").value;
    
    var borderWidth = document.getElementById("borderWidthInput").value;
    
    var paragraph = document.getElementById("targetParagraph");
    
    paragraph.style.borderColor = `rgb(${borderColorRed}, ${borderColorGreen}, ${borderColorBlue})`;
    paragraph.style.color = `rgb(${textColorRed}, ${textColorGreen}, ${textColorBlue})`;
    paragraph.style.borderWidth = borderWidth + "px";
}