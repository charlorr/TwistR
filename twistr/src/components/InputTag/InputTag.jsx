import React from 'react';
import {
  Row,
  Col,
  Button,
  FormField,
  Input,
  Badge 
} from "reactstrap";
import onEvent from "react-onevent";

class InputTag extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      tagsInputValue:'',
      tags: [],
      tag_chars_left:20, max_tag_chars: 60,
    };
  }

  sendData = () => {
    this.props.parentCallback(this.state.tagsInputValue);
  }

  addTag = (tag) => {
    tag = tag.trim();
    if(!(this.state.tags.indexOf(tag) >-1)) {
      let tags = this.state.tags.concat([tag]);
      this.updateTags(tags);
    }
    this.updateTagValue('');
  }

  updateTagValue = (value) => {
    if(value === ','){
      return;
    }
    this.setState({
      tagsInputValue: value
    })
  }

  removeTag = (removeTag) => {
    let tags = this.state.tags.filter((tag) => tag !== removeTag);
    this.updateTags(tags);
  }

  updateTags = (tags) => {
    this.setState({
      tags
    })
  }

  handleTagWordCount = event => {
    const tagCharCount = event.target.value.length;
    const maxTagChar = this.state.max_tag_chars;
    const tagCharLength = maxTagChar - tagCharCount;
    this.setState({tag_chars_left: tagCharLength});
  }

  render() {
    const {tagsInputValue, tags} = this.state;
    console.log(tags)

    return (
      <div className="input-tag">
        <onEvent space={(e) => this.addTag(e.target.value)}>
          <Input value={tagsInputValue} onChange={(e) =>{
            this.updateTagValue(e.target.value);
          }} type="text" placeholder="Up to three tags seperated by commas" />
        </onEvent>
        <div>
        {tags && tags.map((tag, index) => 
        <Badge varient={index} 
        label={tag} 
        type="success-inverted" 
        onClear={() => this.removeTag(tag)} />)}
        </div>
      </div>   
    );
  }
}

export default InputTag;
