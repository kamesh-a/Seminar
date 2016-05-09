/**
 	Falsy Values:
   0, undefined, null, "" ,NaN
 */
``
`
var falsyArr = [0, undefined, null, '', NaN];

function checkArrayContainingTruthyValue( arr ) {
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (value)
            console.log('Truthy value : ', value);
    };
}
checkArrayContainingTruthyValue(falsyArr);
var truthyArr = [1, -1, true, 'string', [],{},function(){},RegExp];
checkArrayContainingTruthyValue(truthyArr);
```
// Yes you can write forEach inbuilt method of Array.
// for demonstration purpose simple for loop.