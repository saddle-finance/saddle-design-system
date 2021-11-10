/** @jsxImportSource theme-ui */
import { Switch, useColorMode } from 'theme-ui'
import Text from './Text'

// TODO: Make this look good
// NOTE: The "Switch" component doesn't seem to have a defaultChecked like the checkbox does
const ModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()

  const handleChange = (evt: any) => {
    // NOTE: evt.target.checked has DOM state of internal checkbox, but without external control, how do you use it?
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <Text kind='nav1b'>Color Mode</Text>
      <Switch label={colorMode} onChange={handleChange}/>
    </div>
  )
}

export default ModeToggle