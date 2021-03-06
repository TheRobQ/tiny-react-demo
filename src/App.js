import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: 'Initial value' };
  };

  handleEditorChange = (content) => {
    this.setState({ content });
  };

  render() {
    return (
      <div>
      <Editor
        value={this.state.content}
        onEditorChange={this.handleEditorChange}
        apiKey='YOURKEYHERE'
        cloudChannel='4.6.7'
        init={{
          plugins: 'link image advcode tinymcespellchecker powerpaste',
          spellchecker_language: 'en',
          width: '75%',
          height: 440,
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default App;
