import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Picture = () => {
  return(
    <View>
       <Image source={{ uri: 'https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/365123906_1723115218132149_3203234298371773746_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGDOU5G78mYPizw9nTkCrINKb86Cp4rZGcpvzoKnitkZ77bTLuK4BK-9bV96eFA4U--b1q6xhN1yc1jmtUHf9aN&_nc_ohc=1w6u8oMo99cAX_nWgam&_nc_oc=AQmIZ3WZfVf5xlaiUl764kME7TCMTeTqg1WX5222Y_511R3XcDefnQvO9-W90cXtFjE&_nc_ht=scontent.fmnl9-2.fna&_nc_e2o=c&oh=00_AfBqzU4NlvPUtP1Dy7zdyEML3v1o3-yPVEsxhxzlVYkt0w&oe=64FAB525'}} style ={styles.Picture} />
     </View>
  ) 
};
const BioData = () =>{
  return(
    <View> 
<Text style ={styles.name}> Jhannel N Quisquirin </Text>
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