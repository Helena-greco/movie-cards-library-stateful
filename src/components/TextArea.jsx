import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          onChange={ change }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  change: PropTypes.func.isRequired,
};

export default TextArea;
