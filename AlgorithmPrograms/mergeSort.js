
var Utility=require('../utility/utility');
var readline=require('readline-sync');

function Merge()
{
    var res=Utility.fileCall();
    Utility.mergeSort(res);
    console.log("Merge sorted result ",res);
}
Merge();