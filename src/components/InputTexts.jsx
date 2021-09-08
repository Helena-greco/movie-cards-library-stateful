import React from 'react';
import PropTypes from 'prop-types';

class InputTexts extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            onChange={ change }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            onChange={ change }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            onChange={ change }
          />
        </label>
      </div>
    );
  }
}

InputTexts.propTypes = {
  change: PropTypes.func.isRequired,
};

export default InputTexts;
