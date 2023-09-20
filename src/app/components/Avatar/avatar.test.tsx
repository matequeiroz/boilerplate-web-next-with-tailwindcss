import { render, screen } from '@testing-library/react'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should render the avatar component', () => {
    // renderiza o component
    const { container } = render(<Avatar />)

    // busca o elemento e verifica a existência dele
    expect(screen.getByRole('img')).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
