import React,{useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Content(){

    const[calc, setCalc] = useState(
        {
        
        numA: 0,
        numB: 0,
        resultado:0,
        })


// const[resultado, setResultado]


// console.log(calc)


const handleInputChange = (num, value) => {
    setCalc({
        ...calc, [num]:value
    })
}

//somar
const calcSomar =() => {

    
setCalc({
...calc, resultado:(calc.numA + calc.numB)
// ...produto, subtotal:(produto.preco * produto.quantidade)


})

}



return(



<View>

<Text>
  {/* <Text>Resultado: {calc.resultado}</Text>  <br></br> */}
  
<Text >{`Resultado: ${calc.resultado}`}</Text>

 <TextInput placeholder = "valor a" onChangeText = {(valor) => handleInputChange("calc", Number(valor))} keyboardType = "numeric"/>
 
 <TextInput placeholder = "valor b" onChangeText = {(valor) => handleInputChange("calc", Number(valor))} keyboardType = "numeric"/>


</Text>

<Button title = "+" color="#123"  onPress={calcSomar} />
</View>


)


}