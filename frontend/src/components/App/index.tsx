import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { darkTheme, GlobalStyle, lightTheme } from '../../assets/styles'
import { ThemeContext } from '../../context/ThemeContext'
import { useThemeMode } from '../../hooks/useThemeMode'
import AppRouter from '../../routes/AppRouter'
import { useEffect } from 'react'

function App() {
  const [theme, themeToggler] = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/products')
      res.json().then((data) => console.log(data))
    }
    getProducts()
  })

  return (
    <ThemeProvider theme={themeMode}>
      <Normalize />
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, themeToggler }}>
        <AppRouter />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
