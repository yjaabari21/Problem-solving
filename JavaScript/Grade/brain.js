let marks = [67, 89, 45, 78, 90, 56, 88, 92, 73, 84];
console.log(marks);
console.log();
console.log(calcuGrade(marks));



function calcuGrade(marks){
    const avg  = calcuAvarge(marks);

    if(avg < 60) return "F";
    if(avg < 70) return "D";
    if(avg < 80) return "C";
    if(avg < 90) return "B";
    return "A";
}

function calcuAvarge(mrx){
    let total = 0;

    for(let x of mrx)
        total+= x;
    return total / mrx.length;
    
}