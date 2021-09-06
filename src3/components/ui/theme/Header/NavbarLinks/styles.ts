import styled from 'styled-components';

type WrapperProps = {
  desktop?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  a {
    color: #000;
    text-decoration: none;

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    color: #fff;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
