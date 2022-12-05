function fitsInOneBox(boxes){

    const fits = ({l:l1, w:w1, h:h1}, {l:l2, w:w2, h:h2})  => (l1 > l2 && w1 > w2 && h1 > h2) || (l2 > l1 && w2 > w1 && h2 > h1);
    var itFits = true;

    for (let i = 0; i < boxes.length - 1; i++){
        const theBoxesFits = fits(boxes[i], boxes[i+1]);

        if(!theBoxesFits){
            itFits = false;
            break;
        }

    }


    return itFits;

}


module.exports = fitsInOneBox;