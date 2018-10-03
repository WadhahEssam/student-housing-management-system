import React, {Component} from "react";
import {
  Text,
} from 'react-native';
import {
  Icon,
  Button,
  Form,
  Container,
  Item,
  Input,
  Content,
  CardItem,
  Textarea,
} from 'native-base';
 
export default class maintain extends Component {
  render(){
    return(
      <Container>
        <CardItem>
          <Icon active name="hammer" />
          <Text style={{color:'gray' , fontSize:18  , fontWeight:"bold"}}>Maintenance Request</Text>
        </CardItem>
        <Content padder>
          <Form>
            <Item rounded style={{ marginTop:10,}}>
              <Input placeholder='Subject..'  placeholderTextColor='gray' /> 
            </Item>
            <Textarea 
              rowSpan={5} 
              bordered 
              placeholder="Please mention your maintenance request.."
              placeholderTextColor='gray'  
            />
          </Form>
          <Content>
            <Item rounded style={{ marginTop:10,}}>
              <Input placeholder='Building Number..'  placeholderTextColor='gray' textAlign='center' /> 
            </Item>
            <Item rounded style={{ marginTop:10,}}>
              <Input placeholder='Room Number..' placeholderTextColor='gray' textAlign='center' /> 
            </Item>
          </Content> 
          <Button  
            full
            rounded
            style={{marginTop:10}}
            light
          >
            <Text style={{ fontSize:20,fontWeight:"bold" ,textAlign:'center'  }}>Send</Text>   
          </Button>
        </Content>
      </Container>
    );
  } 
}

 