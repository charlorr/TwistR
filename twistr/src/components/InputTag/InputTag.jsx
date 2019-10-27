import React from 'react';

class InputTag extends React.Component {
  constructor() {
    super();

    this.state= {
      tags: [
        'Tags',
        'Input'
      ]
    };
  }

  removeTag = (i) => {
    const inTags = [ ...this.state.tags ];
    inTags.splice(i, 1);
    this.setState({ tags: inTags });
  }

  inputDownKey = (e) => {
    const val = e.target.value;
    if(e.key === 'Enter' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val]});
      this.tagInput.value = null;  
    }
    else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.length - 1);
    }
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="input-tag">
        <ul className="input-tag__tags">
          { tags.map((tag, i) => (
            <li key={tag}>
              {tag}
              <button type="button" onClick={() => {this.removeTag(i);}}>+</button>
            </li>
          ))}
          <li className="input-tag__tags__input"><input type="text" onKeyDown={this.inputDownKey} ref={c => {this.tagInput = c;}}/></li>
        </ul>
      </div>   
    );
  }
}

export default InputTag;
