import PropTypes from 'prop-types';
import enumerator from '../../assets/imgs/men-enumerator.png';
import { Container } from './styles';

function Header({ onToggleTheme, selectedTheme }) {
    return (
      <Container>
        <img src={enumerator} alt="logo" />
        <button onClick={onToggleTheme} type="button">
          {selectedTheme === 'dark' ? '🌞' : '🌑'}
        </button>
      </Container>
    );
}

export { Header };

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
};
