/**
 * Created by yevhen-loboda on 13.01.17.
 */
function WebCalc() {
    var value1 = Number(document.getElementById("num1").value);
    var value2 = Number(document.getElementById("num2").value);
    var sum = value1 + value2;
    alert("value1:" + value1);
    alert("value2:" + value2);
    alert("Sum=" + sum);
}
document.getElementById("btn").onclick = WebCalc;