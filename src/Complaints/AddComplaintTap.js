import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Form, Textarea, Button, Text } from 'native-base';

class AddComplaintTap extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item regular>
              <Input placeholder='Title' />
            </Item>
            <Textarea style={{paddingVertical: 5}} rowSpan={5} bordered placeholder="Description" />

            <Button style={{marginTop: 10}} block >
              <Text>Add Complaint</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default AddComplaintTap;