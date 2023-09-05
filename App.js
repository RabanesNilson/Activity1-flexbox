import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{ uri: 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/365282666_635583915202685_2213718230906510146_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFc-WVBoZUFELLSUXK9zCCTWBe51qfsiy1YF7nWp-yLLZnbLNcMhlDWW2fnkcvgtcraTUf4kSwbl4jpMKbneD_1&_nc_ohc=vIjzKhAC1ZEAX8DyBAB&_nc_ht=scontent.fmnl9-1.fna&_nc_e2o=c&oh=00_AfAmlxSsreF_bqpWFjaCxtUBNe7UFCJuq3dIaeyVZIpHbA&oe=64FB6EAB'}} style ={styles.Picture} />
     </View>
  ) 
};
const BioData = () =>{
  return(
    <View> 
<Text style ={styles.name}> Jenmarie J. Cumahig </Text>
<Text style={styles.course}> BS Information Technology </Text> 
</View>
  )
}

const SubjectLabel = () =>{
  return(
    <View>
      <Text style={styles.label}> My Subject </Text>
    </View>
  )
}
const SubjectOfferings = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOfferings}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.profile}>
      <Picture />
      <BioData />
      </View>

      
      <View style ={styles.label}>
      <SubjectLabel/> 
      </View>

      
      <SubjectOfferings/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },
 
  profile: {
    backgroundColor: '#24469C',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#fff',
    fontSize: '20px',
    marginLeft: '20px' 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

 label:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
  fontWeight: 'bold'
 },

 subjectOfferings:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: '#DCDCDC',
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 subjectCode:{
  fontSize: '22px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescription:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectUnits:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'gray',
 },

seeMore:{
  color:'#24469C',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
});