/**
 * Created by yevhen-loboda on 13.01.17.
 */
function WebCalc() {
    var value1 = document.getElementById("num1").value;
    var value2 = document.getElementById("num2").value;
    alert("value1:" + value1);
    alert("value2:" + value2);
}
document.getElementById("btn").onclick = WebCalc;