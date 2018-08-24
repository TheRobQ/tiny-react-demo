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
        apiKey='ivaxcw1envbsrbfyeifzwi4luqhftosxp5msla0g5owga4nq'
        init={{
          plugins: 'link image advcode tinymcespellchecker',
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
