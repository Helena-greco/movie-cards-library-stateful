import React from 'react';
import InputTexts from './InputTexts';
import InputRating from './InputRating';
import InputSelect from './InputSelect';
import TextArea from './TextArea';

// Ajuda do Pessiane na mentoria Técnica
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTexts
          title={ title }
          subtitle={ subtitle }
          imagePath={ imagePath }
          onChange={ this.handleChange }
        />
        <TextArea
          storyline={ storyline }
          onChange={ this.handleChange }
        />
        <InputRating
          rating={ rating }
          onChange={ this.handleChange }
        />
        <InputSelect
          genre={ genre }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
