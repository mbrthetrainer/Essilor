import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')!).render( 
    <App />,
)
