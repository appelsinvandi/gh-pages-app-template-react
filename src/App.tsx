import React from 'react'

import styles from './App.module.scss'

export type AppProps = {}
export const App: React.VFC<AppProps> = () => {
  return <div className={styles.root}>Some cool React project</div>
}
