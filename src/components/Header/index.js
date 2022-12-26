import PropTypes from 'prop-types';
import Switch from 'react-switch';
import enumerator from '../../assets/imgs/men-enumerator.png';
import { Container } from './styles';

export function Header({ onToggleTheme, selectedTheme }) {
    return (
      <Container>
        <img src={enumerator} alt="logo" />
        <div>
          <span>🌞</span>
          <Switch
            onChange={onToggleTheme}
            checked={selectedTheme === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={12}
            width={30}
            handleDiameter={20}
            offColor="#523465"
            onColor="#863"
          />
          <span>🌑</span>
        </div>
      </Container>
    );
}

Header.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
};
