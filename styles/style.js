
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({


    header: {
     
        backgroundColor: "#FF04DD",
        alignItems: 'center',
        justifyContent: "center",
        height: 120
   
    },





headerFont:{
fontSize: 30
    },

buttonFont:{
    fontSize: 30
    },

footerFont: {
    fontSize: 20

},



content: {
height: 520,
justifyContent: "center",
 alignItems: 'center',
     
  },
        
        

 rodape: {
  
backgroundColor: "#FF04DD",
 height: 100,
 justifyContent: "center",
  alignItems: 'center'
                    },
  
        

buttonCalc: {
height: 60,
width: 80,
backgroundColor: "#F624FF",
alignItems: "center",
justifyContent: "center",
marginBottom: 5,
marginEnd: 9,
marginTop: 5,
borderRadius: 9,
borderStartWidth: 8,
shadowColor: "#666666",
shadowOffset: {
	width: 5,
	height: 2,
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 19, },
   },


linhaButton:{
flexDirection: "row"

},



inputLinha:{

flexDirection: "row",
justifyContent: "center",
alignItems: 'center'
},

inputNum:{

backgroundColor: "#F6FFFF",
height: 50,
width: 130,
textAlign: 'center',
 marginRight: 5,
 fontSize: 15
 
 },

   
 display:{

backgroundColor: "#F6FFFF",
height: 60,
width: 270,
alignItems: 'center',
justifyContent: "center",
fontSize: 20,
   

        },
    



fundoCalc: {
flexDirection: "column",
width: 300,
height: 350,
backgroundColor: "#45FF13",
alignItems: 'center',
paddingTop: 9,

shadowOffset: {
	width: 5,
	height: 4,

 },

elevation: 70,
shadowOpacity: 3,
shadowRadius: 4.84,


        },


        });