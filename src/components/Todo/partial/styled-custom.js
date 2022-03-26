import styled, { createGlobalStyle} from 'styled-components'

const StyledLi = styled.li`
  height: var(--item-height);
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  animation: fadeIn ease-out 0.5s forwards;
  :last-child {
    border-bottom: none;
  }
  label {
    cursor: pointer;
    padding: 16px;
    margin-right: 60px;
    display: block;
    line-height: 1.2;
    color: ${props => props.done ? '#bbb7b7e6' : 'inherit'};
    text-decoration: ${props => props.done ? 'line-through' : 'unset'}; ;
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid rgba(149, 140, 140, 0.1);
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  :hover {
    opacity: 0.8;
  }
  :active {
    background-color: #eee;
  }
`

const StyleTheme = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
  }
  .todo-app {
    .header {
      .title {
      button {
        background-color: ${({ theme }) => theme.themeBtn};
      }

      }
      input {
        color: ${({ theme }) => theme.themeBtn};
        background-color: ${({ theme }) => theme.inputBg};
      }
    }
    .todo-wrapper {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
      .todo-list {
        background-color: ${({ theme }) => theme.itemBg};;
        li {
          border-bottom: 1px solid ${({ theme }) => theme.borderColor};
        }
        .view {
          color: ${({ theme }) => theme.white};
          .destroy {
            color: ${({ theme }) => theme.white};
          }
          :hover {
            background-color: ${({ theme }) => theme.itemBgHover};
          }
        }
      }
    }
    .footer {
      border-top: 1px solid ${({ theme }) => theme.borderColor};
      background-color: ${({ theme }) => theme.itemBg};
      color: ${({ theme }) => theme.actionBtnColor};
    }
  }
`;


const DarkTheme = {
  white: 'white',
  background: '#15141A',
  themeBtn: '#CFCFD8',
  itemBg: '#27262c',
  itemBgHover: '#53525b',
  inputBg: '#2B2A33',
  borderColor: '#55535f',
  actionBtnColor: '#937e7e'
};

const LightTheme = {
  white: 'initial',
  background: 'initial',
  themeBtn: 'initial',
  itemBg: 'initial',
  inputBg: 'initial',
  borderColor: 'initial',
  actionBtnColor: 'initial'
};

export { StyleTheme, DarkTheme, LightTheme, StyledLi, StyledButton }