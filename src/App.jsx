import { useState } from 'react'
import { Stack } from './ui/Stack/Stack.jsx'
import { Button } from './ui/Button/Button.jsx'
import './App.css'


function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
    <Stack 
    direction ='column' 
    align = 'center'
    justify='center'
    gap={16}
    >
      Button Home Work
    </Stack>
      <Button
      loading={loading}
      onClick={()=> {setLoading(true);
      setTimeout(() => {
      setLoading(false);
      }, 2000);
    }}
>
  Send
      </Button>
    </>
  )
}

export default App;
