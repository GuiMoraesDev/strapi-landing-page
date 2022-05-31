import * as Styles from './styles';

const Main = ({
  title = 'Advanced React',
  description = 'Typescript, ReactJs, NextJs and Styled Components',
}) => {
  return (
    <Styles.Container>
      <Styles.Logo
        src="/img/logo.svg"
        alt="pink hex with an withe atom centralized"
      />

      <Styles.Title>{title}</Styles.Title>

      <Styles.Description>{description}</Styles.Description>

      <Styles.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer sit in a workstation with three screens in front of him"
      />
    </Styles.Container>
  );
};

export default Main;
