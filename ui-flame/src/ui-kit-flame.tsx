import './set-public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

export {Button} from './app/components/Button'

// const lifecycles = singleSpaReact({
//   React,
//   ReactDOM,
//   rootComponent: (props:any)=>(
//     <Root {...props}/>
//   ),
//   errorBoundary() {
//     // Customize the root error boundary for your microfrontend here.
//     return <div>Error</div>
//   },
// })

// console.log("The registered application has been loaded!");

// export const { bootstrap, mount, unmount } = lifecycles
