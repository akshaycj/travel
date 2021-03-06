import React from 'react';
import {Card, Select, Form, Input, Upload, Icon, Button, Progress } from 'antd';
import {storage, ref,str} from './constants';
import AutoResponsive from 'autoresponsive-react';

const FormItem = Form.Item;
const Option = Select.Option;

class dd extends React.Component{

  constructor(props){
    super(props);

    this.state={
      selected:false,
      type:'',
      title:'',
      desc:'',
      progress:0,
      clicked:false,
      fileList:[],
      img:'',
      id:'',
      values:[],
    }
  }

  selectChange(value){
    this.setState({selected:true,type:value});

  }

      handleFile(event){
        //console.log('file',event);
        const name = event.uid;
        const self = this;
        var reader =new FileReader();
        reader.onload=function(evt){
          //jsonData(evt.target.result)
          //console.log("event",evt);
          self.setState({img:evt.target.result});
          //console.log("imgD",evt.target.result);
          //self.uploadFile();

        }
        reader.readAsDataURL(event)
      }

      uploadFile(){
        console.log("reached upload");
        const self = this;

        fetch(this.state.img)
          .then(function(result){return result.blob()})
          .then(function(blob){
            console.log("blob",blob);
            var key_id = ref.child('data/userid/'+self.state.type).push().key;
            self.setState({id:key_id});

            const uploadTask = storage.ref('uid/'+self.state.type).child(key_id+'.jpg').put(blob);

              uploadTask.on(str.TaskEvent.STATE_CHANGED, // or 'state_changed'
                            function(snapshot) {
                              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                              self.setState({clicked:true});
                              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                              console.log("reached progress",progress);
                              self.setState({progress:Math.round(progress)});

                            }, function(error) {



                          }, function() {

                            var downloadURL = uploadTask.snapshot.downloadURL;
                            var data={
                              title:'',
                              desc:'',
                              cover:'',
                            }
                            data.title= self.state.title;
                            data.desc = self.state.desc;
                            data.cover = downloadURL;
                            ref.child('data/uid/'+self.state.type+'/'+key_id).set(data)
                            self.setState({clicked:false});
                          });
          })
      }

        handleChange = ({ fileList }) => {
          this.setState({ fileList })
          console.log("origin",fileList);
          const len = fileList.length;
          this.handleFile(fileList[len-1].originFileObj)
      }
      handleRemove(file){
        console.log("fileList",file);/*
        storage.ref('gallery/').child('images/'+file.name).delete();
        ref.child('gallery/'+file.uid).remove();
        this.fetchData();*/
    }
    submit(e){
      e.preventDefault();
      var self = this;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({title:values.title,desc:values.desc},function(data){
          console.log("asda",this.state.title);
          this.uploadFile();
        })
      }

    })

    }


  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Form onSubmit={this.submit.bind(this)}>
        <FormItem>
          <Select placeholder="Type"  onChange={this.selectChange.bind(this)}>
           <Option value="package">Package</Option>
           <Option value="destination">Destination</Option>
           <Option value="activity">Activity</Option>
         </Select>
        </FormItem>
        <FormItem label="Title">
          {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}

        </FormItem>
        <FormItem label="Description">
          {getFieldDecorator('desc', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}
        </FormItem>
        <FormItem label="Photos:">
          <Upload name="logo" listType="picture"
            onChange={this.handleChange.bind(this)}
            onRemove={this.handleRemove.bind(this)}>
            <Button>
              <Icon type="upload" /> Click to upload
            </Button>
          </Upload>
        </FormItem>
        <FormItem>
          <div style={{width:'100%',textAlign:'center'}}>
            {this.state.clicked?<Progress type="circle" percent={this.state.progress} />:<div></div>}
            <br />
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </FormItem>
      </Form>
  )
}
}

const DataForm = Form.create()(dd);

export default class Data extends React.Component{
  getAutoResponsiveProps() {
      return {
        itemMargin: 10,

        itemClassName: 'item',
        gridWidth: 100,
        transitionDuration: '.5'
      };
  }
  render(){
    return(

        <div style={{width:'50%',margin:'auto'}}>
          <Card title="Add Content:">
            <div style={{width:'50%',margin:'auto'}}>
              <DataForm />

            </div>
          </Card>
        </div>
    )
  }
}
