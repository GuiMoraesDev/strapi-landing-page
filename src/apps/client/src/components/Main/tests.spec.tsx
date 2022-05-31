import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /advanced react/i }),
    ).toBeInTheDocument();
  });

  it('should render correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
    });
  });
});
