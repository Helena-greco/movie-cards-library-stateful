import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { change } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          defaultValue="0"
          onChange={ change }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  change: PropTypes.func.isRequired,
};

export default InputRating;
