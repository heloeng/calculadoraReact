import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { styles } from "../../styles/style";

export default function Content() {


    //criar estado (objeto)
    // irá armazenar o valor de a e b
    const [calc1, setCalc1] = useState(
        {

            numA: 0,
            numB: 0,

        })

    //armazena o resultado
    const [resultado, setResultado] = useState(0);

    // limpa o resultado
    const limpa = () => {
        setResultado({ resultado: '', })
    }

    return (

        <View style={styles.content}>
            <View style={styles.linhaHeader}></View>

            <View style={styles.fundoCalc}>
                {/* <Text >Resultado: {resultado === 0? "": `O resultado é ${resultado}`}</Text> */}
                <View style={styles.display} >
                    <Text > {resultado === 0 ? "" : resultado}</Text>
                </View>


                <View style={styles.linhaButton}>
                    <TouchableOpacity style={styles.buttonCalc} title="+" onPress={() => { setResultado(calc1.numA + calc1.numB) }}><View><Text style={styles.buttonFont}>+</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="-" onPress={() => { setResultado(calc1.numA - calc1.numB) }}><View><Text style={styles.buttonFont}>-</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="AC" onPress={(limpa) => { setResultado(calc1.numA = "", calc1.numB = "") }}><View><Text style={styles.buttonFont}>AC</Text></View></TouchableOpacity>
                </View>




                <View style={styles.linhaButton}>
                    <TouchableOpacity style={styles.buttonCalc} title="/" onPress={() => { setResultado(calc1.numA / calc1.numB) }}><View><Text style={styles.buttonFont}>/</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="%" onPress={() => { setResultado(calc1.numA % calc1.numB) }}><View><Text style={styles.buttonFont}>Mod</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="x" onPress={() => { setResultado(calc1.numA * calc1.numB) }}><View><Text style={styles.buttonFont}>X</Text></View></TouchableOpacity>
                </View>



                <View style={styles.linhaButton}>
                    <TouchableOpacity style={styles.buttonCalc} title="a²" onPress={() => { setResultado(Math.pow(calc1.numA, 2)) }}><View><Text style={styles.buttonFont}>a²</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="b²" onPress={() => { setResultado(Math.pow(calc1.numB, 2)) }}><View><Text style={styles.buttonFont}>b²</Text></View></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCalc} title="a^b" onPress={() => { setResultado(Math.pow(calc1.numA, calc1.numB)) }}><View><Text style={styles.buttonFont}>a^b</Text></View></TouchableOpacity>
                </View>





                <View style={styles.inputLinha}>
                    <TextInput text="campoA" style={styles.inputNum} placeholder="Valor  a" onChangeText={(numA) => { setCalc1({ ...calc1, numA: parseInt(numA) }) }} keyboardType="numeric" />
                    <TextInput style={styles.inputNum} placeholder="Valor b" onChangeText={(numB) => { setCalc1({ ...calc1, numB: parseInt(numB) }) }} keyboardType="numeric" />
                </View>

            </View>

        </View>


    )

}

